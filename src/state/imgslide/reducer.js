import { createSlice } from '@reduxjs/toolkit';
import { fetchSlides } from './action';

const initialState = {
  bgSlide: [],
  isLoading: false,
  error: null,
};

const imgSlideSlice = createSlice({
  name: 'imgSlide',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlides.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSlides.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bgSlide = action.payload;
      })
      .addCase(fetchSlides.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const imgSlideReducer = imgSlideSlice.reducer;
