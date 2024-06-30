import { BookmarksBtn } from '@shared/ui/bookmarks-button/ui';
import { offerType } from '@shared/const';

type TOfferName = {
  isFavorite: boolean;
  title: string;
};

export function OfferName({ isFavorite, title }: TOfferName): JSX.Element {
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        {title}
      </h1>
      <BookmarksBtn type={offerType} isFavorite={isFavorite}/>
    </div>
  );
}
