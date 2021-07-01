import { useEffect } from "react";
import axios from "axios";

const ConfigProvider = (props) => {
  useEffect(() => {
    axios.get("/sanctum/csrf-cookie");
  }, []);

  return props.children;
};

export default ConfigProvider;
