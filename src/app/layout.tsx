"use client"

import type { Metadata } from "next";
import "@/src/app/styles/globals.css";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AudioPlayer } from "../widgets/audio-player/AudioPlayer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <html>
      <body className="font-benzin">
        {/* Фоновые элементы */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-64 h-64 bg-emerald-600 rounded-full opacity-40 blur-3xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translate(-50%, -50%)`,
              }}
            />
          ))}
        </div>
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid p-8 pb-20 mx-auto">
            {/* Хедер */}
            <header className="flex justify-between items-center py-4 border-gray-200 px-6 relative">
            {/* Логотип */}
            <h1 className="text-md font-medium drop-shadow-[0_0_3px_#ffffff]">
              *WHY SPACY COOKING <span className="underline">HERE</span>?
            </h1>

            {/* Десктопное меню */}
            <nav className="hidden md:flex gap-6">
              {["About", "Catalog", "Pricing", "Team"].map((item) => (
                <a key={item} href="#" className="hover:underline font-medium">
                  {item}
                </a>
              ))}
            </nav>

            {/* Кнопка-гамбургер (показывается только на мобильных) */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Мобильное меню (показывается только при открытии) */}
            {isOpen && (
              <nav className="absolute z-50 top-full right-0 bg-black shadow-lg flex flex-col w-full py-4 px-6 rounded-3xl opacity-90 justify-center flex flex-col md:hidden">
                {["About", "Catalog", "Pricing", "Team"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="py-2 font-medium text-xl text-white hover:underline"
                    onClick={() => setIsOpen(false)} // Закрывает меню при нажатии
                  >
                    {item}
                  </a>
                ))}
              </nav>
            )}
          </header>

        {/* Дебаг: Проверим, есть ли children */}
        {children ? children : <p className="text-white">Контент не загружен</p>}
        </div>

        </div>
            <AudioPlayer />


        <div className="max-w-screen-2xl lg:mb-24 lg:ml-24">

            <footer className="flex justify-between items-center py-4  border-gray-200 px-6 relative ">
            <h1 className="text-md font-medium drop-shadow-[0_0_3px_#ffffff]">
              *WHY SPACY COOKING <span className="underline">HERE</span>?
            </h1>

            <nav className="hidden md:flex gap-6">
              {["About", "Catalog", "Pricing", "Team"].map((item) => (
                <a key={item} href="#" className="hover:underline uppercase font-medium">
                  {item}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden p-2 rounded-md focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

              <nav className="absolute z-50 top-full right-0 bg-black shadow-lg flex flex-col w-full py-4 px-6 rounded-3xl opacity-90 justify-center flex flex-col md:hidden">
                  <a
                    href="#"
                    className="py-2 font-medium text-xl text-white hover:underline"
                    onClick={() => setIsOpen(false)} // Закрывает меню при нажатии
                  >
                    Something
                  </a>
              </nav>
            </footer>
        </div>
      </body>
    </html>
  );
}
