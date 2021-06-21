import React from 'react';
import {useTaskModal} from "../../../services/context/taskModalContext/TaskModalContext";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    modalBody: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "40%",
        height: "40%",
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        borderRadius: theme.spacing(2),
        outline: 'none',
        padding: theme.spacing(2),
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
    },
    titleInput: {
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    descriptionInput: {
        marginBottom: theme.spacing(2),
        width: '100%',
    },
}));

const TaskModal = () => {

    const [taskModalState, taskModalDispatch] = useTaskModal();

    const classes = useStyles();

    return (
        <Modal
            open={taskModalState.show}
            onClose={() => taskModalDispatch({type: "HIDE"})}
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
                />
                <TextField
                    className={classes.descriptionInput}
                    id="outlined-multiline-static"
                    label="توضیحات"
                    multiline
                    rows={9}
                    defaultValue={taskModalState.task.description}
                    variant="outlined"
                />
                <Button variant="contained">{taskModalState.canCreate ? 'ایجاد تسک' : 'ثبت تغییرات'}</Button>
            </div>
        </Modal>
    )
};

export default TaskModal;