import { configureStore } from "@reduxjs/toolkit";
import { UserInfo, FilterInfo } from "../models";
import userSliceReducer from "./states/user";
import filterSliceReducer from "./states/filter";
import modalSliceReducer from "./states/modal";
import { ModalInfo } from "../models/modal.model";

export interface AppStore {
  user: UserInfo;
  filter: FilterInfo;
  modal: ModalInfo;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
    filter: filterSliceReducer,
    modal: modalSliceReducer,
  },
});
