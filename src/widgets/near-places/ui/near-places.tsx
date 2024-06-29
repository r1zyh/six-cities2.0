import { PlaceCard } from '@entities/place-card/ui';
import { placeCardType } from '@shared/const';
import { useAppSelector } from '@shared/lib/hooks/useSelector/useSelector';
import { getNearbyOffers } from '@shared/store/nearby-offer-process';

export function NearPlaces(): JSX.Element {
  const nearbyOffers = useAppSelector(getNearbyOffers);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {nearbyOffers.map((offer) => (
            <PlaceCard cardType={placeCardType} offer={offer} key={offer.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
