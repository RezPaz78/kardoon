import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ColumnTasks from "./components/ColumnTasks";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useDashboard } from "../../services/context/dashboardContext/DashboardContext";
import { axiosInstance } from "../../services/axios";
import { toast } from "react-toastify";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";

const useStyles = makeStyles((theme) => ({
  container: {
    boxSizing: "border-box",
    width: "100%",
    margin: "0",
  },
}));

const Index = () => {
  const [dashboardState, dashboardDispatch] = useDashboard();
  const classes = useStyles();
  const token = useLocalStorage("token");

  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axiosInstance
      .get("/task", config)
      .then((res) => {
        const tasks = res.data;
        dashboardDispatch({
          type: "SET-TASKS",
          data: {
            todo: tasks.todo,
            inProgress: tasks.in_progress,
            done: tasks.done,
          },
        });
      })
      .catch((error) =>
        toast.error("بازیابی تسک‌ها با مشکل رو به رو شده است!")
      );

    return () => {
      dashboardDispatch({ type: "RESET" });
    };
  }, [dashboardDispatch, token]);

  const handleOnDragEnd = (result) => {
    let selectedTask;
    switch (result.source.droppableId) {
      case "TODO":
        selectedTask = dashboardState.todoList[result.source.index];
        break;

      case "IN-PROGRESS":
        selectedTask = dashboardState.inProgressList[result.source.index];
        break;

      case "DONE":
        selectedTask = dashboardState.doneList[result.source.index];
        break;
      default:
        break;
    }

    let status = result.destination.droppableId;
    dashboardDispatch({
      type: `REMOVE-${result.source.droppableId}`,
      data: {
        removeIndex: result.source.index,
      },
    });

    dashboardDispatch({
      type: `ADD-${status}`,
      data: {
        task: selectedTask,
        insertIndex: result.destination.index,
      },
    });

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    status = status.toLowerCase();
    status = status.replace("-", " ");
    let data = {
      status,
      _method: "PUT",
    };
    axiosInstance
      .post(`/task/${selectedTask.id}`, data, config)
      .then((res) => {
        if (res.data.message === "تسک با موفقیت بروز شد") {
          toast.success("ویرایش تسک با موفقیت انجام شد!");
        }
      })
      .catch((error) => {
        toast.error("ویرایش تسک با خطا مواجه شد!");
        window.location.reload();
      });
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Grid
        className={classes.container}
        container
        justify="center"
        spacing={8}
      >
        <Grid item xs={4} container justify="center">
          <ColumnTasks
            name="انجام شده"
            type="DONE"
            taskList={dashboardState.doneList}
          />
        </Grid>
        <Grid item xs={4} container justify="center">
          <ColumnTasks
            name="در حال انجام"
            type="IN-PROGRESS"
            taskList={dashboardState.inProgressList}
          />
        </Grid>
        <Grid item xs={4} container justify="center">
          <ColumnTasks
            name="انجام دادنی ها"
            type="TODO"
            taskList={dashboardState.todoList}
          />
        </Grid>
      </Grid>
    </DragDropContext>
  );
};

export default Index;
