import React, { useReducer } from "react";
import { TaskModalContext, TaskModalInitialState } from "./TaskModalContext";
import TaskModalReducer from "./TaskModalReducer";

const TaskModalProvider = (props) => {
    const [state, dispatch] = useReducer(TaskModalReducer, TaskModalInitialState);
    return (
        <TaskModalContext.Provider value={[state, dispatch]}>
            {props.children}
        </TaskModalContext.Provider>
    );
};

export default TaskModalProvider;