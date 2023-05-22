import {createAction, createSlice} from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all',
  reducers: {
    setFilter: (_, action) => {
      return action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetToDefault, () => {
        return "all"
      })
  }
});
export const {setFilter} = filterSlice.actions;
export const resetToDefault = createAction("filters/reset-filters");
export const filterReducer = filterSlice.reducer;
