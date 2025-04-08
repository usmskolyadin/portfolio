import { configureStore } from '@reduxjs/toolkit';
import { playerReducer } from '@/src/features/player/playerSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      player: playerReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];