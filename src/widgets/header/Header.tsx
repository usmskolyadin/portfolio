"use client"

import { SocialIcons } from "@/src/shared/social-icons/SocialIcons";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import { LanguageSwitcher } from "../language-switcher/LanguageSwitcher";
import { useTranslations } from "../language-switcher/useTranslations";

interface HeaderProps {
  locale: "en" | "ru";
}


const Header = ({ locale }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const ui = useTranslations("ui", "en") as any;;

    const navItems = [
        { label: ui.headers.aboutProject, href: `#${ui.headers.aboutProject}` },
        { label: ui.headers.portfolioSection, href: `#${ui.headers.portfolioSection}` },
        { label: ui.buttons.services, href: `#${ui.buttons.services}` },
        { label: ui.buttons.workTogether, href: `#${ui.buttons.workTogether}` },
    ];

    return (
    
    <div className="fixed lg:top-4 top-2 pr-6 lg:pr-0 left-0 w-full  z-50 ">
        <div className="lg:py-0  py-2 lg:mx-auto mx-4 w-full max-w-screen-xl ">            
            <header className="border py-4 px-4 border-white/20 bg-white/5 backdrop-blur-md rounded-[50px] flex justify-between items-center lg:py-5 py-0 border-gray-200  px-2 py-1 relative font-benzin">

                <h1 className="lg:text-sm text-md font-medium flex items-center ">
                    <Image
                        src="/SCH-LOGO.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className="w-14 h-6 mr-4"
                    />
                    <div className="hidden lg:block text-lg font-semibold">
                        <Link href="/">SPACY COOKING <span className="">HERE</span>?</Link>
                        <p className="text-xs font-medium opacity-80">GODDAMN RIGHT!</p>
                    </div>
                </h1>

                <nav className="hidden md:flex md:items-center gap-6 uppercase">
                {navItems.map((item) => (
                    <Link
                    className="hover:underline font-medium lg:text-xs"
                    key={item.href}
                    href={item.href}
                    >
                    {item.label}
                    </Link>
                ))}
                </nav>
                <SocialIcons />

                {/* <button
                    className="md:hidden p-2 mr-6 rounded-md focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={38} /> : <Menu size={38} />}
                </button> */}

                    {isOpen && (
                    <nav className="absolute z-50 uppercase top-full right-4 bg-black shadow-lg flex flex-col w-full py-4 mx-auto mt-4 rounded-3xl opacity-90 justify-center items-center md:hidden">
                        {navItems.map((item) => (
                        <Link
                            className="hover:underline font-medium py-2"
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                        ))}
                    </nav>
                    )}
                <LanguageSwitcher />
        </header>
        </div>
    </div>

    )
}

export default Header