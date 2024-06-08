import classNames from 'classnames';

type TBookmarks = {
  width: string;
  height: string;
  type: string;
};


export function BookmarksBtn({
  width,
  height,
  type,
}: TBookmarks): JSX.Element {
  return (
    <button
      className={classNames(
        {
          'place-card__bookmark-button button': type === 'place-card',
          'offer__bookmark-button button': type === 'offer',
        },
      )}
      type="button"
    >
      <svg
        className={classNames({
          'place-card__bookmark-icon': type === 'place-card',
          'offer__bookmark-icon': type === 'offer',
        })}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
