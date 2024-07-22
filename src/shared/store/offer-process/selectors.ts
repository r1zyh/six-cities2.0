import { TCity, TDetailedOffer } from '@shared/types';
import { State } from '../state/ui/state';
import { NameSpace } from '@shared/const';

export const getCurrentCity = (state: State): TCity =>
  state[NameSpace.Offers].currentCity;
export const getActiveId = (state: State): string | null =>
  state[NameSpace.Offers].activeId;
export const getCurrentSortType = (state: State): string =>
  state[NameSpace.Offers].currentSortType;
export const getOffers = (state: State): TDetailedOffer[] =>
  state[NameSpace.Offers].offers;
/* export const getDetailedOffer = (state: State): TDetailedOffer | null =>
  state[NameSpace.Offers].detailedOffer; */
export const getFavOffers = (state: State): TDetailedOffer[] =>
  state[NameSpace.Offers].offers.filter((offer) => offer.isFavorite);
export const getOffersLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offers].isOffersLoading;
export const getFavoriteOffersCount = (state: State): number =>
  state[NameSpace.Offers].offers.filter((offer) => offer.isFavorite).length;
export const getFavoriteOffersLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offers].isFavOffersLoading;
