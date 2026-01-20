
import React from 'react';

interface NavbarProps {
  scrollY: number;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 md:px-20 py-10 flex justify-between items-center pointer-events-auto bg-transparent">
      <div className="flex items-center gap-5 group cursor-pointer">
        <div className="relative">
           <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse shadow-[0_0_20px_#a855f7]"></div>
           <div className="absolute inset-0 w-3 h-3 rounded-full bg-purple-500 blur-sm animate-ping opacity-0 group-hover:opacity-100"></div>
        </div>
        <span className="font-display text-3xl font-black tracking-[0.4em] text-white group-hover:text-purple-400 transition-colors uppercase">Aethera</span>
      </div>

      <button className="group relative px-10 py-3.5 rounded-full border border-white/10 bg-[#0c0816] text-white transition-all duration-700 tracking-[0.3em] uppercase overflow-hidden hover:scale-105 active:scale-95 text-xs font-display font-black shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-purple-500/40">
        <div className="absolute inset-0 bg-purple-600/5 group-hover:bg-purple-600/15 transition-colors"></div>
        <span className="relative z-10 group-hover:text-purple-300 transition-colors">Inquire</span>
      </button>
    </nav>
  );
};

export default Navbar;
