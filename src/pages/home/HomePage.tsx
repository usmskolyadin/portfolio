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
} from "@/src/shared/constants/constants";
import { Track } from "@/src/features/player/types";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
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

  const mockTrack: Track = {
    id: 1,
    title: "Mock Music Item",
    artist: "Mock Artist",
    imageSrc: "/cbmc.jpg",
    audioSrc:
      "https://storage.yandexcloud.net/seamusic-backet/beats/%23%232%20EUPHORIA%20158BPM%20@WHYSPACY%20@14BAGCHASER%20@INSOFAZE.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEDfM0GTxK0zSBvKGgjTso%2F20250316%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20250316T145137Z&X-Amz-Expires=2592000&X-Amz-Signature=90B9CEC71D7486DAEE3BCEA3E2CE58E7B2774DC806956804279BA6BB4EECFA6E&X-Amz-SignedHeaders=host",
  };

  return (
    <div>
      {/* Первый блок */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:gap-8 mt-10 ">
        <div className="relative">
          {/* Контент */}
          <div className="lg:p-6 rounded-2xl">
            <h2 className="lg:text-5xl text-4xl font-semibold uppercase ">
              <span className="drop-shadow-[0_0_3px_#ffffff]">
                * САЙТ ДЛЯ{" "}
              </span>
              <motion.span
                className="text-emerald-500 font-semibold"
                style={{ textShadow: "0 0 15px rgb(12, 117, 82)" }}
              >
                {text}
                <span className="animate-blink">|</span> {/* Имитация курсора */}
              </motion.span>
              <span className="drop-shadow-[0_0_3px_#ffffff]">БРЕНДА ОТ </span>
              <span
                className="text-emerald-500 font-semibold"
                style={{ textShadow: "0 0 15px rgb(12, 117, 82)" }}
              >
                WHY
              </span>
              <span className="drop-shadow-[0_0_3px_#ffffff]">SPACY?</span>
              <span className="drop-shadow-[0_0_3px_#ffffff]">
                СВЕДЕНИЕ. M&M. ФИТЫ.
              </span>
            </h2>
            <p className="lg:text-xl text-md uppercase text-white font-medium mt-4">
              Я - Максим Колядин (aka spacy?), являюсь веб-разработчиком с 2020
              года, за это время сделал {">"} 150 сайтов для разных компаний
              по всему миру и так же спродюсировал множество треков в самых
              различных тайпах
            </p>
            <div>
              <div className="overflow-x-auto flex items-center gap-4 grayscale opacity-100 mt-4">
                <div className="cursor-pointer items-center  transform transition-transform duration-300 hover:scale-105">
                  <a href="https://seamusic.space/">
                    <Image
                      key="323"
                      src={`/seamusic.png`}
                      alt="Company logo"
                      className="object-cover"
                      width={40}
                      height={5}
                    />
                  </a>
                </div>
                <div className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
                  <a href="https://github.com/usmskolyadin">
                    <Image
                      key="432"
                      src={`/github.png`}
                      alt="Company logo"
                      className="invert object-cover"
                      width={42}
                      height={10}
                    />
                  </a>
                </div>
                <div className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
                  <a href="https://t.me/whyspacy">
                    <Image
                      key="534"
                      src={`/telegram.png`}
                      alt="Company logo"
                      className="invert object-cover"
                      width={45}
                      height={30}
                    />
                  </a>
                </div>
                <div className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
                  <Image
                    key="534"
                    src={`/youtube.png`}
                    alt="Company logo"
                    className="invert object-cover"
                    width={45}
                    height={30}
                  />
                </div>
                <div className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
                  <Image
                    key="534"
                    src={`/instagram.png`}
                    alt="Company logo"
                    className="invert object-cover"
                    width={45}
                    height={30}
                  />
                </div>
              </div>
            </div>

            <div className="lg:flex flex-col justify-between mt-2">
              <MainButton>ЧТО ДАЛЬШЕ?</MainButton>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-full justify-center">
          <div className="relative w-full h-full flex flex-col lg:flex-row justify-center items-center">
            <div className="absolute top-5 lg:left-10 z-20 transform transition-transform duration-300 hover:scale-105">
              <h1 className="text-xl font-extrabold lg:mb-2 mb-4">
                MIXING & MASTERING{" "}
                <span className="text-emerald-500 font-semibold">+ БИТЫ</span>
              </h1>
              {isClient && <MusicItem track={mockTrack} />}
            </div>

            <div className="absolute ml-20 top-56 left-36 lg:top-52 lg:left-24 z-10 transform transition-transform duration-300 hover:scale-105">
              <h1 className="text-xl font-extrabold lg:mb-2 mb-4 w-[250px]">
                САЙТ ДЛЯ{" "}
                <span className="text-emerald-500 font-semibold">ВАШЕГО</span>{" "}
                БРЕНДА
              </h1>

              <Image
                src="/cbkremlin.jpg"
                alt="Hero image"
                width={250}
                height={50}
                className="rounded-3xl opacity-90"
              />
            </div>

            <div className="absolute lg:ml-30 bottom-0 left-5 lg:right-0 lg:top-36 lg:left-96 z-5 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/cbhram.jpg"
                alt="Hero image"
                width={250}
                height={250}
                className="rounded-3xl opacity-90"
              />
              <h1 className="text-xl font-extrabold lg:mt-2 mt-4 w-[250px]">
                САЙТ ДЛЯ ВАШЕГО БРЕНДА
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gap-8 lg:p-8 mt-10 space-y-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row py-4 gap-8 mt-4 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="relative w-full md:w-1/2">
              <Image
                src={feature.image}
                alt={feature.title}
                width={"1000"}
                height={"1000"}
                className="lg:w-96 w-56 lg:h-96 h-56 rounded-3xl shadow-lg transform object-cover transition-transform duration-300 hover:scale-105"
              />
              <Image
                src={feature.image2}
                alt={feature.title}
                width={"1000"}
                height={"1000"}
                className="absolute top-[-40] lg:left-86 left-40 w-56 w-36 h-56 h-36 rounded-3xl object-cover shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h2 className="text-3xl font-extrabold uppercase">{feature.title}</h2>
              <p className="lg:text-xl text-md uppercase text-white font-medium">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-30 lg:pl-8 lg:pr-4">
        <h2 className="text-3xl font-bold mb-4 uppercase">My Services</h2>
        <Tabs defaultValue={selectedCategory} className="mb-6">
          <TabsList>
            {["All", "Development", "Design", "Marketing"].map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={selectedCategory}>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 mt-8">
              {products
                .filter(
                  (p) =>
                    selectedCategory === "All" || p.category === selectedCategory
                )
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="py-2 gap-8 lg:p-8 w-full">
        <h2 className="text-3xl font-extrabold uppercase mb-4 mt-12">
          Beats catalog
        </h2>
        <div className="flex gap-4 grid lg:grid-cols-2 grid-cols-1 w-full ">
            {isClient && <MusicItem track={mockTrack} />}
        </div>
      </section>
    </div>
  );
}

