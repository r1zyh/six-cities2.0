import classNames from 'classnames';
import { CITY_NAMES } from '../const';

export function CitiesSelector(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CITY_NAMES).map((city, i) => {
            const keyValue = `${city}-${i}`;
            const itemClass = classNames('locations__item-link tabs__item', {
              'tabs__item--active': i === 3,
            });
            return (
              <li className="locations__item" key={keyValue}>
                <a className={itemClass} href="#">
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
