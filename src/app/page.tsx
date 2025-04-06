import HomePage from "../pages/home/HomePage";
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Продюсирование вашего личного бренда | spacycookinghere.ru',
  description: '...',
  icons: 'hero-3.jpg'
}

export default function Home() {
  return (
    <HomePage/>
  );
}
