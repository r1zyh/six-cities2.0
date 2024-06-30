import { Mark } from '@shared/ui/mark/ui';
import { OfferFeatures } from '../../offer-features/ui';
import { OfferHost } from '../../offer-host/ui';
import { OfferInside } from '../../offer-inside/ui';
import { OfferName } from '../../offer-name/ui';
import { OfferPrice } from '../../offer-price/ui';
import { OfferRating } from '../../offer-rating/ui';
import { offerType } from '@shared/const';
import { Reviews } from '@widgets/reviews/ui';
import { TDetailedOffer } from '@shared/ui/mocks/type';

type TOfferDetails = {
  detailedOffer: TDetailedOffer;
};

export function OfferDetails({ detailedOffer }: TOfferDetails): JSX.Element {
  const {
    isPremium,
    isFavorite,
    host,
    title,
    goods,
    price,
    rating,
    description,
    maxAdults,
    bedrooms,
    type,
  } = detailedOffer;
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        <Mark type={offerType} isPremium={isPremium} />
        <OfferName isFavorite={isFavorite} title={title} />
        <OfferRating rating={rating} />
        <OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
        <OfferPrice price={price} />
        <OfferInside goods={goods} />
        <OfferHost host={host} description={description} />
        <Reviews />
      </div>
    </div>
  );
}
