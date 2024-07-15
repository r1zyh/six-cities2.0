import { OfferTypes } from '@shared/const';

type TOfferType = (typeof OfferTypes)[keyof typeof OfferTypes];

export type TCity = {
  name: string;
  location: TLocation;
};

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
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

export type TDetailedOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
};
