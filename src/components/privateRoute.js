import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  if (!localStorage.getItem("token")) {
    return <Redirect to="/signIn" />;
  } else {
    return (
      <Route path={props.path} exact={props.exact}>
        {props.children}
      </Route>
    );
  }
};

export default PrivateRoute;
