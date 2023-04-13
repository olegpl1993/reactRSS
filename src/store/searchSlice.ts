import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
  },
  reducers: {
    changeSearch(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.search = action.payload;
    },
  },
});

export const { changeSearch } = searchSlice.actions;
export default searchSlice.reducer;
