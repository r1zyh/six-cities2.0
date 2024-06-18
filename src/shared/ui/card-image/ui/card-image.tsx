import { placeCardType } from '../../../const';

type TCardImage = {
  type?: string;
  previewImage: string;
};

export function CardImage({ type, previewImage }: TCardImage): JSX.Element {
  return type === placeCardType ? (
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src={previewImage}
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
          src={previewImage}
          width="150"
          height="110"
          alt="Place image"
        />
      </a>
    </div>
  );
}
