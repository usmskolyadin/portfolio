"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

export type Project = {
  id: number;
  title: string;
  description: string;
  detail: string;
  images: string[];
  tags: string[];
  price?: string;
  tech?: string;
  client?: string;
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false); // fullscreen mode
  const startX = useRef<number | null>(null);

  if (!project) return null;

  const total = project.images.length;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (fullscreen) setFullscreen(false);
        else onClose();
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [fullscreen]);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!startX.current) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    startX.current = null;
  };

  const FullscreenViewer = () =>
    createPortal(
      <div
        className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4 sm:p-6"
        onClick={() => setFullscreen(false)}
      >
        <div
          className="relative w-full max-w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={project.images[index]}
            className="max-w-full max-h-full object-contain transition-transform duration-300 "
          />

          {total > 1 && (
            <>
              <button
                onClick={prev}
                className="cursor-pointer hover:bg-black/60 absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                className="cursor-pointer hover:bg-black/60 absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition"
              >
                <ChevronRight />
              </button>
            </>
          )}

          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-5 right-5 text-4xl text-white hover:text-[#0db484] transition"
          >
            ×
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  i === index ? "bg-[#0db484]" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>,
      document.body
    );

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-full bg-[#121212]/90 border border-white/20 backdrop-blur-md rounded-[40px] shadow-2xl overflow-hidden transform transition-transform duration-300 "
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-6 text-4xl hover:text-[#0db484] transition-colors"
          >
            ×
          </button>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-4 p-6 sm:p-4">
            <div className="flex flex-col">
              <div
                className="relative overflow-hidden rounded-[30px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onClick={() => setFullscreen(true)}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <img
                  src={project.images[index]}
                  className="w-full h-[260px] sm:h-[300px] lg:h-[420px] object-cover transition-transform duration-500 "
                />

                {total > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prev();
                      }}
                      className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl transition"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        next();
                      }}
                      className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl transition"
                    >
                      <ChevronRight />
                    </button>
                  </>
                )}
              </div>

              <div className="flex gap-2 mt-4 justify-center">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      i === index ? "bg-[#0db484]" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between p-4">
              <div>
                <h2 className="lg:text-4xl text-xl font-benzin font-bold mb-4 hover:text-[#0db484] transition-colors duration-300">
                  {project.title}
                </h2>

                <p className="lg:text-md mt-1 text-xs font-benzin my-2">{project.detail}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 text-sm rounded-full bg-white/10 hover:bg-[#0db484]/30 transition-colors duration-300 cursor-default"
                    >
                      #{tag.replace("#", "")}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 font-benzin text-sm text-white mb-8">
                  {project.price && <div className="font-bold uppercase lg:text-lg text-sm">Бюджет: {project.price}</div>}
                  {project.tech && <div className="font-semibold uppercase lg:text-sm text-xs">Стэк: {project.tech}</div>}
                  {project.client && <div className="font-semibold uppercase lg:text-md text-xs">Клиент: {project.client}</div>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 mt-auto">
                <button className="cursor-pointer bg-[#0db484] hover:bg-[#0b9b6e] transition-all duration-300 px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                  <a href="https://t.me/bigmoneymgmt">Заказать похожее</a>
                </button>
                <button
                  onClick={onClose}
                  className="cursor-pointer border border-white/20 px-8 py-3 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {fullscreen && <FullscreenViewer />}
    </>,
    document.body
  );
}
