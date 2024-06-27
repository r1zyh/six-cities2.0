import { State } from '@shared/store/state/ui/state';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
