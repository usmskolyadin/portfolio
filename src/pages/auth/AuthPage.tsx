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

export default function AuthPage() {
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
          <span className="">
              АВТОРИЗАЦИЯ
            </span>
          </h2>



            <p className="text-xl uppercase text-white font-medium mt-4">
              Зарегестироваться и авторизоваться можно здесь
            </p>
            <div className="flex-col flex mt-6">
                <label className="text-xl font-semibold flex justify-center" htmlFor="">EMAIL</label>
                <input placeholder="spacycookinghere@gmail.com" className="border border-[#929292] rounded-3xl font-semibold text-xl mt-2 px-8 py-2 transform transition-transform duration-300 hover:scale-105 ${className}" type="text" />
            </div>
            <div className="flex-col flex mt-6 ">
                <label className="text-xl font-semibold flex justify-center" htmlFor="">USERNAME</label>
                <input placeholder="spacy?" className="border border-[#929292] rounded-3xl font-semibold text-xl mt-2 px-8 py-2 transform transition-transform duration-300 hover:scale-105 ${className}" type="text" />
            </div>
            <div className="lg:flex flex-col justify-between mt-2">
            <MainButton>
                ВОЙТИ
            </MainButton>

            </div>
          </div>
        </div>
        <div className="relative w-full flex justify-center ">
          <div className="relative w-full h-full flex flex-col lg:flex-row justify-center items-center">
            <div className="absolute top-5 lg:left-10 z-20 transform transition-transform duration-300 hover:scale-105">
              <h1 className="text-xl font-extrabold lg:mb-2 mb-4">MIXING & MASTERING <span className="text-emerald-500 font-semibold">+ БИТЫ</span></h1>
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
          defaultValue={selectedCategory}
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
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-3xl font-extrabold uppercase">{feature.title}</h2>
            <p className="text-xl uppercase text-white font-medium">{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
    </div>
  );
}
