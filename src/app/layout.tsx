import "@/src/app/styles/globals.css";
import { AudioPlayer } from "@/src/widgets/audio-player/AudioPlayer";
import { ReduxProvider } from '@/src/app/lib/ReduxProvider';
import Header from "@/src/widgets/header/Header";
import Circles from "@/src/shared/circles/Circles";
import Footer from "@/src/widgets/footer/Footer";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="font-benzin">
      <ReduxProvider>
        <Circles />
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid p-8 pb-20 mx-auto">
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
