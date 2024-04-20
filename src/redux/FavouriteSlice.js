import { createSlice } from '@reduxjs/toolkit'


export const favoritesSlice= createSlice({
    name: 'favorites',
    initialState:{
favorites:[],
    },
    reducers: {
        addToFavorites: (state, action) => {
          state.favorites.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
          state.favorites = state.favorites.filter(item => item.id !== action.payload.id); 
        },
        clearFavorites: state => {
          state.favorites = [];
        },

 }   
})
export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;

export const favoritesReducer= favoritesSlice.reducer;