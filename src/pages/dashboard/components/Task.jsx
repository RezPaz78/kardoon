import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import {makeStyles} from "@material-ui/core/styles";
import {charLimiter} from "../../../utils/charLimiter";
import {useTaskModal} from "../../../services/context/taskModalContext/TaskModalContext";

const useStyles = makeStyles((theme) => ({
    task: {
        padding: theme.spacing(2),
        backgroundColor: "#fff",
        borderRadius: theme.spacing(2),
        marginBottom: theme.spacing(2),
        boxShadow: '0 0 10px #aaa'
    },
    taskTitle: {
        marginBottom: theme.spacing(1.5),
        fontSize: '1rem',
    },
    taskDescription: {
        direction: 'ltr',
        fontSize: '0.7rem',
    }
}));

const Task = ({index, id, title, description}) => {

    const [taskModalState, taskModalDispatch] = useTaskModal();

    const classes = useStyles();

    return (
        <Draggable draggableId={`draggable-${id}`} index={index}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={classes.task}
                    onClick={() => taskModalDispatch({
                        type: 'SHOW',
                        data: {
                            canCreate: false,
                            task: {
                                title,
                                description
                            }
                        }
                    })}
                >
                    <p className={classes.taskTitle}>{title}</p>
                    <p className={classes.taskDescription}>{charLimiter(description, 50)}</p>
                </div>
            )}
        </Draggable>
    )
};

export default Task;