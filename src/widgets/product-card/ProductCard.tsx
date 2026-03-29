'use client';

import Image from "next/image";
import { CardTitle } from "@/src/shared/card-title/CardTitle";
import { CardContent } from "@/src/shared/card-content/CardContent";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardHeader } from "@/src/shared/card-header/CardHeader";
import { Card } from "@/src/shared/card/Card";
import { useState } from "react";

export function ProductCard({
  product,
  expandedId,
  setExpandedId
}: {
  product: any;
  expandedId: number | null;
  setExpandedId: (id: number | null) => void;
}) {
  const [imageIndex, setImageIndex] = useState(0);

  const isExpanded = expandedId === product.id;

  return (
    <Card>
      <CardHeader>
        <div className="relative w-full h-52 lg:h-56 rounded-3xl overflow-hidden">
          <Image
            src={`https://s3.twcstorage.ru/30ac639c-badf-4586-8d01-bcd43bfd9c21/images${product.images[imageIndex]}`}
            alt={product.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

          <div className="absolute top-2 right-2 z-20">
            <span className="bg-black/60 font-benzin border border-[#929292] text-white px-4 text-xs py-1.5 rounded-full">
              HIT
            </span>
          </div>

          {product.images.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0db484]/70 hover:bg-[#0db484] text-white rounded-full p-2 z-20 transition"
                onClick={() =>
                  setImageIndex((prev) =>
                    prev === 0 ? product.images.length - 1 : prev - 1
                  )
                }
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0db484]/70 hover:bg-[#0db484] text-white rounded-full p-2 z-20 transition"
                onClick={() =>
                  setImageIndex((prev) =>
                    prev === product.images.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        <CardTitle>{product.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="font-benzin uppercase text-lg font-bold mt-2">
          от {product.price}
        </p>

        <p
          className={`font-benzin text-md text-white mt-2 transition-all ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {product.description}
        </p>

        {product.description.length > 120 && (
          <button
            onClick={() =>
              setExpandedId(isExpanded ? null : product.id)
            }
            className="text-[#0db484] text-sm mt-1 text-left hover:underline"
          >
            {isExpanded ? "Скрыть" : "Ещё..."}
          </button>
        )}

        <div className="mt-auto">
          <a
            href="https://t.me/bigmoneymgmt"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full font-benzin bg-[#0db484] rounded-3xl font-bold text-sm mt-4 px-4 py-2 text-center transition hover:scale-105"
          >
            СДЕЛАТЬ ЗАКАЗ
          </a>
        </div>
      </CardContent>
    </Card>
  );
}