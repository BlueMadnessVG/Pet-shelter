import apiRoute from "./api.config";

export const getPets = () => {
  return apiRoute.get("pets");
};
