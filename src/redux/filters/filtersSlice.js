import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    languages: '',
    levels: '',
    price_per_hour: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
