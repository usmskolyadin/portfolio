"use client";

import { Provider } from 'react-redux';
import { useMemo, useState, useEffect } from 'react';
import { makeStore, AppStore } from './store';
import Image from "next/image";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  const [store, setStore] = useState<AppStore | null>(null);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setStore(makeStore());
  }, []);

  if (!store || showLogo) {
    return (
      <div className="flex h-screen justify-center items-center bg-black">
        <Image
          src="/SCH-LOGO.png"
          alt="logo"
          width={100}
          height={100}
          className={`w-56 h-32 mr-4 transition-opacity duration-1000 ${
            showLogo ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    );
  }

  return <Provider store={store}>{children}</Provider>;
}
