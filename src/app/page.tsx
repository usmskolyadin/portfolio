import dynamic from 'next/dynamic';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Продюсирование вашего личного бренда | spacycookinghere.ru',
  description: '...',
  icons: 'hero-3.jpg'
}

const HomePageClient = dynamic(() => import('@/src/pages/home/HomePage'), {
  ssr: false,
  loading: () => <p>Loading...</p>, // Optional: loading indicator
});

export default function Home() {
  return (
    <HomePageClient />
  );
}
