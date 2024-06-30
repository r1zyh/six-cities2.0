import { CardRating } from '@shared/ui/card-rating/ui';

type TOfferRating = {
  rating: number;
};

export function OfferRating({ rating }: TOfferRating): JSX.Element {
  return <CardRating rating={rating} />;
}
