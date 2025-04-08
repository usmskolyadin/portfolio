"use client"

import { Menu, X } from "lucide-react";
import Link from "next/link"
import { useState } from "react";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between items-center py-4 border-gray-200 lg:px-6 px-2 relative">
            <h1 className="text-md font-medium drop-shadow-[0_0_3px_#ffffff]">
                <Link href="/">*WHY SPACY COOKING <span className="underline">HERE</span>?</Link>
            </h1>

            <nav className="hidden md:flex gap-6 uppercase">
            {["About", "Catalog", "Pricing", "Team"].map((item) => (
                <Link className="hover:underline font-medium" key={item} href="/admin"> 
                    {item}
                </Link>
            ))}
            </nav>

            <button
                className="md:hidden p-2 rounded-md focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isOpen && (
            <nav className="absolute z-50 top-full right-0 bg-black shadow-lg flex flex-col w-full py-4 px-6 rounded-3xl opacity-90 justify-center flex flex-col md:hidden">
                {["About", "Catalog", "Pricing", "Team"].map((item) => (
                <a
                    key={item}
                    href="#"
                    className="py-2 font-medium text-xl text-white hover:underline"
                    onClick={() => setIsOpen(false)} // Закрывает меню при нажатии
                >
                    {item}
                </a>
                ))}
            </nav>
            )}
      </header>
    )
}

export default Header