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
                    <div className="mx-auto cursor-pointer bg-transparent  rounded-full m-2 h-15 flex items-center justify-between ">
                        <input
                            className="duration absolute w-full max-w-screen-2xl flex -top-2 "
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
<div className="w-15 h-15 flex items-center justify-center">
    <Image
        src={currentTrack?.imageSrc || "/default-cover.jpg"}
        alt="Track cover"
        className="object-cover rounded-full w-full h-full"
        width={48}
        height={48}
    />
</div>

                            <div className="p-4">
                                <h1 className="font-benzin text-xl font-bold w-96 truncate">{currentTrack?.title || "No track selected"}</h1>
                                <p className="font-benzin text-[#B6B6B6] text-lg font-medium">{currentTrack?.artist || "Unknown artist"}</p>
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
                                    src="/volume.png"
                                    alt="Volume"
                                    className="m-4"
                                    width={28}
                                    height={28}
                                />
                            <Image
                                src="/dots.png"
                                alt="More options"
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
