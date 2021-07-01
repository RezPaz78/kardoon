import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ColumnTasks from "./components/ColumnTasks";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useDashboard } from "../../services/context/dashboardContext/DashboardContext";

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

    dashboardDispatch({
      type: `REMOVE-${result.source.droppableId}`,
      data: {
        removeIndex: result.source.index,
      },
    });

    dashboardDispatch({
      type: `ADD-${result.destination.droppableId}`,
      data: {
        task: selectedTask,
        insertIndex: result.destination.index,
      },
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
