import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormStateData } from 'types';

const formSlice = createSlice({
  name: 'formState',
  initialState: {
    data: [] as FormStateData[],
  },
  reducers: {
    changeForm(state, action: PayloadAction<FormStateData[]>) {
      state.data = action.payload;
    },
  },
});

export const { changeForm } = formSlice.actions;
export default formSlice.reducer;
