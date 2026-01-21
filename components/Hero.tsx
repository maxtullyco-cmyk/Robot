
import React from 'react';
import SplineBackground from './SplineBackground';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-start pt-32 md:pt-40 px-6 md:px-24 overflow-hidden">
      {/* 3D Environment Background */}
      <div className="absolute inset-0 z-0">
        <SplineBackground scrollY={scrollY} />
      </div>

      {/* Content Overlay - Shifted left and up to clear robot */}
      <div className="max-w-4xl space-y-8 z-20 pointer-events-none relative text-left">
        <h1 className="text-5xl md:text-[6.5rem] font-display font-black leading-[0.85] text-white tracking-tighter drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] animate-in slide-in-from-left-20 fade-in duration-1000 ease-out">
          GROWTH IS THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-purple-600 bg-[length:200%_auto] animate-gradient-x">
            NEW PRIORITY.
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-6 pt-6 animate-in slide-in-from-left-20 fade-in duration-1000 delay-300 ease-out fill-mode-both pointer-events-auto">
          <button className="group relative px-10 py-4 rounded-full bg-white text-black font-display font-black text-base transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.2)] tracking-[0.2em] uppercase overflow-hidden">
            <span className="relative z-10">Scale Now</span>
            <div className="absolute inset-0 bg-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          <button className="px-10 py-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-white font-display font-black text-base hover:text-purple-300 hover:border-purple-400/50 hover:bg-purple-500/20 transition-all duration-500 tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_10px_30px_rgba(168,85,247,0.1)]">
            Our Services
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
