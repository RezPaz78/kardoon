const TaskModalReducer = (state, action) => {
    let tempState = state;
    switch (action.type) {
        case "SHOW":
            console.log(action);
            return {
                show: true,
                canCreate: action.data?.canCreate,
                task: {
                    title: action.data?.task?.title,
                    description: action.data?.task?.description
                }
            };
        case "HIDE":
            return {
                show: false,
                canCreate: false,
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