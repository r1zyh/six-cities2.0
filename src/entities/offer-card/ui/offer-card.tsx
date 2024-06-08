import { BookmarksBtn } from '../../../shared/ui/bookmarks-button/ui';
import { placeCardType } from '../../../shared/ui/mark/const';
import { Mark } from '../../../shared/ui/mark/ui';
import { OfferCardImg } from './offer-card-img/ui';

export function OfferCard(): JSX.Element {
  return (
    <article className="cities__card place-card">
      <Mark type={placeCardType} />
      <OfferCardImg />
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;180</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarksBtn width={'18'} height={'19'} type={'place-card'} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Nice, cozy, warm big bed apartment</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}
