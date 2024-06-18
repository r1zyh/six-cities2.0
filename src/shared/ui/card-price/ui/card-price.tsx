import { placeCardType } from '../../../const';

type TCardPrice = {
  type?: string;
  price: number;
};

export function CardPrice({ type, price }: TCardPrice): JSX.Element {
  return type === placeCardType ? (
    <div className="place-card__price">
      <b className="place-card__price-value">&euro;{price}</b>
      <span className="place-card__price-text">&#47;&nbsp;night</span>
    </div>
  ) : (
    <div className="offer__price">
      <b className="offer__price-value">&euro;{price}</b>
      <span className="offer__price-text">&nbsp;night</span>
    </div>
  );
}
