
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="relative py-48 px-6 md:px-20 flex flex-col justify-center bg-[#050208] z-20">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 right-0 w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto relative z-10">
        {/* Left Column: Title & Narrative */}
        <div className="space-y-12 animate-in slide-in-from-bottom-12 fade-in duration-1000 ease-out fill-mode-both">
          <div className="space-y-6">
            <div className="w-24 h-1.5 bg-purple-500 mb-10 shadow-[0_0_20px_#a855f7] rounded-full"></div>
            <h2 className="text-[12px] font-black tracking-[0.7em] text-purple-500 uppercase">Strategic Insight</h2>
            
            <h3 className="text-6xl md:text-8xl font-display font-black leading-[0.85] text-white tracking-tighter drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              REVEAL THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-purple-600 bg-[length:200%_auto] animate-gradient-x">
                EFFICIENCY.
              </span>
            </h3>
            
            <p className="text-purple-100/60 text-sm md:text-lg leading-relaxed max-w-md font-medium pt-4">
              Our Free IT Audit is designed to uncover redundant costs, security vulnerabilities, and performance bottlenecks in your current infrastructure.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                <span className="font-display font-black">01</span>
              </div>
              <div>
                <h4 className="text-white font-display font-black uppercase tracking-tight">Zero Cost</h4>
                <p className="text-xs text-white/30">Comprehensive review, no commitment.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                <span className="font-display font-black">02</span>
              </div>
              <div>
                <h4 className="text-white font-display font-black uppercase tracking-tight">Actionable Roadmap</h4>
                <p className="text-xs text-white/30">Clear steps to optimize your tech stack.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Audit Card */}
        <div className="relative group animate-in slide-in-from-right-20 fade-in duration-1000 delay-500 ease-out fill-mode-both">
           <div className="absolute inset-0 bg-purple-600/10 blur-[200px] rounded-full group-hover:bg-purple-600/20 transition-colors duration-1000"></div>
           <div className="relative p-12 md:p-16 border border-white/10 rounded-[4rem] bg-[#0c0816] space-y-12 shadow-[0_60px_140px_rgba(0,0,0,0.8)] border-t-white/20 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>

              <div className="relative z-10 space-y-10">
                <div className="flex justify-between items-center">
                  <p className="text-[11px] font-black text-purple-500 uppercase tracking-[0.6em]">Process: AUDIT-LITE</p>
                  <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7] animate-pulse"></div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter leading-none">FREE IT <br/>AUDIT.</h4>
                  <p className="text-sm text-white/50 leading-relaxed font-medium">Ready to see where you can save? Enter your organization details below and our lead consultants will schedule your non-intrusive audit.</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black ml-4">Organization</label>
                    <input type="text" placeholder="COMPANY NAME" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-display font-black tracking-widest text-xs focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black ml-4">Corporate Email</label>
                    <input type="email" placeholder="YOUR@COMPANY.COM" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-display font-black tracking-widest text-xs focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-white/10" />
                  </div>
                  <button className="w-full group relative px-10 py-5 rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    <div className="absolute inset-0 bg-white group-hover:bg-purple-500 transition-all duration-700"></div>
                    <span className="relative z-10 text-black group-hover:text-white transition-colors duration-700 font-display font-black tracking-[0.3em] uppercase text-sm">
                      Claim Free Audit
                    </span>
                  </button>
                </div>

                <div className="pt-8 flex items-center justify-between border-t border-white/10">
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">Immediate Review Available</p>
                  <div className="flex gap-2">
                    <div className="w-1 h-1 rounded-full bg-purple-500/40"></div>
                    <div className="w-1 h-1 rounded-full bg-purple-500/40"></div>
                    <div className="w-1 h-1 rounded-full bg-purple-500/40"></div>
                  </div>
                </div>
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
