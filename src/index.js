import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { Compose } from "./utils/composer";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ToastContainer } from "react-toastify";

// styles
import "./assets/styles/landing.css";
import "./assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";

// providers
import DashboardProvider from "./services/context/dashboardContext/DashboardProvider";
import { ThemeProvider } from "@material-ui/core";
import RTLProvider from "./utils/RTLProvider";
import TaskModalProvider from "./services/context/taskModalContext/TaskModalProvider";
import ConfigProvider from "./utils/providers/configProvider";
import UserProvider from "./services/context/userContext/userProvider";

ReactDOM.render(
  <BrowserRouter>
    <Compose
      components={[
        DashboardProvider,
        TaskModalProvider,
        ConfigProvider,
        UserProvider,
      ]}
    >
      <ThemeProvider theme={theme}>
        <RTLProvider>
          <CssBaseline />
          <App />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </RTLProvider>
      </ThemeProvider>
    </Compose>
  </BrowserRouter>,
  document.getElementById("root")
);
