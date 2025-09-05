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
      <section id="О проекте" className="flex max-w-screen-xl mx-auto w-full flex-col lg:flex-row lg:gap-8 mt-34 lg:h-screen ">
        <div className="flex lg:w-2/3 lg:mr-20 flex-col lg:h-screen lg:relative lg:block justify-center">
          <div className=" rounded-2xl text-center lg:text-left w-full">
            <h2 className="lg:text-5xl text-3xl font-bold uppercase font-benzin min-h-46 w-full">
              <span className="drop-shadow-[0_0_3px_#ffffff]">
                {">"} ЛУЧШИЙ САЙТ ДЛЯ{" "}
              </span>
              <motion.span
                className="text-emerald-500 font-bold"
                style={{ textShadow: "0 0 15px #0db484" }}
              >
                {text}
                <span className="animate-blink">| </span> 
              </motion.span>
              <span className="drop-shadow-[0_0_3px_#ffffff]">БРЕНДА. <br /> M&M, БИТЫ ОТ </span>
              <span
                className="text-emerald-500 font-bold"
                style={{ textShadow: "0 0 15px #0db484" }}
              >
                SPACY?
              </span>
              <span className="drop-shadow-[0_0_3px_#ffffff]">
                {" "}
              </span>
            </h2>
              <p className=" font-benzin lg:text-lg uppercase text-sm mt-4 w-full w-48 text-gray-200 font-medium mt-2 ">
                Приветствую на одном из моих проектов, <span className="text-[#0db484] font-semibold">spacycookinghere.ru!!</span> Ты артист или бизнесмен? - здесь ты точно найдешь себе то, что тебе нужно. 
                 <br /><br /> 
                 Нужен <span className="text-[#0db484] font-semibold">сайт</span> для собственного бренда, <span className="text-[#0db484] font-semibold">сведение</span> или же <span className="text-[#0db484] font-semibold">бит</span> под твой новый трек? Нажимай "УСЛУГИ",
                  если есть желание работать со мной и развиваться в программировании или продюсировании вместе - жми вторую кнопку. Мои прошлые заказы ты так же сможешь увидеть на этом сайте
              </p>

            <div>

            </div>

          <div className="flex flex-col lg:flex-row justify-between lg:mt-6 mt-6">
            <a
              href="#Услуги"
              className="lg:w-1/2 w-full font-benzin bg-white text-black border border-0.5 backdrop-blur-md cursor-pointer rounded-3xl font-bold lg:text-lg text-md mt-4 lg:mt-0 text-center lg:px-8 px-4 py-2 transform transition-transform duration-300 hover:scale-105"
            >
              МОИ УСЛУГИ
            </a>
            <a
              href="#WORK TOGETHER"
              className="lg:w-1/2 w-full font-benzin bg-[#0db484] backdrop-blur-md cursor-pointer rounded-3xl font-bold lg:text-lg text-md mt-4 lg:mt-0 text-center lg:px-8 px-4 py-2 transform transition-transform duration-300 hover:scale-105 lg:ml-4"
            >
              WORK WITH ME
            </a>
          </div>

          </div>
        </div>
        <div className="flex lg:w-1/3 flex-col items-center justify-center lg:h-screen">
          <div className="relative w-full max-w-lg flex flex-col items-center h-full mt-3 lg:py-0 py-15">
              <div className="relative w-60 aspect-square rounded-full overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <Image
                  src="https://s3.twcstorage.ru/bf9f335b-325409fa-85a9-484e-8b56-e3ad47c00577/images/cbhram.png"
                  alt="Hero image"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h1 className="text-2xl font-benzin font-extrabold mt-2 mb-2 flex items-center justify-center">
                <span className="mr-2 drop-shadow-[0_0_2px_#ffffff]">SPACY?</span>
                <svg
                  className="invert drop-shadow-[0_0_3px_#ffffff]"
                  color="s#0c7552"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z" />
                </svg>
              </h1>

            <div className="flex gap-2 mt-2 lg:text-sm text-xs h-8 font-benzin">
              <span className="bg-transparent border border-[#929292] text-white px-3 py-1.5 rounded-full">
                #artist
              </span>
              <span className="bg-transparent border border-[#929292] text-white px-3 py-1.5 rounded-full">
                #producer
              </span>
              <span className="bg-transparent border border-[#929292] text-white px-3 py-1.5 rounded-full">
                #programmer
              </span>
            </div>

            <p className="lg:text-md uppercase text-gray-200 text-sm  max-w-lg mx-auto  text-center font-medium mt-5 font-benzin">
              Я - Максим К. (aka spacy?), являюсь веб-разработчиком, продюсером и артистом. За это время сделал <span className="text-[#0db484] font-bold">{">"} 100 сайтов</span> для разных компаний
              по всему миру и так же имею опыт в продюсировании треков в самых
              различных тайпах, в том числе <a href="" className="text-[#0db484] font-bold">своих</a>.
              <br />
              <br />
            </p>

          </div>
        </div>

      
      </section>
      <div id="Портфолио">
      <HorizontalScrollGallery  />

      </div>

      <section className="lg:py-16 max-w-screen-xl mx-auto lg:mt-10 space-y-10">
        {features.map((feature, index) => (
          <div
            id={feature.title}
            key={index}
            className={`flex flex-col md:flex-row py-4 gap-8 mt-4  ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="relative w-full md:w-1/2">
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
                className="absolute top-[-40] lg:left-86 left-40 lg:w-56 w-48 lg:h-56 h-48 rounded-3xl object-cover shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div  className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h2 className="lg:text-3xl text-2xl font-extrabold uppercase font-benzin">{">"} {feature.title}</h2>
              <p className="lg:text-md text-gray-200 text-sm uppercase font-medium font-benzin whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
        <div className="flex justify-between" >
          <MainButton className="lg:invisible lg:flex hidden mx-auto lg:w-1/2 w-full font-benzin bg-[#0db484] ">WORK TOGETHER</MainButton>
          <MainButton href="https://forms.yandex.ru/cloud/686e2e1302848f0ecf036ccf" className="mx-auto lg:w-1/2 w-full font-benzin bg-[#0db484] ">WORK TOGETHER</MainButton>
        </div>
      </section>
      <section  id="Услуги" className="mt-30 max-w-screen-xl mx-auto">
        <h2 className="lg:text-3xl text-2xl font-bold mb-4 uppercase font-benzin">МОИ УСЛУГИ</h2>
          <Tabs defaultValue={selectedCategory} className=  "mb-6">
            <TabsList>
              {["ВСЁ", "РАЗРАБОТКА", "СВЕДЕНИЕ", "БИТЫ"].map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {cat}
                </TabsTrigger>
              ))}
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
          <MainButton href="https://forms.yandex.ru/cloud/686e2e1302848f0ecf036ccf" className="mx-auto lg:w-1/2 w-full font-benzin text-black bg-white ">Есть особенное предложение?</MainButton>
        </div>
      </section>

      <section className="py-2 gap-8 w-full max-w-screen-xl mx-auto">
        <a href="https://t.me/bigmoneymgmt">
          <h2 className="lg:text-3xl text-2xl flex items-center font-extrabold mt-12 font-benzin">
            {">"} КАТАЛОГ БИТОВ 
            <span
                  className="ml-3 text-lg hover:underline bg-white py-1.5 px-3 rounded-3xl text-emerald-500 font-bold"
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
      </section>
    </div>
  );
}

