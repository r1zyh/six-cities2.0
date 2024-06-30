import { CardPrice } from '@shared/ui/card-price/ui';

type TOfferPrice = {
  price: number;
};

export function OfferPrice({ price }: TOfferPrice): JSX.Element {
  return <CardPrice price={price} />;
}
