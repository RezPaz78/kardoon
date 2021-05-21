import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
});

const getData = async (page, endpoint) =>
  await axiosInstance.get(`${page}/${endpoint}`);

export default getData;
