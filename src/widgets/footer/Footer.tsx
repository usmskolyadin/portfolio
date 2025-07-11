"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-24 mb-10 px-4 lg:px-0 py-10 uppercase text-white max-w-screen-2xl font-benzin bg-transparent border-gray-700">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div>
          <h3 className="text-lg font-semibold mb-3">О проекте</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#О проекте" className="hover:underline">Миссия</Link>
            </li>
            <li>
              <Link href="#О проекте" className="hover:underline">Команда</Link>
            </li>
            <li>
              <Link href="#О проекте" className="hover:underline">Контакты</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Ссылки</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#Портфолио" className="hover:underline">Отзывы</Link>
            </li>
            <li>
              <Link href="#Портфолио" className="hover:underline">Я на FL.ru</Link>
            </li>
            <li>
              <Link href="#Портфолио" className="hover:underline">Я на Kwork.ru</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Услуги</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#Услуги" className="hover:underline">UX/UI</Link>
            </li>
            <li>
              <Link href="#Услуги" className="hover:underline">Веб-разработка</Link>
            </li>
            <li>
              <Link href="#Услуги" className="hover:underline">Продвижение</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Work together</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#Work together" className="hover:underline">Связаться</Link>
            </li>
            <li>
              <Link href="#Work together" className="hover:underline">Форма заявки</Link>
            </li>
            <li>
              <Link href="#Work together" className="hover:underline">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Низ футера */}
      <div className="mt-12 border-white pt-6 text-center text-sm">
        *WHY SPACY COOKING <span className="underline text-white">HERE</span>? COPYRIGHT 2025
      </div>
    </footer>
  );
};

export default Footer;
