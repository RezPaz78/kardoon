import React, { useReducer } from "react";
import { DashboardContext, DashboardInitialState } from "./DashboardContext";
import DashboardReducer from "./DasshboardReducer";

const DashboardProvider = (props) => {
    const [state, dispatch] = useReducer(DashboardReducer, DashboardInitialState);
    return (
        <DashboardContext.Provider value={[state, dispatch]}>
            {props.children}
        </DashboardContext.Provider>
    );
};

export default DashboardProvider;