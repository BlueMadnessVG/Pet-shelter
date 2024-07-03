import type { AxiosRequestConfig } from "axios";
import { apiRoute } from "../services";
import { getValidationError } from "../utils";
import { SnackbarUtilities } from "../utils/snakbar-manager";

export const AxiosInterceptor = () => {
  const updateHeader = (request: AxiosRequestConfig) => {
    const token = "121212121212121212"; //localStorage.getItem("token");
    const newHeaders = {
      Authorization: token,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    request.headers = newHeaders;
    return request;
  };

  apiRoute.interceptors.request.use((request) => {
    console.log("Starting Request", request);
    return updateHeader(request);
  });

  apiRoute.interceptors.response.use(
    (response) => {
      console.log("response", response);
      return response;
    },
    (error) => {
      console.log("error", getValidationError(error.code));
      SnackbarUtilities.error(getValidationError(error.code));
      return Promise.reject(error);
    }
  );
};
