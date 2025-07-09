"use client";

import Link from "next/link";

const Footer = () => {
    return (<footer className="mt-24 flex justify-between items-center py-4  border-gray-200 relative mb-10 font-benzin">
    <h1 className="text-md font-medium drop-shadow-[0_0_3px_#ffffff]">
      *WHY SPACY COOKING <span className="underline">HERE</span>?
    </h1>

    <nav className="hidden md:flex gap-6">
                      {["О проекте", "Портфолио", "Услуги", "Work together"].map((item) => (
                    <Link className="hover:underline uppercase font-medium" key={item} href={`#${item}`}> 
                        {item}
                    </Link>
                ))}
    </nav>
  </footer>)
}

export default Footer