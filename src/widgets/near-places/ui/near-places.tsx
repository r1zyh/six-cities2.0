import { PlaceCard } from '@entities/place-card/ui';
import { placeCardType } from '@shared/const';
import { offers } from '@shared/ui/mocks/ui';

export function NearPlaces(): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => (
            <PlaceCard cardType={placeCardType} offer={offer} key={offer.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
