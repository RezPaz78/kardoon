import React, { useEffect, useState } from "react";
import { useTaskModal } from "../../../services/context/taskModalContext/TaskModalContext";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { axiosInstance } from "../../../services/axios";
import { useLocalStorage } from "../../../utils/hooks/useLocalStorage";
import { toast } from "react-toastify";
import { useDashboard } from "../../../services/context/dashboardContext/DashboardContext";

const useStyles = makeStyles((theme) => ({
  modalBody: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    height: "fit-content",
    backgroundColor: theme.palette.background.paper,
    border: "none",
    borderRadius: theme.spacing(2),
    outline: "none",
    padding: theme.spacing(2),
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
  },
  titleInput: {
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  descriptionInput: {
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  buttonsDiv: {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
  }
}));

const TaskModal = () => {
  const [taskModalState, taskModalDispatch] = useTaskModal();
  const [dashboard, dashboardDispatch] = useDashboard();
  const classes = useStyles();
  const token = useLocalStorage("token");
  const [taskTitle, setTaskTitle] = useState();
  const [taskDes, setTaskDes] = useState();

  useEffect(() => {
    setTaskTitle(taskModalState.task.title);
    setTaskDes(taskModalState.task.description);
  }, [taskModalState.task.description, taskModalState.task.title]);

  const taskSubmitHandler = () => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (taskModalState.canCreate) {
      let data = {
        title: taskTitle,
        description: taskDes,
      };
      axiosInstance
        .post("/task", data, config)
        .then((res) => {
          if (res.data.message === "تسک با موفقیت ایجاد شد") {
            toast.success(res.data.message);
            window.location.reload();
          }
        })
        .catch((error) => toast.error("اضافه شدن تسک جدید با خطا مواجه شد!"));
    } else {
      let data = {
        title: taskTitle,
        description: taskDes,
        _method: "PUT",
      };
      axiosInstance
        .post(`/task/${taskModalState.task.id}`, data, config)
        .then((res) => {
          if (res.data.message === "تسک با موفقیت بروز شد") {
            toast.success("ویرایش تسک با موفقیت انجام شد!");
            window.location.reload();
          }
        })
        .catch((error) => toast.error("ویرایش تسک با خطا مواجه شد!"));
    }
  };

  return (
    <Modal
      open={taskModalState.show}
      onClose={() => taskModalDispatch({ type: "HIDE" })}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.modalBody}>
        <TextField
          className={classes.titleInput}
          required
          id="filled-required"
          label="عنوان"
          defaultValue={taskModalState.task.title}
          variant="outlined"
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <TextField
          className={classes.descriptionInput}
          id="outlined-multiline-static"
          label="توضیحات"
          multiline
          rows={9}
          defaultValue={taskModalState.task.description}
          variant="outlined"
          onChange={(e) => setTaskDes(e.target.value)}
        />
        <div className={classes.buttonsDiv}>
          <Button variant="contained" onClick={taskSubmitHandler}>
            {taskModalState.canCreate ? "ایجاد تسک" : "ثبت تغییرات"}
          </Button>
          {
            taskModalState.canCreate ?
                null
                :
                <Button variant="contained" color="secondary">
                  حذف تسک
                </Button>
          }
        </div>

      </div>
    </Modal>
  );
};

export default TaskModal;
