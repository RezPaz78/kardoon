import { createContext, useContext } from "react";

export const TaskModalInitialState = {
  show: false,
  canCreate: false,
  task: {
    title: "",
    description: "",
    id: null,
  },
};

export const TaskModalContext = createContext(TaskModalInitialState);
export const useTaskModal = () => useContext(TaskModalContext);
