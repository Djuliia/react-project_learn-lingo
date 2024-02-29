import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filteredTeachers: [],
  },
  reducers: {
    setFilter: (state, { payload }) => (state.filteredTeachers = payload),
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
