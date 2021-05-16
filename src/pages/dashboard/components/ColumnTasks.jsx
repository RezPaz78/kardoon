import React from 'react';
import {Droppable} from "react-beautiful-dnd";
import {makeStyles} from "@material-ui/core/styles";
import Task from "./Task";

const useStyles = makeStyles((theme) => ({
    columnTasks: {
        padding: theme.spacing(2),
        borderRadius: '10px',
        boxShadow: '0 0 10px #ccc',
        backgroundColor: '#fafafa',
    }
}));

const ColumnTasks = ({id, name, taskList}) => {

    const classes = useStyles();

    return (
        <Droppable droppableId={`droppable-${id}`}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={classes.columnTasks}
                    style={{width: '100%'}}
                >
                    <h3>{name}</h3>
                    {
                        taskList.map(item => <Task key={item.id} id={item.id} text={item.text}/>)
                    }
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
};

export default ColumnTasks;