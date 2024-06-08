import { Header } from '../../../widgets/header/ui';
import { NearPlaces } from '../../../widgets/near-places/ui';
import { OfferGalley } from '../../../widgets/offer-gallery/ui';
import { OfferMap } from '../../../widgets/offer-map/ui';
import { Reviews } from '../../../widgets/reviews/ui';
import { OfferInside } from '../../../features/offer-inside/ui';
import { OfferHost } from '../../../features/offer-host/ui';
import { OfferName } from '../../../features/offer-name/ui';
import { OfferFeatures } from '../../../features/offer-features/ui';
import { OfferRating } from '../../../features/offer-rating/ui';
import { OfferPrice } from '../../../features/offer-price/ui';
import { OfferMark } from '../../../features/offer-mark/ui';

export function Offer(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGalley />
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferMark />
              <OfferName />
              <OfferRating />
              <OfferFeatures />
              <OfferPrice />
              <OfferInside />
              <OfferHost />
              <Reviews />
            </div>
          </div>
          <OfferMap />
        </section>
        <NearPlaces />
      </main>
    </div>
  );
}
