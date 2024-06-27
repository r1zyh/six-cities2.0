import { TOffer } from '@shared/ui/mocks/type';
import { NameSpace } from '@shared/const';
import { State } from '../state/ui/state';

export const getNearbyOffers = (state: State): TOffer[] =>
  state[NameSpace.NearbyOffers].nearbyOffers;
