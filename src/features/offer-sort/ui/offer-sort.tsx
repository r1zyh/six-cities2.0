import { SORT_TYPES } from './const';
import { useState } from 'react';
import classNames from 'classnames';
import { MouseEvent } from 'react';

export function OfferSort(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const handleSortClick = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={handleSortClick}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames({
          'places__options places__options--custom places__options--opened':
            isOpened,
          'places__options places__options--custom': !isOpened,
        })}
      >
        {SORT_TYPES.map((type) => (
          <li
            className="places__option places__option--active"
            tabIndex={0}
            key={type}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}
