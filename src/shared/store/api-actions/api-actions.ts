import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../state/ui/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TDetailedOffer } from '@shared/types';
import { setOffers, setOffersLoadingStatus } from '@shared/store/offer-process';
import { APIRoute } from '@shared/const';

type thunkObjType = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchOffers = createAsyncThunk<void, undefined, thunkObjType>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(setOffersLoadingStatus(true));
      const { data } = await api.get<TDetailedOffer[]>(APIRoute.Offers);
      // При работе с сервером был тип TOffer, но так как он не работает для исправление lint ошибки будет так
      dispatch(setOffersLoadingStatus(false));
      dispatch(setOffers(data));
    } catch {
      dispatch(setOffersLoadingStatus(false));
    }
  }
);
