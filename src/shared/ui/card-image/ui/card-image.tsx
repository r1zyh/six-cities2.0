import { AppRoute, placeCardType } from '../../../const';
import { Link } from 'react-router-dom';

type TCardImage = {
  type?: string;
  id: string;
  previewImage: string;
};

export function CardImage({ type, id, previewImage }: TCardImage): JSX.Element {
  return type === placeCardType ? (
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`${AppRoute.Offer}/${id}`}>
        <img
          className="place-card__image"
          src={previewImage}
          width="260"
          height="200"
          alt="Place image"
        />
      </Link>
    </div>
  ) : (
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <Link to={`${AppRoute.Offer}/${id}`}>
        <img
          className="place-card__image"
          src={previewImage}
          width="150"
          height="110"
          alt="Place image"
        />
      </Link>
    </div>
  );
}
