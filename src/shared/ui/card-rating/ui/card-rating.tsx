import { placeCardType } from '@shared/const';
import { RATING_MULTIPLIER } from '../const';

type TCardPrice = {
  type?: string;
  rating: number;
};

export function CardRating({ type, rating }: TCardPrice): JSX.Element {

  return type === placeCardType ? (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span
          style={{ width: `${rating / RATING_MULTIPLIER}%` }}
        >
        </span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  ) : (
    <div className="offer__stars rating__stars">
      <span style={{ width: `${rating / RATING_MULTIPLIER}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}
