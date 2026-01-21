
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
    <div className="flex flex-col min-h-screen bg-[#050208] selection:bg-purple-500/30 overflow-x-hidden">
      {/* Navigation */}
      <Navbar scrollY={scrollY} />
      
      {/* 
          Main Content Layout: 
          Each section is discrete. 
      */}
      <main className="flex-grow relative z-10 w-full">
        <Hero scrollY={scrollY} />
        <Features />
        <Gallery />
        <CTA />
      </main>

      {/* Footer ensures no extra space below it by being part of the flex container */}
      <footer className="relative z-20 py-24 px-6 border-t border-purple-900/20 bg-black/90 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
               <span className="font-display text-3xl font-black tracking-[0.1em] text-white">RIGHTSIZE</span>
            </div>
            <p className="text-purple-300/40 text-[10px] tracking-[0.4em] uppercase font-black">© 2024 Rightsize Technology. All rights reserved.</p>
          </div>
          <div className="flex gap-10 text-[11px] text-purple-200/40 font-black uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-purple-400 transition-all hover:tracking-[0.4em]">Managed Services</a>
            <a href="#" className="hover:text-purple-400 transition-all hover:tracking-[0.4em]">Optimization</a>
            <a href="#" className="hover:text-purple-400 transition-all hover:tracking-[0.4em]">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
