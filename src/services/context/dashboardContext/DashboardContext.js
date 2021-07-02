import { createContext, useContext } from "react";

export const DashboardInitialState = {
  todoList: [],
  inProgressList: [],
  doneList: [],
};

export const DashboardContext = createContext(DashboardInitialState);
export const useDashboard = () => useContext(DashboardContext);
