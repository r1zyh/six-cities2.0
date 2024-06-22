import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from 'src/app/providers/const/const';

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
