import { lazy } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../components/privateRoute";

const Dashboard = lazy(() => import("../pages/dashboard/layout"));
const Landing = lazy(() => import("../pages/landing/index"));
const SignIn = lazy(() => import("../pages/signIn/signIn"));
const SignUp = lazy(() => import("../pages/signUp/signUp2"));
const Profile = lazy(() => import("../pages/profile/index"));

export const routes = [
  {
    exact: true,
    path: "/",
    component: Landing,
  },
  {
    path: "/signUp",
    component: SignUp,
  },
  {
    path: "/signIn",
    component: SignIn,
  },
  {
    isPrivate: true,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

export const renderRoutes = (routes) => {
  return routes.map((route, key) => {
    if (route.isPrivate) {
      return (
        <PrivateRoute key={key} path={route.path} exact={route.exact}>
          <route.component />
        </PrivateRoute>
      );
    } else {
      return (
        <Route key={key} path={route.path} exact={route.exact}>
          <route.component />
        </Route>
      );
    }
  });
};
