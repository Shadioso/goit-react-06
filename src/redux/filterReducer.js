import { createSlice } from '@reduxjs/toolkit';

export const filterReducer = createSlice({
  name: `filter`,
  initialState: ``,
  reducers: {
    handleChangeFilter(state, action) {
      return (state = action.payload);
    },
  },
});
