"use client";
import Link from "next/link";

export const SocialIcons = () => {
  const iconStyle =
    "w-7 h-7 lg:w-6 lg:h-6 transition-transform hover:scale-110 cursor-pointer fill-white";

  return (
    <div className="flex lg:gap-6 gap-4 items-center mr-2">
      <Link href="https://t.me/whyspacy" target="_blank" rel="noopener noreferrer">
        <svg className={iconStyle} viewBox="0 0 24 24">
          <path d="M9.945 16.569l-.394 4.64c.564 0 .81-.241 1.107-.531l2.652-2.532 5.498 3.972c1.008.556 1.728.262 2.025-.93l3.666-17.214c.334-1.579-.576-2.193-1.616-1.812L1.04 9.18c-1.552.608-1.532 1.47-.277 1.855l5.428 1.69 12.599-7.938c.592-.395 1.134-.18.69.215L9.945 16.569z" />
        </svg>
      </Link>

      {/* <Link href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
        <svg className={iconStyle} viewBox="0 0 24 24">
        <path d="M23.5 6.2a2.95 2.95 0 00-2.07-2.09C19.71 3.5 12 3.5 12 3.5s-7.71 0-9.43.61A2.95 2.95 0 00.5 6.2 30.21 30.21 0 000 12a30.21 30.21 0 00.5 5.8 2.95 2.95 0 002.07 2.09C4.29 20.5 12 20.5 12 20.5s7.71 0 9.43-.61a2.95 2.95 0 002.07-2.09A30.21 30.21 0 0024 12a30.21 30.21 0 00-.5-5.8zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z" />
        </svg>
        </Link> */}

      <Link href="https://www.instagram.com/spacycookinghere" target="_blank" rel="noopener noreferrer">
        <svg className={iconStyle} viewBox="0 0 24 24">
          <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
        </svg>
      </Link>
        
              <Link href="https://github.com/usmskolyadin" target="_blank" rel="noopener noreferrer">
                <svg className={iconStyle} viewBox="0 0 24 24">
                  <path d="M12 .5C5.72.5.5 5.72.5 12.01c0 5.11 3.31 9.44 7.9 10.98.58.1.79-.25.79-.56v-2.06c-3.21.69-3.89-1.55-3.89-1.55-.53-1.36-1.29-1.72-1.29-1.72-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.74.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.98 10.98 0 015.72 0c2.18-1.49 3.14-1.18 3.14-1.18.62 1.57.23 2.73.11 3.02.73.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.41.35.77 1.04.77 2.11v3.13c0 .31.21.67.8.56 4.59-1.54 7.9-5.87 7.9-10.98C23.5 5.72 18.28.5 12 .5z" />
                </svg>
              </Link>
    </div>
  );
};
