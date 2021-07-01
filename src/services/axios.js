import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",
});

const getData = async (page, endpoint) =>
  await axiosInstance.get(`${page}/${endpoint}`);

export default getData;
