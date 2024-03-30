import React, { PropsWithChildren } from 'react';
import { render, renderHook } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import { setupStore } from '@/redux/store';
import type { AppStore, RootState } from '@/redux/store';
import productsList from '../../../public/data/products.json';
// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      products: {
        list: productsList,
        tempList: productsList,
        filters: {
          maxPrice: 0,
          minPrice: 0,
          productName: ''
        }
      }
    },
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}



export function renderHookWithProviders(
  hook: ()=> void,
  {
    preloadedState = {
      products: {
        list: productsList,
        tempList: productsList,
        filters: {
          maxPrice: 0,
          minPrice: 0,
          productName: ''
        }
      }
    },
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...renderHook(hook, { wrapper: Wrapper, ...renderOptions }) };
}
