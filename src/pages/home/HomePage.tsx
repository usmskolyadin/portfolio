"use client";

import Image from "next/image";
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import { MainButton } from "@/src/shared/main-button/MainButton";
import { TabsContent } from "@/src/shared/tabs-content/TabsContent";
import { TabsTrigger } from "@/src/shared/tabs-trigger/TabsTrigger";
import { TabsList } from "@/src/shared/tabs-list/TabsList";
import { Tabs } from "@/src/shared/tabs/Tabs";
import { ProductCard } from "@/src/widgets/product-card/ProductCard";
import { MusicItem } from "@/src/widgets/music-item/MusicItem";
import { products, features, typingSpeed, texts, pauseTime} from "@/src/shared/constants/constants";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
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
      {/* Первый блок */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 ">
        <div className="relative">
          {/* Контент */}
          <div className="p-6 rounded-2xl">
          <h2 className="lg:text-5xl text-5xl font-semibold uppercase ">
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



            <p className="text-xl uppercase text-white font-medium mt-4">
              Я - Максим Колядин (aka spacy?), являюсь веб-разработчиком с 2020 года, за это время сделал > 150 сайтов для разных компаний по всему миру и так же спродюсировал множество треков в самых различных тайпах
            </p>
            <h1 className="text-xl font-bold mt-6">- ТАК ЖЕ, МОИ ПРОЕКТЫ:</h1>
            <div>
              <div className="overflow-x-auto flex items-center gap-4 grayscale opacity-100 mt-4">
                  <div className="cursor-pointer items-center  transform transition-transform duration-300 hover:scale-105">
                    <Image
                      key="323"
                      src={`/seamusic.png`}
                      alt="Company logo" 
                      className="object-cover"
                      width={40}
                      height={5}
                    />
                  </div>
                  <div className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
                    <Image
                      key="432"
                      src={`/github.png`}
                      alt="Company logo"
                      className="invert object-cover"
                      width={42}
                      height={10}
                    />
                    </div>
                  <div className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
                    <Image
                        key="534"
                        src={`/telegram.png`}
                        alt="Company logo"
                        className="invert object-cover"
                        width={45}
                        height={30}
                      />
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
            <MainButton>
                К КАТАЛОГУ
            </MainButton>

            </div>
          </div>
        </div>
        <div className="relative w-full flex justify-center ">
          <div className="relative w-full h-full flex flex-col lg:flex-row justify-center items-center">
            <div className="absolute top-5 lg:left-10 z-20 transform transition-transform duration-300 hover:scale-105">
              <h1 className="text-xl font-extrabold lg:mb-2 mb-4">MIXING & MASTERING <span className="text-emerald-500 font-semibold">+ БИТЫ</span></h1>
              <MusicItem />
            </div>

            <div className="absolute ml-20 top-56 left-36 lg:top-52 lg:left-24 z-10 transform transition-transform duration-300 hover:scale-105">
              <h1 className="text-xl font-extrabold lg:mb-2 mb-4 w-[250px]">САЙТ ДЛЯ <span className="text-emerald-500 font-semibold">ВАШЕГО</span> БРЕНДА</h1>
              <Image
                src="/hero-2.jpg"
                alt="Hero image"
                width={250} 
                height={50}
                className="rounded-3xl opacity-90"
              />
            </div>

            <div className="absolute lg:ml-30 bottom-0 left-5 lg:right-0 lg:top-36 lg:left-96 z-5 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/hero-3.jpg"
                alt="Hero image"
                width={250}
                height={250}
                className="rounded-3xl opacity-90"
              />
              <h1 className="text-xl font-extrabold lg:mt-2 mt-4 w-[250px]">САЙТ ДЛЯ ВАШЕГО БРЕНДА</h1>
              </div>
          </div>
        </div>
      </section>
      <section className="mt-30 lg:pl-8 lg:pr-4">
        <h2 className="text-3xl font-bold mb-4 uppercase">My Services</h2>
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="mb-6"
        >
          <TabsList>
            {["All", "Development", "Design", "Marketing"].map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={selectedCategory}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {products
                .filter(
                  (p) => selectedCategory === "All" || p.category === selectedCategory
                )
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
      <section className="py-16 gap-8 p-8 mt-10 space-y-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row py-4 gap-8 mt-4 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="relative w-full md:w-1/2">
            <img
                src={feature.image}
                alt={feature.title}
                className="lg:w-96 w-80 lg:h-96 h-80 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
            <img
                src={feature.image2}
                alt={feature.title}
                className="absolute top-[-40] lg:left-86 left-40 w-64 h-64 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-3xl font-extrabold uppercase">{feature.title}</h2>
            <p className="text-xl uppercase text-white font-medium">{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
      <section className="py-2 gap-8 p-8 w-full">
      <h2 className="text-3xl font-extrabold uppercase mb-4 mt-12">Beats catalog</h2>
        <div className="flex gap-5 w-full ">
            <div className="gap-5 w-full mt-2">
                <div className="mb-4">
                    <MusicItem/>
                </div>
                <div className="mb-4">
                    <MusicItem/>
                </div>
                <div className="mb-4">
                    <MusicItem/>
                </div>
            </div>
            <div className="gap-5 w-full mt-2">
                <div className="mb-4">
                    <MusicItem/>
                </div>
                <div className="mb-4">
                    <MusicItem/>
                </div>
                <div className="mb-4">
                    <MusicItem/>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
