import Hero from '@components/home/Hero';
import Services from '@components/home/Services';
import Portfolio from '@components/home/Portfolio';
import Packages from '@components/home/Packages';
import About from '@components/home/About';
import Contact from '@/components/Contact';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Studio Forma — Dizajn Enterijera Kikinda | Konceptni dizajn & 3D vizualizacija',
  description:
    'Studio Forma Kikinda — enterijer dizajn studio. Konceptni dizajn, 3D vizualizacija, kompletno projektovanje i nadzor realizacije u Kikindi i Vojvodini.',
  alternates: {canonical: 'https://studioforma.rs'},
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Packages />
      <About />
      <Contact />
    </>
  );
}
