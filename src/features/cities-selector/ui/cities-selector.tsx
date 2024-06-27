import { CITY_NAMES } from '@shared/const';
import classNames from 'classnames';
import { useState } from 'react';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

export function CitiesSelector(): JSX.Element {
  const [currentCity, setCurrentCity] = useState('Amsterdam');

  const handleCitySelect = (e: MouseEvent) => {
    e.preventDefault();
    const city = e.currentTarget.textContent;
    if (city) {
      setCurrentCity(city);
    }
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CITY_NAMES).map((city, i) => {
            const keyValue = `${city}-${i}`;
            const itemClass = classNames({
              'locations__item-link': true,
              'tabs__item': true,
              'tabs__item--active': currentCity === city,
            });
            return (
              <li className="locations__item" key={keyValue}>
                <Link className={itemClass} to="#" onClick={handleCitySelect}>
                  <span>{city}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
