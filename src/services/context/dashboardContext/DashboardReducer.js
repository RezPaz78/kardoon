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
      tempState.inProgressList.splice(
        action.data.insertIndex,
        0,
        action.data.task
      );
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
    case "REMOVE-TODO":
      tempState.todoList.splice(action.data.removeIndex, 1);
      return {
        ...state,
        todoList: tempState.todoList,
      };
    case "REMOVE-IN-PROGRESS":
      tempState.inProgressList.splice(action.data.removeIndex, 1);
      return {
        ...state,
        inProgressList: tempState.inProgressList,
      };
    case "REMOVE-DONE":
      tempState.doneList.splice(action.data.removeIndex, 1);
      return {
        ...state,
        doneList: tempState.doneList,
      };
    case "SET-TASKS":
      return {
        ...state,
        doneList: action.data.done,
        inProgressList: action.data.inProgress,
        todoList: action.data.todo,
      };
    default:
      return { ...state };
  }
};

export default DashboardReducer;
