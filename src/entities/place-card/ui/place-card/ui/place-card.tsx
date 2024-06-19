import { BookmarksBtn } from '@shared/ui/bookmarks-button/ui';
import { Mark } from '@shared/ui/mark/ui';
import { CardPrice } from '@shared/ui/card-price/ui';
import { CardRating } from '@shared/ui/card-rating/ui';
import { CardImage } from '@shared/ui/card-image/ui';
import { PlaceCardInfo } from '../../place-card-info/ui';
import { placeCardType } from '@shared/const';
import { TOffer } from '@shared/ui/mocks/type';

type TPlaceCard = {
  cardType?: string;
  offer: TOffer;
};

export function PlaceCard({ cardType, offer }: TPlaceCard): JSX.Element {

  const { id, title, price, type, rating, isPremium, previewImage, } = offer;

  return cardType === placeCardType ? (
    <article className="cities__card place-card" id={id}>
      <Mark type={placeCardType} isPremium={isPremium} />
      <CardImage type={placeCardType} previewImage={previewImage} />
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <CardPrice type={placeCardType} price={price} />
          <BookmarksBtn type={placeCardType} />
        </div>
        <CardRating type={placeCardType} rating={rating} />
        <PlaceCardInfo title={title} type={type} />
      </div>
    </article>
  ) : (
    <article className="favorites__card place-card" id={id}>
      <Mark type={placeCardType} isPremium={isPremium} />
      <CardImage previewImage={previewImage} />
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <CardPrice type={placeCardType} price={price} />
          <BookmarksBtn type={placeCardType} />
        </div>
        <CardRating type={placeCardType} rating={rating} />
        <PlaceCardInfo title={title} type={type} />
      </div>
    </article>
  );
}
