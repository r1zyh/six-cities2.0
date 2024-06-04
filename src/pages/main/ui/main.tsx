import { OfferCard } from '../../../entities/offer-card/ui';
import { Header } from '../../../widgets/header/ui';
import { CitiesMap } from '../../../features/cities-map/ui';
import { OfferSort } from '../../../features/offer-sort/ui';

/*
Подумать над тем, правильно-ли были отнесены текущие части Main к widgets и features
Возможно стоит вынести группирующие элементы в widgets
*/

export default function Main(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <OfferSort />
              <div className="cities__places-list places__list tabs__content">
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
              </div>
            </section>
            <div className="cities__right-section">
              <CitiesMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
