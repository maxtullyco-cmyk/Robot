
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import CTA from './components/CTA';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050208] selection:bg-purple-500/30 overflow-x-hidden">
      {/* Navigation */}
      <Navbar scrollY={scrollY} />
      
      {/* 
          Main Content Layout: 
          Each section is now more discrete. 
          Pointer events are handled individually per component.
      */}
      <main className="relative z-10 w-full">
        <Hero scrollY={scrollY} />
        <Features />
        <Gallery />
        <CTA />
      </main>

      <footer className="relative z-20 py-20 px-6 border-t border-purple-900/20 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display text-2xl font-black tracking-[0.1em] text-purple-400">RIGHTSIZE</span>
            <p className="text-purple-300/40 text-[10px] tracking-[0.3em] uppercase font-bold">© 2024 Rightsize Technology. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-[10px] text-purple-200/40 font-bold uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-purple-400 transition-colors">Managed Services</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Optimization</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
