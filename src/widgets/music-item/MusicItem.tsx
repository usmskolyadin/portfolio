"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export const MusicItem = () => {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="hover:bg-[#181818] backdrop-blur-md cursor-pointer bg-transparent border border-[#929292] items-center p-3 rounded-3xl flex h-30"
        onClick={() => setModalOpen(true)}
      >
        <div
          className="relative w-24 h-30 rounded-lg overflow-hidden cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src="/hero.jpg"
            alt="Album Cover"
            className="rounded-3xl mt-2"
            width={100}
            height={100}
          />
          {hovered && (
            <div className="absolute inset-0 my-2 rounded-3xl flex items-center justify-center bg-black bg-opacity-90 transition-opacity">
              <Play size={32} className="text-white" />
            </div>
          )}
        </div>

        <div className="text-white ml-4">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold text-md">Лазерный</h2>
            <h2 className="bg-[#CCCCCC] w-4 h-4 p-3 ml-2 m-1 text-xs text-black rounded-lg flex items-center justify-center">E</h2>
          </div>
          <div className="flex items-center">
            <img src="checkmark.png" className="mr-1 w-4 h-4 invert" alt="" />
            <p className="text-gray-300 text-sm">OG BUDA | 9403 LISTENS</p>
          </div>

          <div className="flex gap-2 mt-2 text-sm">
            <span className="bg-transparent border border-[#929292] text-white px-3 py-2 rounded-full">#newjazz</span>
            <span className="bg-transparent border border-[#929292] text-white px-3 py-2 rounded-full">#opium</span>
            <span className="bg-transparent border border-[#929292] text-white px-3 py-2 rounded-full">#9mice</span>
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
}
