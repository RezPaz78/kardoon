import React from 'react';
import {Droppable} from "react-beautiful-dnd";
import {makeStyles} from "@material-ui/core/styles";
import Task from "./Task";

const useStyles = makeStyles((theme) => ({
    columnTasks: {
        width: '100%',
        height: 'fit-content',
        padding: theme.spacing(2),
        borderRadius: '10px',
        boxShadow: '0 0 10px #ccc',
        backgroundColor: '#fafafa',
    },
    columnTitle: {
        color: '#777',
        marginBottom: theme.spacing(2),
    }
}));

const ColumnTasks = ({id, name, type, taskList}) => {

    const classes = useStyles();

    return (
        <Droppable droppableId={type}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={classes.columnTasks}
                >
                    <h2 className={classes.columnTitle}>{name}</h2>
                    {
                        taskList.map((item, index) => <Task key={item.id} index={index} id={item.id} title={item.title} description={item.description}/>)
                    }
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
};

export default ColumnTasks;