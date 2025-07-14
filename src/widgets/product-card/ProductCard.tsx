'use client'

import Image from "next/image"
import { CardTitle } from "@/src/shared/card-title/CardTitle";
import { CardContent } from "@/src/shared/card-content/CardContent";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardHeader } from "@/src/shared/card-header/CardHeader";
import { Card } from "@/src/shared/card/Card";
import { useState } from "react";
import { MainButton } from "@/src/shared/main-button/MainButton";


export function ProductCard({ product }: { product: any }) {
    const [imageIndex, setImageIndex] = useState(0);
  
    return (
      <Card>
        <CardHeader>
          <div className="relative w-full lg:h-50 h-38">
            <div className="">
              <Image
                src={product.images[imageIndex]}
                alt={product.title}
                fill
                className="rounded-3xl object-cover"
                quality={100}
                priority
              />
            </div>
            {product.images.length > 1 && (
              <>
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#0db484] opacity-70 backdrop-blur-xl hover:bg-emerald-800 cursor-pointer text-white rounded-full p-2"
                  onClick={() =>
                    setImageIndex((prev) =>
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )
                  }
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#0db484] opacity-70 backdrop-blur-xl hover:bg-emerald-800 cursor-pointer text-white rounded-full p-2"
                  onClick={() =>
                    setImageIndex((prev) =>
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )
                  }
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
          <CardTitle>{product.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-benzin uppercase font-bold mt-2">от {product.price}</p>
          <p className="font-benzin uppercase lg:text-md text-xs text-gray-200">{product.description}</p>
          <button
            className={`w-full font-benzin bg-[#0db484]  border border-0.5 backdrop-blur-md cursor-pointer rounded-3xl font-bold lg:text-md text-sm mt-4 lg:px-12 px-2 py-1 transform transition-transform duration-300 hover:scale-105`}
          >
              <a href="https://t.me/bigmoneymgmt" target="_blank" rel="noopener noreferrer">
                СДЕЛАТЬ ЗАКАЗ
              </a>
          </button>
        </CardContent>
      </Card>
    );
  }
  