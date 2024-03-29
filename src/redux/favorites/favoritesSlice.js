import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorites(state, action) {
    
      const index = state.favorites.findIndex(
        favorite => favorite.avatar_url === action.payload.avatar_url
      );

      if (index === -1) {
        state.favorites = [...state.favorites, action.payload];
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const { addFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
