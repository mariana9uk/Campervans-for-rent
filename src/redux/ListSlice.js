import { createSlice } from '@reduxjs/toolkit';
import { getAdsThunk } from './APIThunk';

const InitialState = {
  adverts: [],
};
const handleFullfilled = (state, action) => {
state.adverts = action.payload;

};
export const ListSlice = createSlice({
  name: 'adverts',
  initialState: InitialState,
  extraReducers: builder => {
    builder.addCase(getAdsThunk.fulfilled, handleFullfilled);
  },
});

export const listReducer = ListSlice.reducer