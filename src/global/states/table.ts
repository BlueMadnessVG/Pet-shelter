import { createSlice } from "@reduxjs/toolkit";
import { TableInfo } from "../../models/table.model";

export const EmptyTableSlice: TableInfo = {
  index: 1,
  maxPage: 10,
};

export const tableSlice = createSlice({
  name: "table",
  initialState: EmptyTableSlice,
  reducers: {
    updateTable: (state, action) => {
      const result = { ...state, ...action.payload };
      return result;
    },
  },
});

export const { updateTable } = tableSlice.actions;
export default tableSlice.reducer;
