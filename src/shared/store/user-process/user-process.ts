import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '@shared/const';
import { UserData } from '@shared/types/user';

type UserProcessType = {
  AuthStatus: AuthorizationStatus;
  userData: UserData;
};

export const initialState: UserProcessType = {
  AuthStatus: AuthorizationStatus.NoAuth,
  userData: { email: 'Anon', userAvatar: '' },
};

export const userProcessSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
});
