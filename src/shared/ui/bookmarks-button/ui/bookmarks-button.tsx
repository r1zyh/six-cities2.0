import {
  placeCardWidth,
  placeCardHeight,
  offerCardWidth,
  offerCardHeight,
} from '../const';

type TBookmarks = {
  type: string;
};

export function BookmarksBtn({ type }: TBookmarks): JSX.Element {
  return type === 'place-card' ? (
    <button className="place-card__bookmark-button button" type="button">
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
    <button className="offer__bookmark-button button" type="button">
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
