'use client';

import { useState } from "react";
import ProjectModal, { Project } from "./ProjectModal";
import { useTranslations } from "../language-switcher/useTranslations";


interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  detail?: string;
  tags: string[];
  extraImages: string[];
  price?: string;
  tech?: string;
  client?: string;
}

interface HorizontalScrollGalleryProps {
  locale: "en" | "ru";
  items: GalleryItem[];
}

const HorizontalScrollGallery = ({ items, locale }: HorizontalScrollGalleryProps) => {
  const ui = useTranslations("ui", locale) as any;;

  const duplicatedItems = [...items, ...items];
  const [project, setProject] = useState<Project | null>(null);

  return (
    <section className="overflow-hidden w-full lg:py-10 py-8 mt-5 px-0 mx-auto lg:max-w-screen-xl border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px]">
      <h2 className="lg:text-2xl lg:px-8 px-6 flex flex-wrap items-center text-2xl font-extrabold uppercase text-white font-benzin mb-6">
        {ui.headers.portfolioSection}{' '}
        <span className="text-[#0db484] lg:ml-3 flex">
          {ui.headers.portfolioType}
        </span>
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee pointer-events-none">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[65vw] sm:w-[300px] md:w-[340px] px-2 cursor-pointer pointer-events-auto"
              onClick={() => setProject({
                id: item.id,
                title: item.title,
                description: item.description,
                images: item.extraImages.map(img =>
                  'https://s3.twcstorage.ru/30ac639c-badf-4586-8d01-bcd43bfd9c21/images' + img
                ),
                tags: item.tags,
                price: item.price,
                detail: item.detail || "",
                tech: item.tech,
                client: item.client
              })}
            >
              <div className="h-40 md:h-52 w-full relative">
                <img
                  src={`https://s3.twcstorage.ru/30ac639c-badf-4586-8d01-bcd43bfd9c21/images${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl transition hover:opacity-80"
                />
              </div>
              <div className="mt-2 text-white">
                <h3 className="font-bold text-sm md:text-base uppercase break-words font-benzin">
                  {item.title}
                </h3>
                <p className="text-sm mt-1 md:text-sm font-benzin">{item.description}</p>
                <div className="flex items-center gap-2 mt-2 overflow-hidden flex-wrap">
                  {item.tags.map((tag, key) => (
                    <div key={key} className="border font-benzin border-white/20 bg-white/5 backdrop-blur-md rounded-[50px] text-white px-3 py-1 rounded-full">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {project && (
        <ProjectModal project={project} onClose={() => setProject(null)} />
      )}
            <a
              href="https://t.me/spacyreviews_it"
              className="w-1/2  lg:mr-0 mr-2 ml-8 mt-12 font-benzin bg-white text-black border border-0.5 backdrop-blur-md cursor-pointer rounded-2xl font-bold lg:text-md text-sm  lg:mt-0 text-center lg:px-8 px-4 py-2 transform transition-transform duration-300 hover:scale-105"
            >
              {ui.buttons.tgp}
            </a>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 15s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee { animation-duration: 10s; }
        }
      `}</style>
    </section>
  );
};

export default HorizontalScrollGallery;
