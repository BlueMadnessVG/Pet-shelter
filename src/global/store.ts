import { configureStore } from "@reduxjs/toolkit";
import { UserInfo, FilterInfo } from "../models";
import userSliceReducer from "./states/user";
import filterSliceReducer from "./states/filter";

export interface AppStore {
  user: UserInfo;
  filter: FilterInfo;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
    filter: filterSliceReducer,
  },
});
