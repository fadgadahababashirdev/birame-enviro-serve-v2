import { createSlice } from '@reduxjs/toolkit';

let initialState = false;

export const ttoggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggle: (state) => {
      return !state;
    },
  },
});

export const { toggle } = ttoggleSlice.actions;

export default ttoggleSlice.reducer;
