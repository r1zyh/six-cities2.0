import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITY_MAP, NameSpace, SortTypes } from '@shared/const';
import offers from '@shared/data/mock-offers.json';
import { TCity, TDetailedOffer } from '@shared/types';
import { getFavorite } from '@shared/lib/favorite-helpers/get-favorites';

type OffersProcessType = {
  currentCity: TCity;
  activeId: string | null;
  currentSortType: string;
  offers: TDetailedOffer[];
  favoriteOffers: TDetailedOffer[];
  // detailedOffer: TDetailedOffer | null;
  isOffersLoading: boolean;
  isFavOffersLoading: boolean;
};

const initialState: OffersProcessType = {
  currentCity: CITY_MAP.Paris,
  activeId: null,
  currentSortType: SortTypes.Popular,
  offers: offers,
  favoriteOffers: getFavorite(),
  //detailedOffer: null,
  isOffersLoading: true,
  isFavOffersLoading: true,
};

export const offersProcessSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCitySelect: (state, action: PayloadAction<TCity>) => {
      state.currentCity = action.payload;
    },
    setActiveId: (state, action: PayloadAction<string | null>) => {
      state.activeId = action.payload;
    },
    setPlacesSortType: (state, action: PayloadAction<string>) => {
      state.currentSortType = action.payload;
    },
    setOffers: (state, action: PayloadAction<TDetailedOffer[]>) => {
      state.offers = action.payload;
    },
    updateOffers: (state, action: PayloadAction<TDetailedOffer>) => {
      const updatedOffer = action.payload;
      const index = state.offers.findIndex(
        (offer) => offer.id === updatedOffer.id
      );

      if (index !== -1) {
        state.offers[index] = updatedOffer;
      } else {
        state.offers.push(updatedOffer);
      }
    },
    /*   setDetailedOffer: (state, action: PayloadAction<TDetailedOffer | null>) => {
      state.detailedOffer = action.payload;
    },
    updateDetailedOfferStatus: (state, action: PayloadAction<boolean>) => {
      if (state.detailedOffer) {
        state.detailedOffer.isFavorite = action.payload;
      }
    }, */
    setOffersLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffersLoading = action.payload;
    },
    setFavoriteOffers: (state, action: PayloadAction<TDetailedOffer[]>) => {
      state.favoriteOffers = action.payload;
    },
    removeFavoriteOffers: (state, action: PayloadAction<TDetailedOffer>) => {
      state.favoriteOffers = state.favoriteOffers.filter(
        (offer) => offer.id !== action.payload.id
      );
    },
    addFavoriteOffers: (state, action: PayloadAction<TDetailedOffer>) => {
      state.favoriteOffers = [...state.favoriteOffers, action.payload];
    },
    setFavoriteOffersLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isFavOffersLoading = action.payload;
    },
  },
});

export const {
  setCitySelect,
  setActiveId,
  setPlacesSortType,
  setOffers,
  // setDetailedOffer,
  setOffersLoadingStatus,
  removeFavoriteOffers,
  addFavoriteOffers,
  setFavoriteOffers,
  setFavoriteOffersLoadingStatus,
  // updateDetailedOfferStatus,
  updateOffers,
} = offersProcessSlice.actions;
