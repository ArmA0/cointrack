import { combineReducers, configureStore } from '@reduxjs/toolkit';
import marketsSlice from './slices/marketsSlice';

const reducers = combineReducers({
  market: marketsSlice
})
debugger

export const store = configureStore({
  reducer: reducers
});
