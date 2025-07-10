"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { setCurrentTrack, togglePlay } from "@/src/features/player/playerSlice";
import { Track } from "@/src/features/player/types";

interface MusicItemProps {
  track: Track;
}

export const MusicItem: React.FC<MusicItemProps> = ({ track }) => {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
  }, [dispatch]);

  const handlePlayClick = () => {
    dispatch(setCurrentTrack(track));
    dispatch(togglePlay());
    setModalOpen(false); 
  };

  return (
    <>
      <div
        className="hover:bg-[#181818] backdrop-blur-md backdrop-blur-md cursor-pointer bg-transparent border border-[#929292] items-center p-3 rounded-full flex h-26"
        onClick={handlePlayClick}
      >
      <div
        className="relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={track.imageSrc || "/hero.jpg"}
          alt="Album Cover"
          className="absolute inset-0 w-full h-full object-cover rounded-full"
          width={48} 
          height={48} 
          priority
        />
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity rounded-full">
            <Play size={32} className="text-white" />
          </div>
        )}
      </div>

        <div className="text-white ml-4">
          <div className="flex items-center">
            <h2 className="text-md font-semibold lg:text-md font-benzin">{track.title || "Unknown Title"}</h2> {/* Use track.title */}
            <h2 className="bg-[#CCCCCC] w-2 h-2 p-2.5 font-benzin ml-2 m-1 text-xs text-black rounded-lg flex items-center justify-center">
              E
            </h2>
          </div>
          <div className="flex items-center">
            <Image width={8} height={8} src={"/checkmark.png"} className="mr-1 w-4 h-4 invert object-cover" alt="" />
            <p className="font-benzin text-gray-300 lg:text-sm text-xs">{track.artist || "Unknown Artist"}</p> {/* Use track.artist */}
          </div>

          <div className="flex gap-2 mt-2 mb-2 lg:text-sm text-xs">
            <span className="bg-transparent border border-[#929292] font-benzin text-white px-3 py-1 rounded-full">
              #newjazz
            </span>
            <span className="bg-transparent border border-[#929292] font-benzin text-white px-3 py-1 rounded-full">
              #opium
            </span>
            <span className="bg-transparent border border-[#929292] font-benzin text-white px-3 py-1 rounded-full">
              #opium
            </span>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-70">
          <div className="bg-[#181818] text-white p-6 rounded-3xl shadow-lg w-80 text-center">
            <h2 className="text-xl font-bold">Наебал))</h2>
            <button
              onClick={() => setModalOpen(false)}
              className="cursor-pointer border border-[#929292] rounded-xl font-bold text-xl mt-4 px-16 py-2 w-full"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};