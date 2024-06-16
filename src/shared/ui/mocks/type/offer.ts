import { OfferTypes } from '@shared/const';

type TOfferType = (typeof OfferTypes)[keyof typeof OfferTypes];

type TCity = {
  name: string;
  location: TLocation;
};

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TOffer = {
  id: string;
  title: string;
  type: TOfferType;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};
