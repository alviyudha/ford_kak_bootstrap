import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

// Action types
export const FETCH_SLIDES_REQUEST = "imgSlide/fetchSlidesRequest";
export const FETCH_SLIDES_SUCCESS = "imgSlide/fetchSlidesSuccess";
export const FETCH_SLIDES_FAILURE = "imgSlide/fetchSlidesFailure";

// Thunk to fetch image slides
export const fetchSlides = createAsyncThunk(
  "imgSlide/fetchSlides",
  async () => {
    const data = await api.getImgSlideHome();
    return data;
  }
);
