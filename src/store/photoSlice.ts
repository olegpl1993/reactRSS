import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse, Photo } from '../types';

export const fetchPhoto = createAsyncThunk<ApiResponse, string>(
  'photo/fetchPhoto',
  async (query) => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cdab90d80d88e1e2836283478170c1ff&tags=${query}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data: ApiResponse = await res.json();
    return data;
  }
);

const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    photoArr: [] as Photo[],
    isNotFind: false,
    isLoading: true,
  },

  reducers: {
    changePhotoArr(state, action: PayloadAction<Photo[]>) {
      state.photoArr = action.payload;
    },
    changeFindStatus(state, action: PayloadAction<boolean>) {
      state.isNotFind = action.payload;
    },
    changeLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPhoto.pending, (state) => {
        state.isLoading = true;
        state.isNotFind = false;
      })
      .addCase(fetchPhoto.fulfilled, (state, action) => {
        state.photoArr = action.payload.photos.photo;
        state.isLoading = false;
        state.isNotFind = action.payload.photos.photo.length ? false : true;
      })
      .addCase(fetchPhoto.rejected, (state) => {
        state.photoArr = [];
        state.isLoading = false;
        state.isNotFind = false;
      });
  },
});

export const { changePhotoArr, changeFindStatus, changeLoadingStatus } = photoSlice.actions;
export default photoSlice.reducer;
