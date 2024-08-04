import { Header } from '@widgets/header/ui';
import { Footer } from '@widgets/footer/ui';
import { FavoritesList } from '@features/favorites-list/ui';
import { useAppSelector } from '@shared/lib/hooks/useSelector/useSelector';
import { getFavoriteOffersCount } from '@shared/store/offer-process';

export function Favorites(): JSX.Element {
  const favCount = useAppSelector(getFavoriteOffersCount);
  return (
    <div className="page">
      <Header />
      {favCount === 0 ? (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          </div>
        </main>
      ) : (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList />
            </section>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
}
