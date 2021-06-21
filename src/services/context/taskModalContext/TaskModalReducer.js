const TaskModalReducer = (state, action) => {
    switch (action.type) {
        case "SHOW":
            console.log(action);
            return {
                show: true,
                task: {
                    title: action.data?.task?.title,
                    description: action.data?.task?.description
                }
            };
        case "HIDE":
            return {
                show: false,
                task: {
                    title: '',
                    description: ''
                }
            };
        default:
            return {...state}
    }
};

export default TaskModalReducer;