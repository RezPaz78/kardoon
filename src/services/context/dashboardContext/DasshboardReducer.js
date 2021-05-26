const DashboardReducer = (state, action) => {
    switch (action.type) {
        case "APPEAR":
            return { ...state, showDrawer: true }
        case "HIDE":
            return { ...state, showDrawer: false }
        default:
            return { ...state }
    }
}

export default DashboardReducer;