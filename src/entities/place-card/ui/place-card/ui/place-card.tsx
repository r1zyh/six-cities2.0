import { BookmarksBtn } from '@shared/ui/bookmarks-button/ui';
import { Mark } from '@shared/ui/mark/ui';
import { CardPrice } from '@shared/ui/card-price/ui';
import { CardRating } from '@shared/ui/card-rating/ui';
import { CardImage } from '@shared/ui/card-image/ui';
import { PlaceCardInfo } from '../../place-card-info/ui';
import { placeCardType } from '@shared/const';
import { placeCardHeight, placeCardWidth } from '@shared/ui/bookmarks-button/const';


type TPlaceCard = {
  type?: string;
};

export function PlaceCard({ type }: TPlaceCard): JSX.Element {
  return type === placeCardType ? (
    <article className="cities__card place-card">
      <Mark type={placeCardType} />
      <CardImage type={placeCardType} />
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <CardPrice type={placeCardType} />
          <BookmarksBtn
            width={placeCardWidth}
            height={placeCardHeight}
            type={placeCardType}
          />
        </div>
        <CardRating type={placeCardType} />
        <PlaceCardInfo />
      </div>
    </article>
  ) : (
    <article className="favorites__card place-card">
      <CardImage />
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <CardPrice type={placeCardType} />
          <BookmarksBtn
            width={placeCardWidth}
            height={placeCardHeight}
            type={placeCardType}
          />
        </div>
        <CardRating type={placeCardType} />
        <PlaceCardInfo />
      </div>
    </article>
  );
}
