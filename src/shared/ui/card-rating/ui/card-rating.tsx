import { placeCardType } from '@shared/const';
import { RATING_MULTIPLIER } from '../const';

type TCardPrice = {
  type?: string;
};

export function CardRating({ type }: TCardPrice): JSX.Element {
  const ratingTemplate = 4;
  return type === placeCardType ? (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: `${ratingTemplate / RATING_MULTIPLIER}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  ) : (
    <div className="offer__stars rating__stars">
      <span style={{ width: `${ratingTemplate / RATING_MULTIPLIER}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}
