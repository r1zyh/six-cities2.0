import { Mark } from '../../../../../shared/ui/mark/ui';
import { OfferFeatures } from '../../offer-features/ui';
import { OfferHost } from '../../offer-host/ui';
import { OfferInside } from '../../offer-inside/ui';
import { OfferName } from '../../offer-name/ui';
import { OfferPrice } from '../../offer-price/ui';
import { OfferRating } from '../../offer-rating/ui';
import { offerType } from '../../../../../shared/const';
import { Reviews } from '../../../../../widgets/reviews/ui';

export function OfferDetails(): JSX.Element {
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        <Mark type={offerType} />
        <OfferName />
        <OfferRating />
        <OfferFeatures />
        <OfferPrice />
        <OfferInside />
        <OfferHost />
        <Reviews />
      </div>
    </div>
  );
}
