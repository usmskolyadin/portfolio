'use client';

import React from 'react';

const HorizontalScrollGallery = () => {
  const items = [
    {
      id: 1,
      image: '/centr.jpg',
      title: 'карьерамолодых (Москва, Россия)',
      description: 'Лендинг для Центра содействия молодым специалистам',
    },
    {
      id: 2,
      image: '/israil.jpg',
      title: 'HappyFlowDesign (Тель-Авив, Израиль)',
      description: 'Сайт строительной компании с калькуляторами и формами',
    },
    {
      id: 3,
      image: '/seamusic-s.jpg',
      title: 'SeaMusic (СНГ)',
      description: 'Цифровая платформа для музыкантов и слушателей.',
    },
    {
      id: 4,
      image: '/chairs.jpg',
      title: 'Elfadro (Москва, Россия)',
      description: 'Интернет-магазин массажных кресел',
    },
    {
      id: 5,
      image: '/usa-m.jpg',
      title: 'Studiau7 (Маями, США)',
      description: 'Магазин товаров общего назначения по США',
    },
    {
      id: 6,
      image: '/dveri-msk.png',
      title: 'DveriMsk (Москва, Россия)',
      description: 'Магазин дверей по Москве',
    },
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <section className="overflow-hidden w-full py-12 px-4 lg:max-w-screen-2xl max-w-sm">
      <h2 className="text-2xl font-extrabold uppercase text-white font-benzin mb-6">
        МОИ ПРОЕКТЫ (IT)
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[65vw] sm:w-[300px] md:w-[340px] px-2"
            >
              <div className="h-40 md:h-52 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="mt-2 text-white">
                <h3 className="font-bold text-sm md:text-base uppercase break-words font-benzin">
                  {item.title}
                </h3>
                <p className="text-xs md:text-lg">{item.description}</p>
              </div>
              <div className="flex gap-2 mt-2 text-[10px] md:text-xs">
                <span className="border border-[#929292] text-white px-2 py-1 rounded-full">
                  #newjazz
                </span>
                <span className="border border-[#929292] text-white px-2 py-1 rounded-full">
                  #opium
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 10s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 5s;
          }
        }
      `}</style>
    </section>
  );
};

export default HorizontalScrollGallery;
