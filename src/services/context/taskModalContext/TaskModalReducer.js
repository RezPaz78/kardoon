const TaskModalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return {
        show: true,
        canCreate: action.data?.canCreate,
        task: {
          title: action.data?.task?.title,
          description: action.data?.task?.description,
          id: action.data?.task?.id,
        },
      };
    case "HIDE":
      return {
        show: false,
        canCreate: false,
        task: {
          title: "",
          description: "",
          id: null,
        },
      };
    default:
      return { ...state };
  }
};

export default TaskModalReducer;
