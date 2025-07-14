import "@/src/app/styles/globals.css";
import { AudioPlayer } from "@/src/widgets/audio-player/AudioPlayer";
import { ReduxProvider } from '@/src/app/lib/ReduxProvider';
import Header from "@/src/widgets/header/Header";
import Circles from "@/src/shared/circles/Circles";
import Footer from "@/src/widgets/footer/Footer";
import { Montserrat, Lato } from 'next/font/google';
import Head from "./head";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head />
      <body className={`${montserrat.variable}`}>
        <ReduxProvider>
          <Circles />
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid pb-20">
              <Header />
              {children ? children : <p className="text-white">Контент не загружен</p>}
              <AudioPlayer />
              <Footer />
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}