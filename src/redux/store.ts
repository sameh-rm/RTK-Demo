import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from './services/productsApi';
import productsReducer from '@/redux/slices/products.slice';
import cartReducer from '@/redux/slices/cart.slice';
import { persistReducer } from 'redux-persist';
import storage from './storage';
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  timeout: 1000
};
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = (preloadedState?: Partial<RootState> | any) =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }).concat(productsApi.middleware),
    preloadedState
  });
export const store = setupStore({});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
