'use client';

import React from 'react';

const HorizontalScrollGallery = () => {
  const items = [
    {
      id: 1,
      image: '/centr.jpg',
      title: 'карьерамолодых (Москва, Россия)',
      description: 'Лендинг для Центр содействия молодым специалистам',
    },
    {
      id: 2,
      image: '/israil.jpg',
      title: 'HappyFlowDesign (Тель-Авив, Израиль)',
      description: 'Сайт строительной компании, с калькуляторами, формами заявок и внутренними покупками',
    },
    {
      id: 3,
      image: '/seamusic-s.jpg',
      title: 'SeaMusic (СНГ)',
      description: 'Собственный стартап, SeaMusic – это цифровая платформа для музыкантов, продюсеров и слушателей.',
    },
    {
      id: 4,
      image: '/chairs.jpg',
      title: 'Elfadro (Москва, Россия)',
      description: 'Интернет магазин для Московской компании по созданию массажных кресел',
    },
    {
      id: 5,
      image: '/usa-m.jpg',
      title: 'Studiau7 (Маями, США)',
      description: 'Полноценный интернет магазин с товарами общего назначения по всему США',
    },
    {
      id: 6,
      image: '/dveri-msk.png',
      title: 'DveriMsk (Москва, Россия)',
      description: 'Полноценный интернет магазин дверей по всей Москве',
    },
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full lg:py-8 py-12  lg:mb-0 mb-24 lg:max-w-screen-2xl max-w-96 mx-auto overflow-hidden px-4">
      <h2 className="text-2xl font-extrabold uppercase font-benzin mb-6">МОИ ПРОЕКТЫ (IT)</h2>
      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll flex whitespace-nowrap">
          {duplicatedItems.map((item, index) => (
            <div
            key={`${item.id}-${index}`}
            className="lg:w-86 w-48 mx-4 flex-shrink-0"
            >
            <div className="lg:h-50 h-36 w-full">
                <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            <div className="mt-2">
                <h3 className="font-bold text-xl uppercase break-words whitespace-normal">
                {item.title}
                </h3>
                <p className="text-md text-white  break-words whitespace-normal">{item.description}</p>
            </div>
                <div className="flex gap-2 mt-2 lg:text-sm text-xs">
                    <span className="bg-transparent border border-[#929292]  text-white px-3 py-1.5 rounded-full">
                    #newjazz
                    </span>
                    <span className="bg-transparent border border-[#929292]  text-white px-3 py-1.5 rounded-full">
                    #opium
                    </span>
                </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll-left 10s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default HorizontalScrollGallery;
