import { combineReducers } from '@reduxjs/toolkit';
import { offersProcessSlice } from '../offer-process';

export const rootReducer = combineReducers({
  [offersProcessSlice.name]: offersProcessSlice.reducer,
});
