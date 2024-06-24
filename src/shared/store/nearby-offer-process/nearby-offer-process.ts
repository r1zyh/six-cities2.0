import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '@shared/const';
import { TOffer } from '@shared/ui/mocks/type';

type NearbyOffersProcessType = {
  nearbyOffers: TOffer[];
};

const initialState: NearbyOffersProcessType = {
  nearbyOffers: [],
};

export const nearbyOffersProcessSlice = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {
    setNearbyOffers: (state, action: PayloadAction<TOffer[]>) => {
      state.nearbyOffers = action.payload;
    },
  },
});
