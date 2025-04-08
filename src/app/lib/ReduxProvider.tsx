"use client";

import { Provider } from 'react-redux';
import { useMemo, useState, useEffect } from 'react';
import { makeStore, AppStore } from './store';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  const [store, setStore] = useState<AppStore | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useMemo(() => {
    if (isClient) {
      setStore(makeStore());
    }
  }, [isClient]);

  if (!store) {
    return <div>Loading...</div>;
  }

  return <Provider store={store}>{children}</Provider>;
}