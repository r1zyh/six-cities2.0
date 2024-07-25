import { UserData } from '@shared/types/user';
import { State } from '../state/ui/state';
import { AuthorizationStatus, NameSpace } from '@shared/const';

export const getUserData = (state: State): UserData | null =>
  state[NameSpace.User].userData;

export const getAuthStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].AuthStatus;
