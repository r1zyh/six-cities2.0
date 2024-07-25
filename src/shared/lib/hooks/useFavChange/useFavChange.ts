import { TDetailedOffer } from '@shared/types';
import { useAppDispatch } from '../useDispatch/useDispatch';
import {
  addFavoriteOffers,
  removeFavoriteOffers,
  updateOffers,
} from '@shared/store/offer-process';

type TUseFavStatusChange = {
  status: number;
  offers: TDetailedOffer[];
  id: string;
};

export const useFavStatusChange = ({
  status,
  offers,
  id,
}: TUseFavStatusChange) => {
  const dispatch = useAppDispatch();
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

  if (status === 0) {
    dispatch(removeFavoriteOffers(offer));
  } else {
    dispatch(addFavoriteOffers(offer));
  }
  dispatch(updateOffers(offer));
};
