
import { OfferDetails } from '@features/offer-details/ui';
import { Header } from '@widgets/header/ui';
import { NearPlaces } from '@widgets/near-places/ui';
import { OfferGalley } from '@widgets/offer-gallery/ui';
import { OfferMap } from '@widgets/offer-map/ui';


export function Offer(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGalley />
          <OfferDetails />
          <OfferMap />
        </section>
        <NearPlaces />
      </main>
    </div>
  );
}
