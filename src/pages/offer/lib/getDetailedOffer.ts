import { TDetailedOffer } from '@shared/ui/mocks/type';

type TGetDOfferById = {
  Doffers: TDetailedOffer[];
  id: string;
};

export function getDetailedOfferById({ Doffers, id }: TGetDOfferById) {
  if (!Doffers) {
    return;
  }
  return Doffers.find((offer) => offer.id === id);
}
