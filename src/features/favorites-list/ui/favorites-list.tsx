import { favoriteType } from '@shared/const';
import { Location } from '@shared/ui/location/ui';
import { PlaceCard } from '@entities/place-card/ui';
import { useAppSelector } from '@shared/lib/hooks/useSelector/useSelector';
import { getOffers } from '@shared/store/offer-process';

export function FavoritesList(): JSX.Element {
  const offers = useAppSelector(getOffers);
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <Location type={favoriteType} />
        <div className="favorites__places">
          {offers.map((offer) => (
            <PlaceCard offer={offer} key={offer.id} />
          ))}
        </div>
      </li>

      <li className="favorites__locations-items">
        <Location type={favoriteType} />
        <div className="favorites__places"></div>
      </li>
    </ul>
  );
}
