import { useState } from 'react';
import { MouseEvent } from 'react';
import classNames from 'classnames';
import {
  placeCardWidth,
  placeCardHeight,
  offerCardWidth,
  offerCardHeight,
} from '../const';
import { favStatusChange } from '@shared/lib/favorite-helpers/favorite-status-change';
import { useAppDispatch } from '@shared/lib/hooks/useDispatch/useDispatch';
import { useAppSelector } from '@shared/lib/hooks/useSelector/useSelector';
import { getOffers } from '@shared/store/offer-process';

type TBookmarks = {
  type: string;
  isFavorite: boolean;
  id: string;
};

export function BookmarksBtn({
  type,
  isFavorite,
  id,
}: TBookmarks): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const [isFav, setIsFav] = useState(isFavorite);

  const handleFavClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsFav((prev) => !prev);

    favStatusChange({ status: isFav ? 0 : 1, id, offers, dispatch });
  };

  return type === 'place-card' ? (
    <button
      className={classNames({
        'place-card__bookmark-button button': !isFav,
        'place-card__bookmark-button place-card__bookmark-button--active button':
          isFav,
      })}
      type="button"
      onClick={handleFavClick}
    >
      <svg
        className="place-card__bookmark-icon"
        width={placeCardWidth}
        height={placeCardHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  ) : (
    <button
      className={classNames({
        'offer__bookmark-button button': !isFav,
        'offer__bookmark-button--active offer__bookmark-button button': isFav,
      })}
      type="button"
      onClick={handleFavClick}
    >
      <svg
        className="offer__bookmark-icon"
        width={offerCardWidth}
        height={offerCardHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
