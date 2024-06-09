import { OfferCard } from '../../../entities/offer-card/ui';

export function NearPlaces(): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          <OfferCard />

          <OfferCard />

          <OfferCard />
        </div>
      </section>
    </div>
  );
}
