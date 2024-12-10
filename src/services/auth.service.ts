import { loadAbort } from "../utils/Controllers/loadAbort.axios";
import apiRoute from "./api.config";

export const getPets = () => {
  const controller = loadAbort();
  return {
    call: apiRoute.get("pets", { signal: controller.signal }),
    controller,
  };
};
