'use client';

import { useState } from "react";
import ProjectModal, { Project } from "./ProjectModal";

const HorizontalScrollGallery = () => {
  const items = [
    {
      id: 1,
      image: '/centr.jpg',
      title: 'карьерамолодых (Москва, Россия)',
      description: 'Лендинг для Центра содействия молодым специалистам',
      detail: 'Помог в разработке сайта на Django и деплое с помощью Nginx & Docker',
      tags: ['django', '#python', '#лендинг'],
      extraImages: ['/centr.jpg', '/centr2.jpg', '/centr3.jpg'],
      price: '25 000₽',
      tech: 'Django, Python, Jinja, SCSS',
      client: "ЦСМС"
    },
    {
      id: 2,
      image: '/zamda (2).png',
      title: 'ZAMDA (США, Сакраменто)',
      description: 'Сервис для выставления объявлений по всей Америке.',
      detail: 'Полностью с нуля под ключ разрабатывал сайт по типу Avito на Next.js & Django REST Framework. Выстраивал архитектуру, CI/CD и автоматический деплой на Digital Ocean с помощью Nginx & Docker',

      tags: ['django', '#python', '#лендинг'],
      extraImages: ['/zamda (1).png', '/zamda (3).png', '/zamda (4).png', '/zamda (5).png'],
      price: 'Более 85 000₽',
      tech: 'DRF, Python, Next.js, SSR, TailwindCSS, Nginx, Docker',
      client: "ZAMDA"
    },
    {
      id: 3,
      image: '/studiau1.jpg',
      title: 'Studiau7 (США, Нью-Йорк)',
      description: 'Сервис для выставления объявлений по всей Америке.',
      detail: 'Лендинг для Центра содействия молодым специалистам',

      tags: ['django', '#python', '#лендинг'],
      extraImages: ['/studiau1.jpg', '/studiau2.jpg'],
      price: '30 000₽',
    },
    {
      id: 4,
      image: '/israil.jpg',
      title: 'HappyFlowDesign (Тель-Авив, Израиль)',
      description: 'Сайт строительной компании с калькуляторами и формами',
      detail: 'Лендинг для Центра содействия молодым специалистам',

      tags: ['#next.js', '#figma', '#лендинг'],
      extraImages: ['/israil1.jpg', '/israil2.jpg', '/israil3.jpg', '/israil4.jpg', '/israil5.jpg'],
      price: '30 000₽',
    },
    {
      id: 5,
      image: '/seamusic (3).png',
      title: 'SeaMusic (СНГ)',
      description: 'Цифровая платформа для музыкантов и слушателей.',
      detail: 'С нуля разрабатывал площадку для взаимодействия артистов и продюсеров. Присутствуют элементы социальной сети (Мессенджер, Подписки, Посты), Стриминговой площадки (Плеер, умные рекомендации) и Маркетплейса (Онлайн покупка)',

      tags: ['#music', '#streaming', '#nextjs', '#fastapi', '#social'],
      extraImages: ['/seamusic (1).png', '/seamusic (2).png', '/seamusic (3).png', '/seamusic (4).png', '/seamusic (5).png'],
      price: 'Договорный',
      tech: 'FastAPI, Python, Next.js, TailwindCSS, Nginx, Docker',
      client: "SPACY?"
    },
    {
      id: 6,
      image: '/bars (1).jpg',
      title: 'БАРС (Россия, Урал)',
      description: 'Автодокументация для нефтянной компании',
      detail: 'Лендинг для Центра содействия молодым специалистам',

      tags: ['#music', '#streaming', '#nextjs', '#fastapi', '#social'],
      extraImages: ['/bars (1).jpg','/bars (2).jpg', '/bars (3).jpg'],
      price: '30 000₽',
    },
    {
      id: 7,
      image: '/dveri1.jpg',
      title: 'dveri-msk24',
      description: 'Сайт для магазина металлических дверей в Москве',
      detail: 'Под ключ разрабатывал онлайн-магазин для дверей на Django',

      tags: ['#music', '#streaming', '#nextjs', '#fastapi', '#social'],
      extraImages: ['/dveri2.jpg', '/dveri1.jpg', '/dveri3.jpg', '/dveri4.jpg'],
      price: '25000₽',
      tech: 'Django, Docker',
      client: "dveri-msk24"
    },
    {
      id: 7,
      image: '/artiz1.jpg',
      title: 'Артиз',
      description: 'Онлайн-аукцион картин',
      detail: 'Под ключ разрабатывал онлайн-магазин для дверей на Django',

      tags: ['#music', '#streaming', '#nextjs', '#fastapi', '#social'],
      extraImages: ['/artiz1.jpg', '/artiz2.jpg', '/artiz3.jpg'],
      price: '25000₽',
      tech: 'Django, Docker',
      client: "dveri-msk24"
    },
  ];

  const duplicatedItems = [...items, ...items];
  const [project, setProject] = useState<Project | null>(null);

  return (
    <section className="overflow-hidden w-full lg:py-12 py-8 mt-5 px-0 mx-auto lg:max-w-screen-xl border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px]">
      <h2 className="lg:text-2xl lg:px-8 px-6 flex flex-wrap items-center text-2xl font-extrabold uppercase text-white font-benzin mb-6">
        МОИ ПРОЕКТЫ{' '}
        <span className="text-[#0db484] lg:ml-3 flex">
          ВЕБ-РАЗРАБОТКА
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
                  'https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images' + img
                ),
                tags: item.tags,
                price: item.price,
                detail: item.detail,
                tech: item.tech,
                client: item.client
              })}
            >
              <div className="h-40 md:h-52 w-full relative">
                <img
                  src={`https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images${item.image}`}
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
                  {item.tags.map((tag) => (
                    <div className="px-2 py-0.5 border-transperent border rounded-3xl">
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
