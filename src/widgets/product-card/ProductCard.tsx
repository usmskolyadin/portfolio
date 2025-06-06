'use client'

import Image from "next/image"
import { CardTitle } from "@/src/shared/card-title/CardTitle";
import { CardContent } from "@/src/shared/card-content/CardContent";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardHeader } from "@/src/shared/card-header/CardHeader";
import { Card } from "@/src/shared/card/Card";
import { useState } from "react";


export function ProductCard({ product }: { product: any }) {
    const [imageIndex, setImageIndex] = useState(0);
  
    return (
      <Card>
        <CardHeader>
          <div className="relative w-full h-56">
            <Image
              src={product.images[imageIndex]}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            {product.images.length > 1 && (
              <>
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-emerald-700 hover:bg-emerald-800 cursor-pointer text-white rounded-full p-2"
                  onClick={() =>
                    setImageIndex((prev) =>
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )
                  }
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-700 hover:bg-emerald-800 cursor-pointer text-white rounded-full p-2"
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
          <p className="uppercase font-bold mt-2">от {product.price}</p>
          <p className="uppercase text-md text-gray-300">{product.description}</p>
        </CardContent>
      </Card>
    );
  }
  