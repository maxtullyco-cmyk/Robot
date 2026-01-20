
import React from 'react';
import { Cpu, Eye, Wind, Layers } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Ambient Motion",
      desc: "Dynamics that mirror natural movements, eliminating the rigid perception of traditional robotics."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Neural Core",
      desc: "A custom-etched processing array designed for emotional intelligence and zero-latency awareness."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Subtle Perception",
      desc: "Multi-spectrum vision systems that allow for a respectful, unintrusive understanding of spaces."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Tactile Glass",
      desc: "Interfaces that respond to the warmth of proximity, glowing only when intent is detected."
    }
  ];

  return (
    <section id="features" className="relative py-48 px-6 md:px-20 min-h-screen flex flex-col justify-center bg-[#050208] z-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto relative z-10">
        <div className="space-y-16">
          <div className="space-y-6 animate-in slide-in-from-bottom-12 fade-in duration-1000 ease-out">
            <div className="w-24 h-1.5 bg-purple-500 mb-10 shadow-[0_0_20px_#a855f7] rounded-full"></div>
            <h2 className="text-[12px] font-black tracking-[0.7em] text-purple-500 uppercase">Aethera Laboratory</h2>
            
            <h3 className="text-6xl md:text-8xl font-display font-black leading-[0.85] text-white tracking-tighter drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-purple-600 bg-[length:200%_auto] animate-gradient-x">
                PRESENCE.
              </span>
            </h3>
            
            <p className="text-purple-100/60 text-sm md:text-base leading-relaxed max-w-md font-medium">
              Revealing a calm, intentional intelligence that integrates seamlessly into premium environments without the clutter of traditional tech.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div 
                key={i} 
                style={{ animationDelay: `${(i + 1) * 200}ms` }}
                className="group p-10 rounded-[3rem] bg-[#0c0816] border border-white/5 hover:border-purple-500/50 hover:bg-[#150d2b] transition-all duration-700 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.9)] animate-in slide-in-from-bottom-10 fade-in fill-mode-both duration-1000 ease-out"
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/5 blur-[80px] group-hover:bg-purple-500/15 transition-all duration-700"></div>
                
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-2xl border border-white/10">
                  {f.icon}
                </div>
                <h4 className="text-white text-2xl font-display font-black mb-4 tracking-tighter group-hover:text-purple-300 transition-colors uppercase">{f.title}</h4>
                <p className="text-xs md:text-sm text-purple-100/40 leading-relaxed font-medium group-hover:text-purple-100/70 transition-colors">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block relative group animate-in slide-in-from-right-20 fade-in duration-1000 delay-500 ease-out fill-mode-both">
           <div className="absolute inset-0 bg-purple-600/10 blur-[200px] rounded-full group-hover:bg-purple-600/20 transition-colors duration-1000"></div>
           <div className="relative p-16 border border-white/10 rounded-[4rem] bg-[#0a0612] space-y-12 shadow-[0_60px_140px_rgba(0,0,0,0.8)] border-t-white/20">
              <div className="flex justify-between items-center">
                <div className="h-1.5 w-40 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-1/3 animate-[loading_3s_infinite] shadow-[0_0_15px_#a855f7]"></div>
                </div>
                <div className="w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7] animate-pulse"></div>
              </div>
              <div className="space-y-4">
                <p className="text-[11px] font-black text-purple-500 uppercase tracking-[0.6em]">System Protocol: Active</p>
                <h4 className="text-5xl font-display font-black text-white tracking-tighter leading-none">ABSOLUTE <br/>CALM.</h4>
              </div>
              <p className="text-sm text-white/50 leading-relaxed font-medium">The Aethera core achieves 0dB operational noise through advanced magnetic leveling and passive thermal management.</p>
              
              <div className="pt-10 grid grid-cols-2 gap-10 border-t border-white/10">
                <div className="space-y-2">
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">Response</p>
                  <p className="text-3xl font-display text-white font-black tracking-tighter">0.4<span className="text-xs text-purple-500 uppercase tracking-widest ml-1">ms</span></p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">Sensors</p>
                  <p className="text-3xl font-display text-white font-black tracking-tighter">OMNI</p>
                </div>
              </div>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
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

export default Features;
