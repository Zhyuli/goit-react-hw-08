import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    nameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { nameFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
