import { TCity } from '@shared/ui/mocks/type';

export const offerType = 'offer';
export const placeCardType = 'place-card' as string; // найти зачем было приведение типа
export const favoriteType = 'favorite';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export enum APIRoute {
  Offers = '/offers',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite',
}

export enum OfferTypes {
  PrivateRoom = 'private room',
  Apartment = 'apartment',
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
}

export const NameSpace = {
  Reviews: 'REVIEWS',
  NearbyOffers: 'NEARBY_OFFERS',
  Offers: 'OFFERS',
  User: 'USER',
} as const;

export enum SortTypes {
  Popular = 'Popular',
  PriceLowHigh = 'Price: low to high',
  PriceHighLow = 'Price: high to low',
  TopRated = ' Top rated first',
}

export enum CITY_NAMES {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const CITY_MAP: Record<CITY_NAMES, TCity> = {
  [CITY_NAMES.Paris]: {
    name: CITY_NAMES.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  [CITY_NAMES.Cologne]: {
    name: CITY_NAMES.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  [CITY_NAMES.Brussels]: {
    name: CITY_NAMES.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  [CITY_NAMES.Amsterdam]: {
    name: CITY_NAMES.Amsterdam,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  [CITY_NAMES.Hamburg]: {
    name: CITY_NAMES.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  [CITY_NAMES.Dusseldorf]: {
    name: CITY_NAMES.Dusseldorf,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
} as const;
