import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore
} from 'react-redux';
import type { RootState, AppDispatch, AppStore } from './store';
// Typed versions of useDispatch and useSelector hooks

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppStore = useStore.withTypes<AppStore>();
