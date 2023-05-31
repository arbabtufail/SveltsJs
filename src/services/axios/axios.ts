import axios from "axios";
import {
  requestHandler,
  successResponseHandler,
  errorResponseHandler,
} from "./interceptors";

const getAxiosInstance = (
  config = {
    headers: { "Content-Type": "application/json" },
  }
) => {
  const instance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(
    successResponseHandler,
    errorResponseHandler
  );

  return instance;
};

export default getAxiosInstance();
