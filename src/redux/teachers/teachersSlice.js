import { createSlice } from '@reduxjs/toolkit';

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    teachers: [],
  },
  reducers: {
    getTeachers(state, action) {
      state.teachers = [...state.teachers, ...action.payload];
    },
  },
});

export const { getTeachers } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
