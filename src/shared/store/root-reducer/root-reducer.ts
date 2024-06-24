import { combineReducers } from '@reduxjs/toolkit';
import { offersProcessSlice } from '../offer-process';
import { nearbyOffersProcessSlice } from '../nearby-offer-process';
import { reviewProcessSlice } from '../review-process';

export const rootReducer = combineReducers({
  [offersProcessSlice.name]: offersProcessSlice.reducer,
  [nearbyOffersProcessSlice.name]: nearbyOffersProcessSlice.reducer,
  [reviewProcessSlice.name]: reviewProcessSlice.reducer,
});
