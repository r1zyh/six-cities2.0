import { placeCardType } from '../../../const';

type TCardPrice = {
  type?: string;
};

export function CardRating({ type }: TCardPrice): JSX.Element {
  return type === placeCardType ? (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: '100%' }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  ) : (
    <div className="offer__stars rating__stars">
      <span style={{ width: '80%' }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}
