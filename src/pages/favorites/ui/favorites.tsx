import { OfferCardInfo } from '../../../entities/offer-card/ui';
import { Header } from '../../../widgets/header/ui';
import { CardRating } from '../../../shared/ui/card-rating/ui';
import { placeCardType } from '../../../shared/const';
import { CardPrice } from '../../../shared/ui/card-price/ui';
import { BookmarksBtn } from '../../../shared/ui/bookmarks-button/ui';
import {
  placeCardHeight,
  placeCardWidth,
} from '../../../shared/ui/bookmarks-button/const';
import { CardImage } from '../../../shared/ui/card-image/ui';
import { Footer } from '../../../widgets/footer/ui';

export function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
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
                      <OfferCardInfo />
                    </div>
                  </article>

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
                      <OfferCardInfo />
                    </div>
                  </article>
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
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
                      <OfferCardInfo />
                    </div>
                  </article>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
