import React from 'react';
import {DragDropContext} from "react-beautiful-dnd";
import ColumnTasks from "./components/ColumnTasks";
import Grid from "@material-ui/core/Grid";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2),
    }
}));

const Ali = () => {

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
            {/*<div className={classes.container}>*/}
            {/*    <ColumnTasks id={1} name='To Do' taskList={temp[0]}/>*/}
            {/*    <ColumnTasks id={2} name='In progress' taskList={temp[1]}/>*/}
            {/*    <ColumnTasks id={3} name='Done' taskList={temp[2]}/>*/}
            {/*</div>*/}
            <Grid className={classes.container} container justify="center" spacing={8}>
                <Grid item xs={4} container justify="center">
                    <ColumnTasks id={1} name='To Do' taskList={temp[0]}/>
                </Grid>
                <Grid item xs={4} container justify="center">
                    <ColumnTasks id={2} name='In progress' taskList={temp[1]}/>
                </Grid>
                <Grid item xs={4} container justify="center">
                    <ColumnTasks id={3} name='Done' taskList={temp[2]}/>
                </Grid>
            </Grid>

        </DragDropContext>
    )
};

export default Ali;