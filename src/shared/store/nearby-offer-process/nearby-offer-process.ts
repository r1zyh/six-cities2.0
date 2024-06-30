import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '@shared/const';
import { getMockOffers } from '@shared/ui/mocks/lib/getMocks';
import { TDetailedOffer } from '@shared/ui/mocks/type';
import { offers } from '@shared/ui/mocks/ui';

type NearbyOffersProcessType = {
  nearbyOffers: TDetailedOffer[];
};

const initialState: NearbyOffersProcessType = {
  nearbyOffers: getMockOffers(offers, 8),
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
