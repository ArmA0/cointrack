import { combineReducers, configureStore } from '@reduxjs/toolkit';
import marketsSlice from './slices/marketsSlice';

const reducers = combineReducers({
  marketData: marketsSlice.reducer
})

export const store = configureStore({
  reducer: reducers
});
