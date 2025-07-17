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
            <div className="fixed left-0 -bottom-0.5 w-full  backdrop-blur-md z-50 ">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="lg:mx-auto mx-4 cursor-pointer bg-transparent  rounded-full lg:m-2 lg:h-15 h-18 lg:flex items-center justify-between ">
                        <input
                            className="duration absolute w-full max-w-screen-2xl flex lg:-top-0 top-0"
                            type="range"
                            value={isNaN(currentTime) ? 0 : currentTime}
                            max={isNaN(duration) ? 0 : duration}
                            onChange={handleSeek}
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
                            <div className="flex items-center lg:w-lg w-3/4">
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
                            <div className="flex justify-between items-center lg:ml-0 ml-10 lg:w-sm w-1/4">
                                <p className="lg:p-6 hidden lg:flex">{formatTime(currentTime)}</p>
                                <Image
                                    src="https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images/back.png"
                                    alt="Previous"
                                    className="hidden lg:flex lg:m-4 m-2"
                                    width={25}
                                    height={25}
                                    style={{ height: 'auto' }}
                                />

                                <Image
                                    src={isPlaying ? "https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images/play.png" : "https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images/rilplay.png"}
                                    alt={isPlaying ? "Pause" : "https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images/play.png"}
                                    className={`lg:m-4 mt-4  ${isPlaying ? '' : 'invert'}`}
                                    width={40}
                                    height={40}
                                    onClick={handleTogglePlay}
                                />

                                <Image
                                    src="https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images/next.png"
                                    alt="Next"
                                    className="hidden lg:flex lg:m-4 m-2"
                                    width={25}
                                    height={25}
                                />
                                <p className="lg:p-6 hidden lg:flex">{formatTime(duration)}</p>
                            </div>
                            <div className="lg:flex hidden items-center justify-between w-1/8">
                                <Image
                                    src="https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images/heart.png"
                                    alt="Favorite"
                                    className="lg:m-4 m-2"
                                    width={25}
                                    height={25}
                                />
                                    <Image
                                        src="https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images/volume.png"
                                        alt="Volume"
                                        className="lg:m-4 m-2"
                                        width={28}
                                        height={28}
                                    />
                                <Image
                                    src="https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images/dots.png"
                                    alt="More options"
                                    className="lg:m-4 m-2"
                                    width={8}
                                    height={8}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    };
