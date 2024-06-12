import { Header } from '../../../widgets/header/ui';
import { Footer } from '../../../widgets/footer/ui';
import { PlaceCard } from '../../../entities/place-card/ui';
import { Location } from '../../../shared/ui/location/ui';
import { favoriteType } from '../../../shared/const';

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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
