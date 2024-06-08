import { Reviews } from '../../../../../widgets/reviews/ui';
import { OfferFeatures } from '../../offer-features/ui';
import { OfferHost } from '../../offer-host/ui';
import { OfferInside } from '../../offer-inside/ui';
import { OfferMark } from '../../offer-mark/ui';
import { OfferName } from '../../offer-name/ui';
import { OfferPrice } from '../../offer-price/ui';
import { OfferRating } from '../../offer-rating/ui';

export function OfferDetails(): JSX.Element {
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        <OfferMark />
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
