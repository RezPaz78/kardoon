import { lazy } from "react";
import { Route } from "react-router-dom";

const Dashboard = lazy(() => import("../pages/dashboard/layout"));
const Landing = lazy(() => import("../pages/landing/index"));

export const routes = [
  {
    exact: true,
    path: "/",
    component: Landing,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

export const renderRoutes = (routes) => {
  return routes.map((route, key) => {
    return (
      <Route key={key} path={route.path} exact={route.exact}>
        <route.component />
      </Route>
    );
  });
};
