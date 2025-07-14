"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { setCurrentTrack, togglePlay } from "@/src/features/player/playerSlice";
import { Track } from "@/src/features/player/types";

interface MusicItemProps {
  track: Track;
}

interface Tag {
  tag: string;
}

export const MusicItem: React.FC<MusicItemProps> = ({ track }) => {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { currentTrack, isPlaying } = useAppSelector((state) => state.player);
  const isCurrentTrack = currentTrack?.id === track.id;

  useEffect(() => {
  }, [dispatch]);

  const handlePlayClick = () => {
    dispatch(setCurrentTrack(track));
    dispatch(togglePlay());
  };

  return (
    <>
      <div
        className="hover:bg-[#181818] backdrop-blur-md backdrop-blur-md cursor-pointer bg-transparent border border-[#929292] items-center p-3 rounded-full flex lg:h-26 h-25"
        onClick={handlePlayClick}
      >
      <div
        className="relative lg:min-w-20 lg:min-h-20 min-w-15 min-h-15 rounded-lg overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black rounded-full">
          <span className="text-white text-3xl font-bold font-benzin">{track.id}</span>
        </div>

        {hovered && !isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity rounded-full">
            <Play size={32} className="text-white" />
          </div>
        )}

        {isCurrentTrack && isPlaying && hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity rounded-full">
            <Pause size={32} className="text-white" />
          </div>
        )}
      </div>

        <div className="text-white ml-4">
          <div className="flex items-center">
            <h2 className="text-sm font-semibold lg:text-md font-benzin">{track.title || "Unknown Title"}</h2> {/* Use track.title */}
            <h2 className="bg-[#CCCCCC] w-2 h-2 p-2.5 font-benzin ml-2 m-1 text-xs text-black rounded-lg flex items-center justify-center">
              E
            </h2>
          </div>
          <div className="flex items-center">
            <p className="font-benzin text-gray-300 lg:text-sm text-xs w-full">{track.artist || "Unknown Artist"}</p> {/* Use track.artist */}
          </div>

          <div className="flex gap-2 lg:mt-2 mt-1.5 mb-2 lg:text-sm text-xs">
            {track.tags?.map((tag, index) => (
              <span key={index} className="bg-transparent border border-[#929292] font-benzin text-white px-3 py-1 rounded-full">
                {tag}
              </span>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};