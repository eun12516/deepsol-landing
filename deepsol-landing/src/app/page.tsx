import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Solution from '@/components/Solution';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Services />
      <Contact />
      <Footer />
      </main>
  );
} 