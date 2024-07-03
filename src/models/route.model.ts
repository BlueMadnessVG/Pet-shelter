import { ReactElement } from "react";

export interface routeModel {
  path: string;
  element: ReactElement;
  guard: boolean;
}
