import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
