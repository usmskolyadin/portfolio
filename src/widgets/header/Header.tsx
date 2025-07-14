"use client"

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    
    <div className="fixed top-0 left-0 w-full  backdrop-blur-md z-50 ">
        <div className="lg:py-0 py-2 lg:mx-auto mx-4 w-full max-w-screen-2xl ">            
            <header className="flex justify-between items-center lg:py-5 py-0 border-gray-200  px-2 py-1 relative font-benzin">

                <h1 className="lg:text-md text-sm font-medium flex items-center drop-shadow-[0_0_2px_#ffffff]">
                    <Image
                        src="/SCH-LOGO.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className="w-14 h-6 mr-4"
                    />
                    <Link href="/">*WHY SPACY COOKING <span className="underline">HERE</span>?</Link>
                </h1>
                
                <nav className=" hidden md:flex gap-6 uppercase">
                {["О проекте", "Портфолио", "Услуги", "Work together"].map((item) => (
                    <Link className="hover:underline font-medium" key={item} href={`#${item}`}> 
                        {item}
                    </Link>
                ))}
                </nav>

                <button
                    className="md:hidden p-2 mr-6 rounded-md focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {isOpen && (
                <nav className="absolute z-50 top-full right-0 bg-black shadow-lg flex flex-col w-full py-4 px-6 rounded-3xl opacity-90 justify-center flex flex-col md:hidden">
                {["О проекте", "Портфолио", "Услуги", "Work together"].map((item) => (
                    <Link className="hover:underline font-medium" key={item} href={`#${item}`}> 
                        {item}
                    </Link>
                ))}
                </nav>
                )}

        </header>
        </div>
    </div>

    )
}

export default Header