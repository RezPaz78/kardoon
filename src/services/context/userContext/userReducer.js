const TaskModalReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { ...action.payload.user };
    case "CLEAR":
      return {};
    default:
      return { ...state };
  }
};

export default TaskModalReducer;
