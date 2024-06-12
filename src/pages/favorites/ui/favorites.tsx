import { Header } from '../../../widgets/header/ui';
import { Footer } from '../../../widgets/footer/ui';
import { FavoritesList } from '../../../features/favorites-list/ui';

export function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
