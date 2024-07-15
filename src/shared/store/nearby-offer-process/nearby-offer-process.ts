import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '@shared/const';
import { TDetailedOffer } from '@shared/types';
import offers from '@shared/data/mock-offers.json';

type NearbyOffersProcessType = {
  nearbyOffers: TDetailedOffer[];
};

const initialState: NearbyOffersProcessType = {
  nearbyOffers: offers,
};

export const nearbyOffersProcessSlice = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {
    setNearbyOffers: (state, action: PayloadAction<TDetailedOffer[]>) => {
      state.nearbyOffers = action.payload;
    },
  },
});
