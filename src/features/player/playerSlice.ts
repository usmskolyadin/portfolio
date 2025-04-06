import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { Track } from '@/src/features/player/types';
import { ThunkAction } from 'redux-thunk';

const initialState: {
    currentTrack: Track | null;
    isPlaying: boolean;
} = {
    currentTrack: null,
    isPlaying: false,
};

const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        setCurrentTrack: (state, action: PayloadAction<Track | null>) => {
            state.currentTrack = action.payload;
        },
        togglePlay: (state) => {
            state.isPlaying = !state.isPlaying;
        },
    },
});

export const { setCurrentTrack, togglePlay } = audioSlice.actions;
export const playerReducer = audioSlice.reducer; // Export the reducer
export default audioSlice;
