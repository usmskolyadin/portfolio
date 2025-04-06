'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from '@/src/app/lib/hooks'; // Import typed hooks
import { setCurrentTrack, togglePlay } from "@/src/features/player/playerSlice";

export const AudioPlayer = () => {
    // Access state correctly using the player slice
    const currentTrack = useAppSelector((state) => state.player.currentTrack);
    const isPlaying = useAppSelector((state) => state.player.isPlaying);
    const dispatch = useAppDispatch();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = currentTrack?.audioSrc || '';
        }
    }, [currentTrack]);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = Number(e.target.value);
        setCurrentTime(time);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
        }
        //dispatch(setCurrentTrack({ ...currentTrack, currentTime: time })); //Corrected
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleTogglePlay = () => {
        dispatch(togglePlay());
    };

    return (
        <div className="fixed bottom-2 w-full z-50 lg:ml-8 lg:mr-8">
            <div className="mx-auto max-w-screen-2xl">
                <div className="cursor-pointer bg-transparent border border-[#929292] rounded-full m-2 h-20 flex items-center justify-between backdrop-blur-md">
                    <input
                        className="duration absolute top-[-5] flex ml-24 w-3/4"
                        type="range"
                        value={currentTime}
                        max={duration}
                        onChange={handleSeek}
                    />
                    <audio
                        ref={audioRef}
                        src={currentTrack?.audioSrc}
                        onTimeUpdate={handleTimeUpdate}
                    />
                    <div className="flex items-center">
                        <div className="w-24 h-24 flex items-center justify-center">
                            <Image
                                src={currentTrack?.imageSrc || "/default-cover.jpg"}
                                alt="Track cover"
                                className="object-cover rounded-full"
                                width={60}
                                height={60}
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">{currentTrack?.title || "No track selected"}</h1>
                            <p className="text-[#B6B6B6] text-lg font-medium">{currentTrack?.artist || "Unknown artist"}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="p-6">{formatTime(currentTime)}</p>
                        <Image
                            src="/arrows.png"
                            alt="Shuffle"
                            className="m-4"
                            width={25}
                            height={25}
                        />
                        <Image
                            src="/back.png"
                            alt="Previous"
                            className="m-4"
                            width={25}
                            height={25}
                        />

                        <Image
                            src={isPlaying ? "/play.png" : "/rilplay.png"}
                            alt={isPlaying ? "Pause" : "/play.png"}
                            className={`m-4 ${isPlaying ? '' : 'invert'}`}
                            width={40}
                            height={40}
                            onClick={handleTogglePlay}
                        />

                        <Image
                            src="/next.png"
                            alt="Next"
                            className="m-4"
                            width={25}
                            height={25}
                        />
                        <p className="p-6">{formatTime(duration)}</p>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src="/heart.png"
                            alt="Favorite"
                            className="m-4"
                            width={25}
                            height={25}
                        />
                        <Image
                            src="/dots.png"
                            alt="More options"
                            className="m-4"
                            width={8}
                            height={8}
                        />
                        <Image
                            src="/volume.png"
                            alt="Volume"
                            className="m-4"
                            width={8}
                            height={8}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
