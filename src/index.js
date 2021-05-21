import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { Compose } from "./utils/composer";
import { BrowserRouter } from "react-router-dom";

// styles
import "./assets/styles/landing.css";
import "./assets/styles/index.css";

// providers

ReactDOM.render(
  <BrowserRouter>
    <Compose>
      <App />
    </Compose>
  </BrowserRouter>,
  document.getElementById("root")
);
