import {
  addFavoriteOffers,
  removeFavoriteOffers,
  updateOffers,
} from '@shared/store/offer-process';
import { AppDispatch } from '@shared/store/state/ui/state';
import { TDetailedOffer } from '@shared/types';

type TUseFavStatusChange = {
  status: number;
  id: string;
  offers: TDetailedOffer[];
  dispatch: AppDispatch;
};

//вынести отсюда

export const favStatusChange = ({
  status,
  id,
  offers,
  dispatch,
}: TUseFavStatusChange) => {
  const getCurrentOffer = () => {
    if (!offers && id) {
      return;
    }
    return offers.find((o) => o.id === id);
  };

  const offer = getCurrentOffer();

  if (offer === undefined) {
    return;
  }

  const updatedOffer = {
    ...offer,
    isFavorite: status !== 0,
  };

  if (status === 0) {
    dispatch(removeFavoriteOffers(updatedOffer));
  } else {
    dispatch(addFavoriteOffers(updatedOffer));
  }
  dispatch(updateOffers(updatedOffer));
};
