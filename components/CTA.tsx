
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="relative py-48 px-6 md:px-12 bg-[#050208] pointer-events-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-purple-600/10 rounded-full blur-[200px] pointer-events-none"></div>
      
      {/* Floating Card Container */}
      <div className="max-w-7xl mx-auto relative z-10 bg-[#0c0816] rounded-[5rem] border border-white/5 overflow-hidden py-32 px-6 shadow-[0_100px_200px_-50px_rgba(0,0,0,1)] animate-in zoom-in-95 fade-in duration-1000 ease-out fill-mode-both">
        {/* Subtle pattern background for the card */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        
        <div className="max-w-5xl mx-auto text-center space-y-14 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-24 h-1.5 bg-purple-500 mb-12 shadow-[0_0_20px_#a855f7] rounded-full animate-pulse"></div>
            
            <div className="space-y-8 animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-300 fill-mode-both">
              <h2 className="text-[12px] font-black tracking-[0.8em] text-purple-500 uppercase">Aethera Collective</h2>
              
              {/* Title matching Hero style exactly */}
              <h3 className="text-6xl md:text-[8rem] font-display font-black leading-[0.85] text-white tracking-tighter drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                JOIN THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-purple-600 bg-[length:200%_auto] animate-gradient-x">
                  COLLECTIVE.
                </span>
              </h3>
              
              <p className="text-purple-100/60 text-sm md:text-xl leading-relaxed max-w-2xl mx-auto font-medium pt-4">
                Become a part of the quiet revolution in ambient robotics. Private consultations for laboratory integration are now open for global visionaries.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-12 pt-4 animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-500 fill-mode-both">
            <button className="group relative px-12 py-5 rounded-full overflow-hidden transition-all duration-700 hover:scale-110 active:scale-95 shadow-[0_40px_80px_-15px_rgba(168,85,247,0.5)]">
               <div className="absolute inset-0 bg-white group-hover:bg-purple-500 transition-all duration-700"></div>
               <span className="relative z-10 text-black group-hover:text-white transition-colors duration-700 font-display font-black tracking-[0.3em] uppercase text-sm md:text-xl">
                  Request Invitation
               </span>
            </button>
            
            <div className="flex items-center gap-10">
              <span className="w-16 h-px bg-white/10"></span>
              <p className="text-[10px] tracking-[0.8em] text-purple-500/60 font-black uppercase">
                Verified excellence
              </p>
              <span className="w-16 h-px bg-white/10"></span>
            </div>
          </div>
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

export default CTA;
