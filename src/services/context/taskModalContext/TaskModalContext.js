import { createContext, useContext } from "react";

export const TaskModalInitialState = {
    show: false,
    task: {
        title: '',
        description: '',
    }
};

export const TaskModalContext = createContext(TaskModalInitialState);
export const useTaskModal = () => useContext(TaskModalContext);