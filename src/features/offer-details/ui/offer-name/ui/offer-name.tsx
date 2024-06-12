import { BookmarksBtn } from '@shared/ui/bookmarks-button/ui';
import {
  offerCardWidth,
  offerCardHeight,
} from '@shared/ui/bookmarks-button/const';
import { offerType } from '@shared/const';

export function OfferName(): JSX.Element {
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        Beautiful &amp; luxurious studio at great location
      </h1>
      <BookmarksBtn
        width={offerCardWidth}
        height={offerCardHeight}
        type={offerType}
      />
    </div>
  );
}
