import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '@shared/api/api';
import { rootReducer } from './root-reducer';
import { redirect } from './middlewares';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
