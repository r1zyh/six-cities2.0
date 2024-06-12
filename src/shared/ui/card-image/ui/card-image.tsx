import { placeCardType } from '../../../const';

type TCardImage = {
  type?: string;
};

export function CardImage({ type }: TCardImage): JSX.Element {
  return type === placeCardType ? (
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src="img/apartment-03.jpg"
          width="260"
          height="200"
          alt="Place image"
        />
      </a>
    </div>
  ) : (
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src="img/apartment-small-04.jpg"
          width="150"
          height="110"
          alt="Place image"
        />
      </a>
    </div>
  );
}
