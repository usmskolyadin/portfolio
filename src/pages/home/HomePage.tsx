"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MainButton } from "@/src/shared/main-button/MainButton";
import { TabsContent } from "@/src/shared/tabs-content/TabsContent";
import { TabsTrigger } from "@/src/shared/tabs-trigger/TabsTrigger";
import { TabsList } from "@/src/shared/tabs-list/TabsList";
import { Tabs } from "@/src/shared/tabs/Tabs";
import { ProductCard } from "@/src/widgets/product-card/ProductCard";
import { MusicItem } from "@/src/widgets/music-item/MusicItem";
import {
  products,
  features,
  typingSpeed,
  texts,
  pauseTime,
  tracks,
} from "@/src/shared/constants/constants";
import HorizontalScrollGallery from "@/src/widgets/horizontal-scroll-gallery/HorizontalScrollGallery";
import { SocialIcons } from "@/src/shared/social-icons/SocialIcons";
import TextCarousel from "@/src/widgets/text-slider/TextCarousel";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("БИТЫ");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const currentText = texts[index];

    if (!deleting && charIndex < currentText.length) {
      setTimeout(() => setCharIndex((prev) => prev + 1), typingSpeed);
    } else if (deleting && charIndex > 0) {
      setTimeout(() => setCharIndex((prev) => prev - 1), typingSpeed / 2);
    } else if (charIndex === currentText.length) {
      setTimeout(() => setDeleting(true), pauseTime);
    } else if (charIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    setText(currentText.slice(0, charIndex));
  }, [charIndex, deleting, index]);

  return (
    <div>
      <section id="О проекте" className="flex max-w-screen-xl mx-auto w-full flex-col lg:flex-row lg:gap-0 mt-24  ">
        <div className="flex lg:w-2/3 w-full lg:mr-5 border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px]  py-8 flex-col lg:relative lg:block justify-center">
          <div className=" rounded-2xl lg:text-center text-left lg:text-left w-full">
            <h2 className="lg:px-10 px-8 lg:text-4xl text-2xl font-bold uppercase font-benzin  min-h-32 w-full">
              <span className="">
               РАЗРАБОТАЮ САЙТ ДЛЯ{" "}
              </span>
              <motion.span
                className="text-emerald-500 font-bold"
              >
                {text}
                <span className="animate-blink">| </span> 
              </motion.span>
              <span className="">БРЕНДА. <br />БИТЫ ОТ </span>
              <span
                className="text-emerald-500 font-bold"
              >
                SPACY?
              </span>
              <span className="">
                {" "}
              </span>
            </h2>
              <p className="lg:px-10 px-8 lg:text-sm lg:uppercase font-benzin text-md mt-4 w-full w-48 text-white  mt-2 ">
                Добро пожаловать на мой сайт-портфолио - <span className="text-[#0db484] font-semibold">spacycookinghere.ru!!</span> Если ты бизнесмен или артист, ты обязательно найдешь себе ту услугу которая тебе подойдет.
                 <br /><br /> 
                 Нужен <span className="text-[#0db484] font-semibold">современный сайт</span> для собственного бренда? Или же <span className="text-[#0db484] font-semibold">бит</span> для твоего нового трека? Выбирай соответствующую услугу и выводи свое дело на <span className="underline">новый уровень!</span> <br /><br /> <span className="italic">P.S. Техническое портфолио есть в моем гитхабе</span>
              </p>

            <div>

            </div>
            <TextCarousel />
          <div className="lg:px-10 px-6 items-center flex lg:flex-col lg:flex-row justify-between lg:mt-4 mt-4 lg:gap-2">
            <a
              href="#Услуги"
              className="w-1/2  lg:mr-0 mr-2 font-benzin bg-white text-black border border-0.5 backdrop-blur-md cursor-pointer rounded-2xl font-bold lg:text-md text-sm  lg:mt-0 text-center lg:px-8 px-4 py-2.5 transform transition-transform duration-300 hover:scale-105"
            >
              Портфолио
            </a>
                <a 
                href="#WORK TOGETHER"
                className="cursor-pointer font-benzin w-1/2 text-center bg-[#0db484] hover:bg-[#0b9b6e] transition-all duration-300 text-sm px-4 py-2.5 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                  Услуги
                </a>
          </div>

          </div>
        </div>
        <div className="flex lg:mt-0 mt-4 lg:w-1/3 w-full border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px] px-8 py-4 flex-col items-center justify-center ">
          <div className="relative w-full max-w-lg flex flex-col lg:items-center h-full mt-3 lg:py-0 py-0">
            <h2 className="lg:text-2xl text-2xl font-bold uppercase font-benzin w-full mb-4">Инфа обо мне</h2>
              <div className="relative lg:w-48 w-48 aspect-square rounded-full overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <Image
                  src="https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images/cbhram.png"
                  alt="Hero image"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h1 className="lg:text-xl text-xl px-4 py-1.5 absolute lg:top-48 top-48 right-8 font-benzin font-extrabold border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px] mt-3 mb-2 flex items-center justify-center">
                <span className="mr-2">SPACY?</span>
                <svg
                  className="invert drop-shadow-[0_0_3px_#ffffff]"
                  color="s#0c7552"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  strokeWidth="5"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z" />
                </svg>
              </h1>

            <div className="flex gap-2 mt-8 lg:text-sm text-xs h-8 font-benzin">
              <span className="border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px] text-white px-3 py-1.5 rounded-full">
                artist
              </span>
              <span className="border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px] text-white px-3 py-1.5 rounded-full">
                producer
              </span>
              <span className="border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px] text-white px-3 py-1.5 rounded-full">
                programmer
              </span>
            </div>

            <p className="lg:text-sm lg:uppercase  text-md  max-w-lg mx-auto  lg:text-center text-left font-medium mt-5 font-benzin">
              Максим К. (aka spacy?), являюсь Fullstack-разработчиком с опытом более {"5 лет"}, продюсером и артистом. За это время сделал <span className="text-[#0db484] font-bold">{">"} 100 сайтов</span> для разных компаний
              по всему миру. Так же занимаюсь написанием битов и своих треков.  
              <br />
              <br />
            </p>

          </div>
        </div>

      
      </section>
      <div id="Портфолио">
      <HorizontalScrollGallery  />

      </div>

      <section className="lg:py-2 max-w-screen-xl mx-auto space-y-4">
        {features.map((feature, index) => (
          <div
            id={feature.title}
            key={index}
            className={`flex border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px] flex-col md:flex-row lg:py-8 py-8 px-8 gap-8 mt-4  ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="relative w-full md:w-1/2 mt-12">
              <Image
                src={`https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images${feature.image}`}
                alt={feature.title}
                width={"1000"}
                height={"1000"}
                className="lg:w-96 w-56 lg:h-96 h-56 rounded-3xl shadow-lg transform object-cover transition-transform duration-300 hover:scale-105"
              />
              <Image
                src={`https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images${feature.image2}`}
                alt={feature.title}
                width={"1000"}
                height={"1000"}
                className="absolute top-[-40] lg:left-86 left-40 lg:w-48 w-42 lg:h-48 h-42 rounded-3xl object-cover shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div  className="w-full md:w-1/2  md:text-left space-y-4">
              <h2 className={`lg:text-3xl text-2xl font-extrabold uppercase font-benzin ${index % 2 === 0 ? ("text-left") : ("text-right")}`}>{">"} {feature.title}</h2>
              <p className={`lg:text-md text-gray-200 text-md lg:uppercase font-medium font-benzin whitespace-pre-line ${index % 2 === 0 ? ("text-left") : ("text-right")}`}>
                {feature.description}
              </p>
              <div className={`flex flex-wrap  gap-2 max-w-full ${index % 2 === 0 ? ("justify-start") : ("justify-end")}`}>
                {feature.credits?.map((credit) => (
                  <span
                    key={credit}
                    className="bg-transparent font-benzin border border-[#929292] text-white lg:px-4 px-2.5 text-xs py-1.5 rounded-full"
                  >
                    {credit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
      <section  id="Услуги" className="mt-8 max-w-screen-xl mx-auto border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px] px-8 py-6">
        <h2 className="lg:text-3xl text-2xl font-bold mb-4 uppercase font-benzin">МОИ УСЛУГИ</h2>
          <Tabs defaultValue={selectedCategory} className=  "mb-6">
            <TabsList>
              {["ВСЁ", "РАЗРАБОТКА", "СВЕДЕНИЕ", "БИТЫ"].map((cat) => {
                const count =
                  cat === "ВСЁ"
                    ? products.filter((p): p is NonNullable<typeof p> => p !== undefined).length
                    : products.filter((p): p is NonNullable<typeof p> => p !== undefined && p.category === cat).length;

                return (
                  <TabsTrigger key={cat} value={cat}>
                    {cat} <span className="text-[#0db484] ml-2 font-bold">{count}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {["ВСЁ", "РАЗРАБОТКА", "СВЕДЕНИЕ", "БИТЫ"].map((cat) => (
              <TabsContent key={cat} value={cat}>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-6 gap-5 mt-8">
                  {products
                    .filter((p): p is NonNullable<typeof p> => p !== undefined)
                    .filter(p => cat === "ВСЁ" || p.category === cat)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        <div className="flex justify-between" >
          <MainButton className="lg:invisible lg:flex hidden mx-auto lg:w-1/2 w-full font-benzin bg-[#0db484] "></MainButton>
          <MainButton href="https://forms.yandex.ru/cloud/686e2e1302848f0ecf036ccf" className="mx-auto lg:w-1/2 w-full font-benzin text-lg text-black bg-white ">Есть <span className="text-emerald-500">особенное</span> предложение?</MainButton>
        </div>
      </section>

      {/* <section className="py-2 gap-8 w-full max-w-screen-xl mx-auto border mt-4 border-white/20 bg-white/5 backdrop-blur-md rounded-[50px] px-8 py-6">
        <a href="https://t.me/bigmoneymgmt">
          <h2 className="lg:text-3xl text-2xl flex items-center font-extrabold font-benzin">
            {">"} КАТАЛОГ БИТОВ 
            <span
                  className="ml-3 lg:text-lg text-sm hover:underline bg-white py-1.5 px-4 rounded-3xl text-emerald-500 font-bold"
            >
                  <span className="text-black">Не нашли</span> свой?
            </span>
          </h2>
        </a>
        <div>
          <input type="text" className="p-3 border-1 my-4 w-1/2 border-[#929292] rounded-3xl" placeholder="134BPM.. F#.." />
        </div>
        <div className="flex gap-4 grid lg:grid-cols-3 grid-cols-1 w-full ">
        {isClient &&
          tracks.map((track) => <MusicItem key={track.id} track={track} />)}
        </div>
      </section> */}
    </div>
  );
}

