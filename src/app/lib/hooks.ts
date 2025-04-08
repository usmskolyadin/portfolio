import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from '@/src/app/lib/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <TSelected = unknown>(
  selector: (state: RootState) => TSelected
) => TSelected = useSelector;
export const useAppStore: () => AppStore = useStore;
