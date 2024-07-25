import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (state.favorites.length < 10) {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      } else {
        alert('Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.');
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;