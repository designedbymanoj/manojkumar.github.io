import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MousePointer2 } from 'lucide-react';

export function Hero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-40 pb-10 overflow-hidden flex flex-col bg-[#FAFAFA] dark:bg-[#0B0F0C]">
      {/* Background Textures & Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gray-200/50 dark:bg-white/5 rounded-[100%] blur-[80px]" />
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }} 
        />
      </div>
      
      {/* Central Column Borders */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl border-x border-dashed border-gray-300 dark:border-white/10 z-0 pointer-events-none" />

      <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Cursors */}
        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 md:-left-4 lg:-left-16 xl:-left-24 top-[35%] hidden md:block"
        >
          <MousePointer2 className="w-6 h-6 text-black dark:text-white fill-black dark:fill-white -rotate-12" />
          <div className="bg-[#6366F1] text-white px-3 py-1.5 rounded-full text-sm font-medium mt-1 ml-4 shadow-lg whitespace-nowrap">
            Lead designer
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-0 md:-right-4 lg:-right-16 xl:-right-24 top-[65%] hidden md:block"
        >
          <MousePointer2 className="w-6 h-6 text-black dark:text-white fill-black dark:fill-white -rotate-12" />
          <div className="bg-[#F97316] text-white px-3 py-1.5 rounded-full text-sm font-medium mt-1 ml-4 shadow-lg whitespace-nowrap">
            Perhaps you?
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-6 text-center leading-[1.1] text-gray-900 dark:text-white"
        >
          Software partner for <br />
          <span className="text-aura-green">startups and agencies</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl text-center mb-12"
        >
          From concept to launch, we create seamless digital experiences and scalable applications that resonate with your audience.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-black font-medium text-lg hover:scale-105 transition-transform shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Book a free call
          </a>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-10">
        <div className="border-t border-dashed border-gray-300 dark:border-white/10 pt-4 pb-2 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <span className="bg-[#1B3320] text-[#74C69D] px-3 py-1.5 rounded-full font-semibold">LOVE FROM INDIA 💖</span>
            <span className="font-semibold text-gray-400">SERVING WORLDWIDE 🌍</span>
          </div>
          <div>{time}</div>
        </div>
      </div>
    </section>
  );
}
