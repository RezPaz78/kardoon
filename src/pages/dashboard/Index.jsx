import React from 'react';
import {DragDropContext} from "react-beautiful-dnd";
import ColumnTasks from "./components/ColumnTasks";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import { useDashboard } from "../../services/context/dashboardContext/DashboardContext";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2),
    }
}));

const Index = () => {

    const [ dashboardState , dashboardDispatch] = useDashboard();

    const classes = useStyles();

    const temp = [
        [
            {text: 'go to school', id: 1},
            {text: 'go to gym', id: 2},
            {text: 'practise', id: 3},
            {text: 'go to home', id: 4},
            {text: 'read a book', id: 5},
        ],
        [
            {text: 'go to school', id: 6},
            {text: 'go to gym', id: 7},
            {text: 'practise', id: 8},
            {text: 'go to home', id: 9},
            {text: 'read a book', id: 10},
        ],
        [
            {text: 'go to school', id: 11},
            {text: 'go to gym', id: 12},
            {text: 'practise', id: 13},
            {text: 'go to home', id: 14},
            {text: 'read a book', id: 15},
        ]
    ];

    return (
        <DragDropContext onDragEnd={()=> console.log('hey')}>
            <Grid className={classes.container} container justify="center" spacing={8}>
                <Grid item xs={4} container justify="center">
                    <ColumnTasks id={1} name='To Do' taskList={dashboardState.todoList}/>
                </Grid>
                <Grid item xs={4} container justify="center">
                    <ColumnTasks id={2} name='In progress' taskList={dashboardState.inProgressList}/>
                </Grid>
                <Grid item xs={4} container justify="center">
                    <ColumnTasks id={3} name='Done' taskList={dashboardState.doneList}/>
                </Grid>
            </Grid>

        </DragDropContext>
    )
};

export default Index;