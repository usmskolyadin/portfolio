import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import audioSlice from '@/src/features/player/playerSlice';


export const makeStore = () => {
    return configureStore({
      reducer: {
        player: audioSlice.reducer,
      },
    });
  };
  
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
