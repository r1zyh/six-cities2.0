import { OfferDetails } from '@features/offer-details/ui';
import { useAppSelector } from '@shared/lib/hooks/useSelector/useSelector';
import { getOffers } from '@shared/store/offer-process';
import { Header } from '@widgets/header/ui';
import { NearPlaces } from '@widgets/near-places/ui';
import { OfferGalley } from '@widgets/offer-gallery/ui';
import { OfferMap } from '@widgets/offer-map/ui';
import { useParams } from 'react-router-dom';
import { getDetailedOfferById } from '../lib/getDetailedOffer';

export function Offer(): JSX.Element {
  const offerId = useParams().id;
  const offers = useAppSelector(getOffers);
  if (!offerId) {
    throw new Error('Unable to get offer id!');
  }
  const detailedOffer = getDetailedOfferById({ Doffers: offers, id: offerId });

  if (!detailedOffer) {
    throw new Error('Unable to get detailed offer!');
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGalley images={detailedOffer.images} />
          <OfferDetails detailedOffer={detailedOffer} />
          <OfferMap />
        </section>
        <NearPlaces />
      </main>
    </div>
  );
}
