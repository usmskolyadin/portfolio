    'use client';

    import Image from "next/image";
    import { useState, useEffect, useRef } from "react";
    import { useAppSelector, useAppDispatch } from '@/src/app/lib/hooks';
    import { setCurrentTrack, togglePlay } from "@/src/features/player/playerSlice";

    export const AudioPlayer = () => {
        const currentTrack = useAppSelector((state) => state.player.currentTrack);
        const isPlaying = useAppSelector((state) => state.player.isPlaying);
        const dispatch = useAppDispatch();
        const [currentTime, setCurrentTime] = useState(0);
        const [duration, setDuration] = useState(0);
        const audioRef = useRef<HTMLAudioElement>(null)

        useEffect(() => {
            if (audioRef.current && currentTrack?.audioSrc) {
                audioRef.current.src = `https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/beats/${currentTrack.audioSrc}`;
            }
        }, [currentTrack]);

        useEffect(() => {
            if (!audioRef.current) return;

            if (isPlaying) {
                audioRef.current.play().catch((err) => {
                console.warn("Autoplay failed", err);
                });
            } else {
                audioRef.current.pause();
            }
        }, [isPlaying]);

        const handleTimeUpdate = () => {
        const audio = audioRef.current;
        if (audio) {
            const time = audio.currentTime;
            if (Math.abs(currentTime - time) > 0.2) {
            setCurrentTime(time);
            }
            if (!duration && audio.duration) {
            setDuration(audio.duration);
            }
        }
        };

        const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
            const time = Number(e.target.value);
            setCurrentTime(time);
            if (audioRef.current) {
                audioRef.current.currentTime = time;
            }
            //dispatch(setCurrentTrack({ ...currentTrack, currentTime: time }));
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
            <div
            className="
                fixed
                left-1/2
                -translate-x-1/2
                bottom-2
                w-full
                max-w-screen-xl
                border border-white/20
                bg-white/5
                backdrop-blur-md
                rounded-[50px]
                z-50
            "
            >       
             <div className="mx-auto max-w-screen-xl">
                    <div className="lg:mx-auto mx-4 cursor-pointer bg-transparent px-2 rounded-full lg:m-2 lg:h-15 h-18 lg:flex items-center justify-between ">
                        <input
                        type="range"
                        className="duration absolute w-full mx-12 top-0"
                        value={isNaN(currentTime) ? 0 : currentTime}
                        max={isNaN(duration) ? 0 : duration}
                        onChange={handleSeek}
                        style={{
                            background: `linear-gradient(
                            to right,
                            #0db484 0%,
                            #0db484 ${(currentTime / duration) * 100 || 0}%,
                            rgba(255,255,255,0.25) ${(currentTime / duration) * 100 || 0}%,
                            rgba(255,255,255,0.25) 100%
                            )`
                        }}
                        />

                        <audio
                            preload="none"
                            ref={audioRef}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={() => {
                                if (audioRef.current?.duration) {
                                setDuration(audioRef.current.duration);
                                }
                            }}
                        />
                        <div className="flex justify-between w-full ">
                            <div className="flex items-center lg:w-lg w-1/3">
                                <div className="w-12 h-12 lg:p-0 pt-5 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg font-benzin">
                                        {currentTrack?.id ?? "?"}
                                    </div>
                                </div>
                                <div className="lg:p-4 pl-4 pt-4">
                                    <h1 className="font-benzin lg:text-lg text-sm uppercase font-bold w-96 truncate">{currentTrack?.title || "No track selected"}</h1>
                                    <p className="font-benzin text-gray-200 uppercase lg:text-xs text-xs font-medium">{currentTrack?.artist || "Unknown artist"}</p>
                                </div>
                            </div>
                            <div className="flex  items-center lg:ml-0 ml-10 lg:w-xs w-1/3">
                                <p className="lg:p-4 hidden lg:flex text-md font-bold font-benzin">{formatTime(currentTime)}</p>
 
                                <div className="flex items-center mx-4">
                                    <svg className="hover:opacity-70 transition" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15 6L9 12L15 18"
                                            stroke="white"
                                            stroke-width="5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        </svg>
                                        {isPlaying ? (
                                            <svg className="hover:opacity-70 transition" 
                                            onClick={handleTogglePlay}
                                            width="52"
                                            height="52"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <rect x="6.5" y="5" width="4.5" height="14" rx="2.25" fill="white" />
                                            <rect x="13" y="5" width="4.5" height="14" rx="2.25" fill="white" />
                                            </svg>

                                        ) : (

                                            <svg className="hover:opacity-70 transition" 
                                            onClick={handleTogglePlay}
                                            width="52"
                                            height="52"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                d="M8.5 5.8C8.5 4.7 9.7 4.1 10.6 4.7L18 10.3C18.9 11 18.9 13 18 13.7L10.6 19.3C9.7 19.9 8.5 19.3 8.5 18.2V5.8Z"
                                                fill="white"
                                            />
                                            </svg>
                                        )}



                                    <svg className="hover:opacity-70 transition"  width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9 6L15 12L9 18"
                                            stroke="white"
                                            stroke-width="5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        </svg>
                                </div>
 

                                <p className="lg:p-4 hidden lg:flex text-md font-bold font-benzin">{formatTime(duration)}</p>
                            </div>
                            <div className="lg:flex hidden items-center justify-end w-1/3">
                            <div className="flex items-center">
                                    <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.5 9.5C4.5 8.7 5.2 8 6 8H9.2L13.8 5.2C14.7 4.7 16 5.3 16 6.4V17.6C16 18.7 14.7 19.3 13.8 18.8L9.2 16H6C5.2 16 4.5 15.3 4.5 14.5V9.5Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M18.2 9.2C19.3 10.1 19.3 13.9 18.2 14.8"
                                            stroke="white"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                        />
                                    </svg>

                                    <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M12 19.2C11.7 19.2 11.4 19.1 11.2 18.9L6.3 14.1C4.8 12.7 4.8 10.3 6.3 8.9C7.7 7.5 10 7.5 11.4 8.9L12 9.5L12.6 8.9C14 7.5 16.3 7.5 17.7 8.9C19.2 10.3 19.2 12.7 17.7 14.1L12.8 18.9C12.6 19.1 12.3 19.2 12 19.2Z"
                                        fill="white"
                                    />
                                    </svg>

                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    };
