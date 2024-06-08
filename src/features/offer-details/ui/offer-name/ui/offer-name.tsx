import { BookmarksBtn } from '../../../../../shared/ui/bookmarks-button/ui';

export function OfferName(): JSX.Element {
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        Beautiful &amp; luxurious studio at great location
      </h1>
      <BookmarksBtn width={'31'} height={'33'} type={'offer'} />
    </div>
  );
}
