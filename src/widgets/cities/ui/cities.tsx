import { PlaceCard } from '../../../entities/place-card/ui';
import { CitiesMap } from '../../cities-map/ui';
import { OfferSort } from '../../../features/offer-sort/ui';
import { placeCardType } from '../../../shared/const';

export function Cities(): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <OfferSort />
          <div className="cities__places-list places__list tabs__content">
            <PlaceCard type={placeCardType} />
            <PlaceCard type={placeCardType} />
            <PlaceCard type={placeCardType} />
            <PlaceCard type={placeCardType} />
            <PlaceCard type={placeCardType} />
          </div>
        </section>
        <div className="cities__right-section">
          <CitiesMap />
        </div>
      </div>
    </div>
  );
}
