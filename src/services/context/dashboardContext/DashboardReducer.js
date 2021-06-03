const DashboardReducer = (state, action) => {
    let tempState = state;
    switch (action.type) {
        case "ADD-TODO":
            tempState.todoList.splice(action.data.insertIndex, 0, action.data.task);
            return {
                ...state,
                todoList: tempState.todoList,
            };
        case "ADD-IN-PROGRESS":
            tempState.inProgressList.splice(action.data.insertIndex, 0, action.data.task);
            return {
                ...state,
                inProgressList: tempState.inProgressList,
            };
        case "ADD-DONE":
            tempState.doneList.splice(action.data.insertIndex, 0, action.data.task);
            return {
                ...state,
                doneList: tempState.doneList,
            };
        default:
            return { ...state }
    }
};

export default DashboardReducer;