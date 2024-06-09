import { BookmarksBtn } from '../../../../../shared/ui/bookmarks-button/ui';
import { placeCardType } from '../../../../../shared/const';
import { Mark } from '../../../../../shared/ui/mark/ui';
import { OfferCardImg } from '../../offer-card-img/ui';
import { CardPrice } from '../../../../../shared/ui/card-price/ui';
import { CardRating } from '../../../../../shared/ui/card-rating/ui';
import { OfferCardInfo } from '../../offer-card-info/ui';

export function OfferCard(): JSX.Element {
  return (
    <article className="cities__card place-card">
      <Mark type={placeCardType} />
      <OfferCardImg />
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <CardPrice type={placeCardType} />
          <BookmarksBtn width={'18'} height={'19'} type={placeCardType} />
        </div>
        <CardRating type={placeCardType} />
        <OfferCardInfo />
      </div>
    </article>
  );
}
