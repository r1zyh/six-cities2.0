
import { AppDispatch } from '@shared/store/state/ui/state';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
