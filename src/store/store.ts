import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formReducer from './formSlice';
import photoReducer from './photoSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    formState: formReducer,
    photoState: photoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
