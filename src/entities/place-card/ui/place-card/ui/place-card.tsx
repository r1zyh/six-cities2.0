import { BookmarksBtn } from '@shared/ui/bookmarks-button/ui';
import { Mark } from '@shared/ui/mark/ui';
import { CardPrice } from '@shared/ui/card-price/ui';
import { CardRating } from '@shared/ui/card-rating/ui';
import { CardImage } from '@shared/ui/card-image/ui';
import { PlaceCardInfo } from '../../place-card-info/ui';
import { placeCardType } from '@shared/const';
import { TDetailedOffer } from '@shared/types';
//import { useState } from 'react';
/*import { useAppSelector } from '@shared/lib/hooks/useSelector/useSelector';
import { getAuthStatus } from '@shared/store/user-process/selectors';
*/
type TPlaceCard = {
  cardType?: string;
  offer: TDetailedOffer;
};

export function PlaceCard({ cardType, offer }: TPlaceCard): JSX.Element {
  //const authStatus = useAppSelector(getAuthStatus);
  const {
    id,
    title,
    price,
    type,
    rating,
    isPremium,
    previewImage,
    isFavorite,
  } = offer;

  //const [isFav, setIsFav] = useState(isFavorite);

  return cardType === placeCardType ? (
    <article className="cities__card place-card" id={id}>
      <Mark type={placeCardType} isPremium={isPremium} />
      <CardImage type={placeCardType} id={id} previewImage={previewImage} />
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <CardPrice type={placeCardType} price={price} />
          <BookmarksBtn type={placeCardType} isFavorite={isFavorite} />
        </div>
        <CardRating type={placeCardType} rating={rating} />
        <PlaceCardInfo title={title} type={type} />
      </div>
    </article>
  ) : (
    <article className="favorites__card place-card" id={id}>
      <Mark type={placeCardType} isPremium={isPremium} />
      <CardImage id={id} previewImage={previewImage} />
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <CardPrice type={placeCardType} price={price} />
          <BookmarksBtn type={placeCardType} isFavorite={isFavorite} />
        </div>
        <CardRating type={placeCardType} rating={rating} />
        <PlaceCardInfo title={title} type={type} />
      </div>
    </article>
  );
}
