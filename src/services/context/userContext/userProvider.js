import React, { useReducer } from "react";
import { userContext, userInitialState } from "./userContext";
import userReducer from "./userReducer";

const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);
  return (
    <userContext.Provider value={[state, dispatch]}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserProvider;
