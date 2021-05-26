import { createContext, useContext } from "react";

export const DashboardInitialState = {
    todoList : [
        {text: 'go to school', id: 1},
        {text: 'go to gym', id: 2},
        {text: 'practise', id: 3},
        {text: 'go to home', id: 4},
        {text: 'read a book', id: 5},
    ],
    inProgressList: [
        {text: 'go to school', id: 6},
        {text: 'go to gym', id: 7},
        {text: 'practise', id: 8},
        {text: 'go to home', id: 9},
        {text: 'read a book', id: 10},
    ],
    doneList: [
        {text: 'go to school', id: 11},
        {text: 'go to gym', id: 12},
        {text: 'practise', id: 13},
        {text: 'go to home', id: 14},
        {text: 'read a book', id: 15},
    ],
};

export const DashboardContext = createContext(DashboardInitialState);
export const useDashboard = () => useContext(DashboardContext);