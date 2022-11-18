import { combineReducers, configureStore } from '@reduxjs/toolkit';
import chartsSlice from './slices/chartsSlice';
import marketsSlice from './slices/marketsSlice';

const reducers = combineReducers({
    marketData: marketsSlice,
    chartsData: chartsSlice
})

export const store = configureStore({
    reducer: reducers
});
