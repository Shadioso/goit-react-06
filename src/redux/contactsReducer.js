import { createSlice } from '@reduxjs/toolkit';

export const cotactsReducer = createSlice({
  name: `contacts`,
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      state.splice(action.payload, 1);
    },
  },
});
