
import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="relative py-48 px-6 bg-[#050208]">
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 animate-in slide-in-from-bottom-12 fade-in duration-1000 ease-out">
          <div className="space-y-6">
            <h2 className="text-[12px] font-black tracking-[0.6em] text-purple-500 uppercase">Tech Portfolio</h2>
            <h3 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter leading-none">
              In Flow.
            </h3>
          </div>
          <p className="text-purple-200/30 max-w-md font-light text-xl italic border-l-2 border-purple-500/30 pl-10">
            "We manage the complexity of IT so you can lead with absolute focus on your mission."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 h-auto md:h-[750px]">
          <div className="md:col-span-8 group relative overflow-hidden rounded-[3rem] border border-white/5 bg-[#0a0510] shadow-[0_40px_80px_rgba(0,0,0,0.6)] animate-in slide-in-from-left-12 fade-in duration-1000 delay-200 fill-mode-both ease-out">
             <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
               alt="Global Cloud Infrastructure" 
               className="w-full h-full object-cover opacity-60 grayscale transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050208] via-transparent to-transparent opacity-90"></div>
             <div className="absolute bottom-12 left-12 group-hover:translate-x-4 transition-transform duration-500">
                <p className="text-[10px] tracking-[0.5em] text-purple-500 font-bold uppercase mb-4">Infrastructure 01</p>
                <h4 className="text-5xl font-display font-bold text-white tracking-tighter drop-shadow-2xl">Cloud Architecture</h4>
                <div className="mt-8 w-0 group-hover:w-32 h-1 bg-purple-500 shadow-[0_0_15px_#a855f7] transition-all duration-700"></div>
             </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-10">
             <div className="flex-1 group relative overflow-hidden rounded-[3rem] border border-white/5 bg-[#0a0510] shadow-2xl animate-in slide-in-from-right-12 fade-in duration-1000 delay-400 fill-mode-both ease-out">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Financial Analytics" 
                  className="w-full h-full object-cover opacity-40 grayscale transition-all duration-1000 group-hover:opacity-80 group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050208] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10">
                    <p className="text-[10px] tracking-[0.5em] text-purple-500 font-bold uppercase mb-2">Efficiency 04</p>
                    <h4 className="text-3xl font-display font-bold text-white tracking-tight">Spend Analytics</h4>
                </div>
             </div>
             <div className="flex-1 group relative overflow-hidden rounded-[3rem] border border-white/5 bg-[#0a0510] shadow-2xl animate-in slide-in-from-right-12 fade-in duration-1000 delay-600 fill-mode-both ease-out">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" 
                  alt="Network Monitoring" 
                  className="w-full h-full object-cover opacity-40 grayscale transition-all duration-1000 group-hover:opacity-80 group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050208] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10">
                    <p className="text-[10px] tracking-[0.5em] text-purple-500 font-bold uppercase mb-2">Integrity 09</p>
                    <h4 className="text-3xl font-display font-bold text-white tracking-tight">System Integrity</h4>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
