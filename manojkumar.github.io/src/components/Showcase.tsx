import { ArrowUpRight, Play, Square, RotateCcw, Music, Menu } from 'lucide-react';

const TimerCard = () => (
  <div className="shrink-0 w-[208px] h-[416px] rounded-3xl bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-4 flex flex-col relative overflow-hidden shadow-2xl border border-white/10">
    {/* Top bar */}
    <div className="flex justify-between items-center text-white/80 text-[8px] font-medium mb-5">
      <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center">
        <div className="w-2 h-2 bg-white/50 rounded-full" />
      </div>
      <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400" /> 10 days
      </div>
    </div>

    {/* Pills */}
    <div className="flex justify-between gap-1 mb-10">
      {['1m', '5m', '10m', '20m', '30m'].map((time, i) => (
        <div key={time} className={`text-[8px] px-2 py-1 rounded-full ${i === 0 ? 'bg-white text-black font-bold' : 'bg-white/10 text-white/70'}`}>
          {time}
        </div>
      ))}
    </div>

    {/* Big Circle */}
    <div className="flex-1 flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-full blur-xl opacity-40" />
      <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(249,115,22,0.4)] border-[3px] border-white/20">
        <span className="text-white text-4xl font-light tracking-tighter">0:54</span>
      </div>
    </div>

    {/* Bottom Controls */}
    <div className="mt-10 mb-3 flex justify-center items-center gap-5">
      <button className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors">
        <RotateCcw className="w-3 h-3" />
      </button>
      <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black shadow-lg hover:scale-105 transition-transform">
        <Play className="w-4 h-4 ml-0.5" />
      </button>
      <button className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors">
        <Square className="w-3 h-3" />
      </button>
    </div>
    <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
      <button className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors">
        <Music className="w-2 h-2" />
      </button>
    </div>
  </div>
);

const CapsaCard = () => (
  <div className="shrink-0 w-[520px] h-[416px] rounded-3xl bg-[#4F46E5] p-4 flex gap-4 shadow-2xl">
    {/* Desktop View */}
    <div className="flex-1 bg-white rounded-2xl p-6 flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center mb-10">
        <div className="font-bold text-indigo-600 flex items-center gap-1.5 text-xs">
          <div className="w-3 h-3 bg-indigo-600 rounded-full" /> capsa.ai
        </div>
        <div className="flex gap-4 text-[9px] font-medium text-gray-500">
          <span>Features</span>
          <span>Usecases</span>
          <span>About us</span>
          <span className="border border-gray-200 px-2 py-0.5 rounded-full">Contact us</span>
        </div>
      </div>
      
      <div className="max-w-[220px] relative z-10">
        <h3 className="text-2xl font-display font-light text-gray-900 leading-tight mb-3">
          Accelerate<br />due diligence<br />and <span className="text-indigo-600 font-medium">deepen</span> insights
        </h3>
        <p className="text-[8px] text-gray-500 mb-5 leading-relaxed">
          Eliminate manual work and evaluate more deals with Capsa AI, the AI operating system for private equity professionals.
        </p>
        <button className="bg-indigo-600 text-white text-[9px] font-medium px-4 py-1.5 rounded-full">
          Request demo
        </button>
        
        <div className="mt-10">
          <p className="text-[7px] text-gray-400 font-bold tracking-wider uppercase mb-2">Backed by</p>
          <div className="text-red-500 font-bold text-[9px] tracking-widest">ANTLER</div>
        </div>
      </div>

      {/* Abstract 3D Bars (CSS representation) */}
      <div className="absolute right-0 bottom-0 w-[60%] h-[70%] flex items-end justify-end gap-0.5 opacity-80">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-2.5 bg-indigo-100 rounded-t-sm" style={{ height: `${Math.random() * 100 + 20}%` }}>
            <div className="w-full h-full bg-gradient-to-b from-indigo-200 to-transparent opacity-50" />
          </div>
        ))}
      </div>
    </div>

    {/* Mobile View */}
    <div className="w-[170px] bg-white rounded-2xl p-4 flex flex-col relative overflow-hidden shadow-xl">
      <div className="flex justify-between items-center mb-5">
        <div className="font-bold text-indigo-600 text-[10px] flex items-center gap-1">
          <div className="w-2 h-2 bg-indigo-600 rounded-full" /> capsa.ai
        </div>
        <Menu className="w-3 h-3 text-gray-400" />
      </div>
      
      <h3 className="text-xl font-display font-light text-gray-900 leading-tight mb-2">
        Accelerate<br />due diligence<br />and <span className="text-indigo-600 font-medium">deepen</span> insights
      </h3>
      <p className="text-[7px] text-gray-500 mb-4 leading-relaxed">
        Eliminate manual work and evaluate more deals with Capsa AI.
      </p>
      <button className="bg-indigo-600 text-white text-[7px] font-medium px-3 py-1.5 rounded-full w-full mb-5">
        Request demo
      </button>
      
      <div className="mb-5">
        <p className="text-[6px] text-gray-400 font-bold tracking-wider uppercase mb-1">Backed by</p>
        <div className="text-red-500 font-bold text-[8px] tracking-widest">ANTLER</div>
      </div>

      <div className="mt-auto">
        <p className="text-[6px] text-indigo-600 font-bold tracking-wider uppercase mb-1">Advanced AI Platform</p>
        <h4 className="text-[9px] font-medium leading-tight mb-1">Aggregate information, structure data</h4>
        <p className="text-[6px] text-gray-500 leading-relaxed">
          Our platform retrieves data from both external and internal sources.
        </p>
      </div>
    </div>
  </div>
);

const SystainCard = () => (
  <div className="shrink-0 w-[520px] h-[416px] rounded-3xl bg-gradient-to-br from-[#4A3B32] to-[#2A2118] p-5 flex flex-col shadow-2xl relative overflow-hidden">
    {/* Top Nav */}
    <div className="flex justify-between items-center text-white/90 mb-8 relative z-10">
      <div className="text-lg font-display font-medium tracking-tight">SystAin3r</div>
      <div className="flex gap-5 text-[7px] font-bold tracking-widest uppercase">
        <span>Mentors</span>
        <span>Schedule</span>
        <span>Sponsors</span>
        <span>Faqs</span>
      </div>
      <div className="text-[7px] font-bold tracking-widest uppercase flex items-center gap-1">
        Purchase Tickets <ArrowUpRight className="w-2 h-2" />
      </div>
    </div>

    {/* Cards Container */}
    <div className="flex gap-4 flex-1 relative z-10">
      {/* Left Card */}
      <div className="flex-1 bg-white rounded-2xl p-5 flex flex-col">
        <div className="text-[7px] font-bold tracking-widest uppercase text-pink-500 mb-3">Overview</div>
        <h3 className="text-xl font-display font-medium text-gray-900 leading-tight mb-3">
          An interactive <span className="text-pink-500">women</span> hackathon about future of AI and web3
        </h3>
        <p className="text-[9px] text-gray-500 mb-5 leading-relaxed">
          Gather brightest women talent, embark on a learning journey, co-create cutting-edge solutions, shape the future together.
        </p>
        
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl p-4 text-white font-display font-medium text-sm flex items-end h-16 shadow-lg shadow-pink-500/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent" />
            AI
          </div>
          <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl p-4 text-white font-display font-medium text-sm flex items-end h-16 shadow-lg shadow-cyan-500/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent" />
            Web3
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl p-4 text-white font-display font-medium text-sm flex items-end h-16 shadow-lg shadow-purple-500/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent" />
            Sustainability
          </div>
          <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl p-4 text-white font-display font-medium text-sm flex items-end h-16 shadow-lg shadow-amber-500/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent" />
            Systems<br/>Design
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="flex-1 bg-gradient-to-b from-white to-gray-100 rounded-2xl p-5 flex flex-col relative overflow-hidden">
        <div className="text-[7px] font-bold tracking-widest uppercase text-pink-500 mb-3 relative z-10">Meet us at</div>
        <h3 className="text-xl font-display font-medium text-gray-900 leading-tight mb-3 relative z-10">
          Konzerthaus hall,<br/>Munich, Germany
        </h3>
        <div className="text-[9px] font-medium text-gray-900 flex items-center gap-1 relative z-10">
          Get directions <ArrowUpRight className="w-3 h-3" />
        </div>
        
        {/* Building Image Mockup */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop" 
            alt="Building" 
            className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </div>
);

export function Showcase() {
  const cardSet = (
    <>
      <TimerCard />
      <CapsaCard />
      <SystainCard />
      <TimerCard />
      <CapsaCard />
      <SystainCard />
      <TimerCard />
      <CapsaCard />
      <SystainCard />
    </>
  );

  return (
    <section id="portfolio" className="py-12 bg-white dark:bg-[#0B0F0C] overflow-hidden border-y border-dashed border-gray-300 dark:border-white/10">
      {/* Marquee Container */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <div className="flex gap-4 px-2">
          {cardSet}
        </div>
        <div className="flex gap-4 px-2">
          {cardSet}
        </div>
      </div>
    </section>
  );
}
