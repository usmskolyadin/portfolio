"use client";

import Link from "next/link";
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="mt-24 mb-10 px-4 lg:px-0 py-10 uppercase text-white max-w-screen-2xl font-benzin bg-transparent border-gray-700">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Ссылки</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="https://t.me/spacyreviews_it" className="hover:underline">Отзывы</Link>
            </li>
            <li>
              <Link href="https://t.me/whyspacy" className="hover:underline">Основной Telegram</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/spacycookinghere" className="hover:underline">Instagram</Link>
            </li>
            <li>
              <Link href="https://github.com/usmskolyadin" className="hover:underline">Github</Link>
            </li>
            <li>
              <Link href="https://www.fl.ru/users/koladinmaksim24/portfolio/" className="hover:underline">FL.ru</Link>
            </li>
            <li>
              <Link href="https://kwork.ru/user/whyspacy#portfolio-section" className="hover:underline">Kwork.ru</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Услуги</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#Услуги" className="hover:underline">ВЕБ-РАЗРАБОТКА</Link>
            </li>
            <li>
              <Link href="#Услуги" className="hover:underline">MIXING & MASTERING</Link>
            </li>
            <li>
              <Link href="#Услуги" className="hover:underline">СОЗДАНИЕ БИТОВ</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Work together</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:whyspacy7@gmail.com" className="hover:underline">Связаться через почту</a>
            </li>
            <li>
              <a
                href="https://forms.yandex.ru/cloud/686e2e1302848f0ecf036ccf"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Форма заявки
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 text-sm flex flex-col items-center justify-center text-center">
        <span>SPACYCOOKINGHERE.RU © COPYRIGHT 2025</span>
        <Image
          src="https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images/SCH-LOGO.png"
          alt="logo"
          width={100}
          height={100}
          className="w-20 h-10 mt-4"
        />
      </div>
    </footer>
  );
};

export default Footer;
