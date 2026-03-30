"use client";

import { usePathname, useRouter } from "next/navigation";

const LOCALES = ["ru", "en"];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const segments = pathname.split("/");
  const currentLocale = LOCALES.includes(segments[1]) ? segments[1] : "ru";

  const switchLocale = (locale: string) => {
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="flex items-center border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px] ">
      {LOCALES.map((loc) => {
        const isActive = loc === currentLocale;

        return (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            className={`
              px-3 py-1 сursor-pointer text-xs font-benzin rounded-[50px] transition-all duration-300
              ${isActive 
                ? "bg-[#0db484] text-white shadow-lg scale-105" 
                : "text-white/70 hover:text-white hover:bg-white/10"}
            `}
          >
            {loc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}