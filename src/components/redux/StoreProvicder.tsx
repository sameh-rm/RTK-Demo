'use client';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useEffect } from 'react';

// Custom provider component
export function StoreProvicder({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Notify.init({
      position: 'right-bottom'
    });
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>{children}</PersistGate>
    </Provider>
  );
}
