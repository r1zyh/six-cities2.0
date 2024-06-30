import { TDetailedOffer } from '@shared/ui/mocks/type';
import { NameSpace } from '@shared/const';
import { State } from '../state/ui/state';

export const getNearbyOffers = (state: State): TDetailedOffer[] =>
  state[NameSpace.NearbyOffers].nearbyOffers;
