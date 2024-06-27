import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../state/ui/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOffer } from '@shared/ui/mocks/type';
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
      const { data } = await api.get<TOffer[]>(APIRoute.Offers);
      dispatch(setOffersLoadingStatus(false));
      dispatch(setOffers(data));
    } catch {
      dispatch(setOffersLoadingStatus(false));
    }
  }
);
