export const offerType = 'offer';
export const placeCardType = 'place-card' as string; // найти зачем было приведение типа
export const favoriteType = 'favorite';

export enum OfferTypes {
  PrivateRoom = 'private room',
  Apartment = 'apartment',
}

export const NameSpace = {
  Comments: 'COMMENTS',
  NearbyOffers: 'NEARBY_OFFERS',
  Offers: 'OFFERS',
  User: 'USER',
} as const;
