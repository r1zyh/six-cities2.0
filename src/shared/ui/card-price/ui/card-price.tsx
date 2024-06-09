import { placeCardType } from '../../../const';

type TCardPrice = {
  type?: string;
};

export function CardPrice({ type }: TCardPrice): JSX.Element {
  return type === placeCardType ? (
    <div className="place-card__price">
      <b className="place-card__price-value">&euro;120</b>
      <span className="place-card__price-text">&#47;&nbsp;night</span>
    </div>
  ) : (
    <div className="offer__price">
      <b className="offer__price-value">&euro;180</b>
      <span className="offer__price-text">&nbsp;night</span>
    </div>
  );
}
