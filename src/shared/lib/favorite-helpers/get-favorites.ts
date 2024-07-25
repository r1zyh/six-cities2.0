import offers from '@shared/data/mock-offers.json';

export const getFavorite = () => offers.filter((offer) => offer.isFavorite);
