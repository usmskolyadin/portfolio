
'use client';

import Image from "next/image";

export const AudioPlayer = () => {
    return (
    <div className="fixed bottom-2 w-full z-{50} lg:ml-8 lg:mr-8 ">
        <div className="mx-auto max-w-screen-2xl">
            <div className="cursor-pointer bg-transparent border border-[#929292] rounded-full m-2 h-20 flex items-center justify-between backdrop-blur-md">
                    <input 
                        className="duration absolute top-[-5] flex ml-24"
                        type="range"
                    
                    />
                <div className="flex items-center">
                <div className="w-24 h-24 flex items-center justify-center">
                    <Image
                        key="534"
                        src={`/hero-3.jpg`}
                        alt="Company logo"
                        className="invert object-cover rounded-full"
                        width={60}
                        height={60}
                        />
                </div>
                <div>
                    <h1 className="text-xl font-bold">Сайфер</h1>
                    <p className="text-[#B6B6B6] text-lg font-medium">spacy?</p>
                </div>
                </div>
                <div className="flex justify-between items-center">
                <p className="p-6">1:05</p>
                <Image
                    src={`/arrows.png`}
                    alt="Company logo"
                    className=" m-4"
                    width={25}
                    height={25}
                    />

                <Image
                    src={`/back.png`}
                    alt="Company logo"
                    className=" m-4"
                    width={25}
                    height={25}
                    />
                    
                <Image
                    src={`/play.png`}
                    alt="Company logo"
                    className=" m-4"
                    width={40}
                    height={40}
                    />

                <Image
                    src={`/next.png`}
                    alt="Company logo"
                    className=" m-4"
                    width={25}
                    height={25}
                    />
                <p className="p-6">4:33</p>
                </div>
                <div className="flex items-center">
                    <Image
                        src={`/heart.png`}
                        alt="Company logo"
                        className=" m-4"
                        width={25}
                        height={25}
                    />
                    <Image
                        src={`/dots.png`}
                        alt="Company logo"
                        className=" m-4"
                        width={8}
                        height={8}
                    />
                    <Image
                        src={`/volume.png`}
                        alt="Company logo"
                        className=" m-4"
                        width={8}
                        height={8}
                    />
                </div>
            </div>
        </div>
    </div>
    )

}

