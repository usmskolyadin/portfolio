import "@/src/app/styles/globals.css";
import { AudioPlayer } from "@/src/widgets/audio-player/AudioPlayer";
import { ReduxProvider } from '@/src/app/lib/ReduxProvider';
import Header from "@/src/widgets/header/Header";
import Circles from "@/src/shared/circles/Circles";
import Footer from "@/src/widgets/footer/Footer";
import { Montserrat, Lato } from 'next/font/google';
import Head from "./head";
import ElectricLines from "../shared/electric-lines/ElectricLines";
import Image from "next/image";


const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
});


export default function RootLayout({ children, params }: { children: React.ReactNode, params: any }) {
  const { locale } = params;

  return (
    <html>
      <Head />
      <body className={`${montserrat.variable} bg-black`}>
        <ReduxProvider>
          {/* <ElectricLines /> */}
          <div className="mx-auto max-w-screen-3xl ">
            <div className="lg:grid pb-20">
              
              {children ? children : (
                      <div className="flex h-screen justify-center items-center bg-black">
                        <Image
                          src="/SCH-LOGO.png"
                          alt="logo"
                          width={100}
                          height={100}
                          priority
                          className={`w-56 h-32 mr-4 transition-opacity duration-1000`}
                        />
                      </div>
              )}
              <div className="mx-auto w-full">
                {/* <AudioPlayer /> */}
              </div>
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}