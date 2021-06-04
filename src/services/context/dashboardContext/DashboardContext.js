import { createContext, useContext } from "react";

export const DashboardInitialState = {
    todoList : [
        {text: 'رفتن به مدرسه', id: 1},
        {text: 'رفتن به باشگاه', id: 2},
        {text: 'تمرین درس', id: 3},
        {text: 'رفتن به خانه', id: 4},
        {text: 'خواندن کتاب', id: 5},
    ],
    inProgressList: [
        {text: 'دیدن فیلم', id: 6},
        {text: 'دیدن فیلم های کورس آموزشی', id: 7},
        {text: 'رفتن به خرید', id: 8},
        {text: 'تماس با علی', id: 9},
        {text: 'بازی کامپیوتری', id: 10},
    ],
    doneList: [
        {text: 'تحقیق درباره برنامه نویسی', id: 11},
        {text: 'مطالعه زبان انگلیسی', id: 12},
        {text: 'رفتن به پارک', id: 13},
        {text: 'سینما', id: 14},
        {text: 'گیتار زدن', id: 15},
    ],
};

export const DashboardContext = createContext(DashboardInitialState);
export const useDashboard = () => useContext(DashboardContext);