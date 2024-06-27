import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '@shared/const';


export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
