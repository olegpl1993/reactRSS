import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formReducer from './formSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    formState: formReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
