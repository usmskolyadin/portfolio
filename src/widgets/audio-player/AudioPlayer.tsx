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
        const audioRef = useRef<HTMLAudioElement>(null);

        useEffect(() => {
        }, [dispatch]);
    
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
            <div className="fixed left-0 bottom-0 w-full  backdrop-blur-md z-50 ">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="lg:mx-auto mx-4 cursor-pointer bg-transparent  rounded-full lg:m-2 lg:h-15 h-34 lg:flex items-center justify-between ">
                        <input
                            className="duration absolute w-full max-w-screen-2xl flex lg:-top-0 top-0"
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
                        <div className="lg:flex justify-between w-full">
                            <div className="flex items-center">
                                <div className="w-12 h-12 lg:p-0 pt-5 flex items-center justify-center">
                                    <Image
                                        src={currentTrack?.imageSrc || "/default-cover.jpg"}
                                        alt="Track cover"
                                        className="object-cover rounded-full min-w-15 min-h-15 w-full h-full"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div className="lg:p-4 pl-6 pt-4">
                                    <h1 className="font-benzin lg:text-xl text-lg font-bold w-96 truncate">{currentTrack?.title || "No track selected"}</h1>
                                    <p className="font-benzin text-[#B6B6B6] lg:text-lg text-md font-medium">{currentTrack?.artist || "Unknown artist"}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="lg:p-6">{formatTime(currentTime)}</p>
                                <Image
                                    src="/arrows.png"
                                    alt="Shuffle"
                                    className="lg:m-4 m-2"
                                    width={25}
                                    height={25}
                                />
                                <Image
                                    src="/back.png"
                                    alt="Previous"
                                    className="lg:m-4 m-2"
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
                                    className="lg:m-4 m-2"
                                    width={25}
                                    height={25}
                                />
                                <p className="lg:p-6">{formatTime(duration)}</p>
                            </div>
                            <div className="lg:flex hidden items-center">
                                <Image
                                    src="/heart.png"
                                    alt="Favorite"
                                    className="lg:m-4 m-2"
                                    width={25}
                                    height={25}
                                />
                                    <Image
                                        src="/volume.png"
                                        alt="Volume"
                                        className="lg:m-4 m-2"
                                        width={28}
                                        height={28}
                                    />
                                <Image
                                    src="/dots.png"
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
