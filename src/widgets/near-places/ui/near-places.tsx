import { PlaceCard } from '../../../entities/place-card/ui';
import { placeCardType } from '../../../shared/const';

export function NearPlaces(): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          <PlaceCard type={placeCardType} />
          <PlaceCard type={placeCardType} />
          <PlaceCard type={placeCardType} />
        </div>
      </section>
    </div>
  );
}
