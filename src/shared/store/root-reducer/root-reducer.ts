import { combineReducers } from '@reduxjs/toolkit';
import { offersProcessSlice } from '../offer-process';
import { nearbyOffersProcessSlice } from '../nearby-offer-process';
import { reviewProcessSlice } from '../review-process';
import { userProcessSlice } from '../user-process/user-process';

export const rootReducer = combineReducers({
  [offersProcessSlice.name]: offersProcessSlice.reducer,
  [nearbyOffersProcessSlice.name]: nearbyOffersProcessSlice.reducer,
  [reviewProcessSlice.name]: reviewProcessSlice.reducer,
  [userProcessSlice.name]: userProcessSlice.reducer,
});
