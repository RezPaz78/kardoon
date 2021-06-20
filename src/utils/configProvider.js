import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const config = createContext(null);

const ConfigProvider = (props) => {
  const [token, setToken] = useState();

  useEffect(() => {
    axios.get("/sanctum/csrf-cookie").then((res) => console.log(res));
  }, []);

  return props.children;
};

export default ConfigProvider;
