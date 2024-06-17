import { BookmarksBtn } from '@shared/ui/bookmarks-button/ui';
import { offerType } from '@shared/const';

export function OfferName(): JSX.Element {
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        Beautiful &amp; luxurious studio at great location
      </h1>
      <BookmarksBtn
        type={offerType}
      />
    </div>
  );
}
