import React from "react";
import {DragDropContext} from "react-beautiful-dnd";
import ColumnTasks from "./components/ColumnTasks";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {useDashboard} from "../../services/context/dashboardContext/DashboardContext";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2),
    },
}));

const Index = () => {
    const [dashboardState, dashboardDispatch] = useDashboard();

    const classes = useStyles();

    const handleOnDragEnd = (result) => {
        let selectedTask;
        switch (result.source.droppableId) {
            case 'TODO':
                selectedTask = dashboardState.todoList[result.source.index];
                break;

            case 'IN-PROGRESS':
                selectedTask = dashboardState.inProgressList[result.source.index];
                break;

            case 'DONE':
                selectedTask = dashboardState.doneList[result.source.index];
                break;
        }
        dashboardDispatch({
            type: `ADD-${result.destination.droppableId}`,
            data: {
                task: selectedTask,
                insertIndex: result.destination.index,
            }
        })
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
                        name="To Do"
                        type="TODO"
                        taskList={dashboardState.todoList}
                    />
                </Grid>
                <Grid item xs={4} container justify="center">
                    <ColumnTasks
                        name="In progress"
                        type="IN-PROGRESS"
                        taskList={dashboardState.inProgressList}
                    />
                </Grid>
                <Grid item xs={4} container justify="center">
                    <ColumnTasks
                        name="Done"
                        type="DONE"
                        taskList={dashboardState.doneList}
                    />
                </Grid>
            </Grid>
        </DragDropContext>
    );
};

export default Index;
