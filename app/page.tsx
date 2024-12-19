import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Curiosities from '@/components/sections/Curiosities';
import Resources from '@/components/sections/Resources';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Curiosities />
      <Resources />
      <Contact />
    </main>
  );
}