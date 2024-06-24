import { TOffer } from '@shared/ui/mocks/type';
import { State } from '../state/ui/store';
import { NameSpace } from '@shared/const';

export const getNearbyOffers = (state: State): TOffer[] =>
  state[NameSpace.NearbyOffers].nearbyOffers;
