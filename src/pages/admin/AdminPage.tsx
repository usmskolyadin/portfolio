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

export default function AdminPage() {
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
              * АДМИНКА{" "}
            </span>
            <span className="drop-shadow-[0_0_3px_#ffffff]"> SPACY COOKING HERE</span>
          </h2>
            <p className="text-xl uppercase text-white font-medium mt-4">
              Здесь происходит менеджемент контентом
            </p>
            <div className="lg:flex flex-col justify-between mt-2">
            <MainButton>
                ПЕРЕЙТИ К РАБОТЕ
            </MainButton>

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
          <div className="relative w-full md:w-1/2">
            <Image
                src={feature.image}
                alt={feature.title}
                className="lg:w-96 w-80 lg:h-96 h-80 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
            <Image
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
        </div>
      </section>
    </div>
  );
}
