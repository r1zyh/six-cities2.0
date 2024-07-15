import { TDetailedOffer } from '@shared/types';
import { NameSpace } from '@shared/const';
import { State } from '../state/ui/state';

export const getNearbyOffers = (state: State): TDetailedOffer[] =>
  state[NameSpace.NearbyOffers].nearbyOffers;
