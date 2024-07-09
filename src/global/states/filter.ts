import { createSlice } from "@reduxjs/toolkit";
import { FilterInfo } from "../../models/filter.model";

export const EmptyFilterSlice: FilterInfo = {
  type: "all",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: EmptyFilterSlice,
  reducers: {
    updateFilter: (state, action) => {
      const result = { ...state, ...action.payload };
      return result;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export default filterSlice.reducer;
