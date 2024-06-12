import { favoriteType } from '../../../shared/const';
import { Location } from '../../../shared/ui/location/ui';
import { PlaceCard } from '../../../entities/place-card/ui';

export function FavoritesList(): JSX.Element {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <Location type={favoriteType} />
        <div className="favorites__places">
          <PlaceCard />

          <PlaceCard />
        </div>
      </li>

      <li className="favorites__locations-items">
        <Location type={favoriteType} />
        <div className="favorites__places">
          <PlaceCard />
        </div>
      </li>
    </ul>
  );
}
