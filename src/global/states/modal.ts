import { createSlice } from "@reduxjs/toolkit";
import { ModalInfo } from "../../models/modal.model";

export const EmptyModalSlice: ModalInfo = {
  display: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: EmptyModalSlice,
  reducers: {
    updateModal: (state, action) => {
      const result = { ...state, ...action.payload };
      return result;
    },
  },
});

export const { updateModal } = modalSlice.actions;
export default modalSlice.reducer;
