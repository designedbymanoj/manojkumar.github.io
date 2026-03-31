import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Strategy',
    description: 'We define direction, structure, and positioning to support every design decision.',
    tags: 'BRAND STRATEGY • MESSAGING • ROADMAP',
  },
  {
    num: '02',
    title: 'Design',
    description: 'We craft intuitive interfaces and cohesive visuals that elevate the user experience.',
    tags: 'UI DESIGN • UX DESIGN • VISUAL SYSTEM',
  },
  {
    num: '03',
    title: 'Development',
    description: 'We build fast, scalable digital products with clean code and seamless performance.',
    tags: 'WEB DEVELOPMENT • INTEGRATIONS',
  },
  {
    num: '04',
    title: 'Implementation',
    description: 'We integrate solutions smoothly into workflows to ensure efficiency and adoption.',
    tags: 'SETUP • CONFIGURATION • AUTOMATION',
  },
  {
    num: '05',
    title: 'Optimization',
    description: 'We refine, test, and enhance your product to drive ongoing growth and impact.',
    tags: 'TESTING • CONTINUOUS IMPROVEMENT',
  },
];

function Node({ index, scrollYProgress, step }: { index: number, scrollYProgress: any, step: any }) {
  const target = index / 4;
  
  let input, outputActive;
  if (index === 0) {
    input = [0, 0.04, 0.12];
    outputActive = [1, 1, 0];
  } else if (index === 4) {
    input = [0.88, 0.96, 1];
    outputActive = [0, 1, 1];
  } else {
    input = [target - 0.12, target - 0.04, target + 0.04, target + 0.12];
    outputActive = [0, 1, 1, 0];
  }

  const isActiveRaw = useTransform(scrollYProgress, input, outputActive);
  const isActive = isActiveRaw as any;
  
  const backgroundColor = useTransform(isActive, [0, 1], ['#111111', '#39FF14']);
  const color = useTransform(isActive, [0, 1], ['#ffffff', '#000000']);
  const boxShadow = useTransform(isActive, [0, 1], ['none', '0 0 30px rgba(57,255,20,0.6)']);

  return (
    <motion.div 
      className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center font-bold text-xl"
      style={{ backgroundColor, color, boxShadow }}
    >
      {step.num}
    </motion.div>
  );
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const circleRotation = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="process" ref={containerRef} className="h-[500vh] bg-[#0B0F0C] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20">
        
        {/* Title */}
        <div className="absolute top-12 md:top-20 w-full text-center z-30">
          <h2 className="text-4xl md:text-[3.5rem] font-bold text-white tracking-tight">A collaborative approach</h2>
        </div>

        {/* "STEP" label */}
        <div className="text-gray-500 text-[10px] font-bold tracking-[0.2em] mb-6 z-20 mt-16">
          STEP
        </div>

        {/* Circle and Nodes */}
        <div className="relative w-full h-[100px] flex justify-center z-10">
          <motion.div 
            className="absolute top-[30px] w-[2000px] h-[2000px] rounded-full border border-white/10"
            style={{ rotate: circleRotation }}
          >
            {steps.map((step, i) => {
              const angle = (i - 2) * 15; // -30, -15, 0, 15, 30
              return (
                <div 
                  key={i}
                  className="absolute left-1/2 top-0"
                  style={{ 
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: '0 1000px'
                  }}
                >
                  <div className="absolute -left-[30px] -top-[30px]">
                    <Node index={i} scrollYProgress={scrollYProgress} step={step} />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="relative h-[240px] w-full max-w-2xl mx-auto mt-16 text-center z-20">
          {steps.map((step, i) => {
            const target = i / 4;
            let input, outputOpacity, outputY;
            if (i === 0) {
              input = [0, 0.04, 0.12];
              outputOpacity = [1, 1, 0];
              outputY = [0, 0, -40];
            } else if (i === 4) {
              input = [0.88, 0.96, 1];
              outputOpacity = [0, 1, 1];
              outputY = [40, 0, 0];
            } else {
              input = [target - 0.12, target - 0.04, target + 0.04, target + 0.12];
              outputOpacity = [0, 1, 1, 0];
              outputY = [40, 0, 0, -40];
            }

            const opacityRaw = useTransform(scrollYProgress, input, outputOpacity);
            const opacity = opacityRaw as any;
            const yRaw = useTransform(scrollYProgress, input, outputY);
            const y = yRaw as any;
            const pointerEvents = useTransform(opacity, (v: any) => v > 0.5 ? 'auto' : 'none');

            return (
              <motion.div 
                key={i}
                className="absolute inset-0 flex flex-col items-center px-4"
                style={{ opacity, y, pointerEvents: pointerEvents as any }}
              >
                <h3 className="text-3xl md:text-[2.75rem] font-bold mb-6 text-white">{step.title}</h3>
                <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">{step.description}</p>
                
                <div className="w-full max-w-lg border-t border-b border-white/10 py-5">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                    {step.tags}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 z-20 relative">
          <a href="#contact" className="inline-block bg-[#39FF14] text-black font-bold px-8 py-4 rounded-md hover:bg-[#39FF14]/90 transition-colors">
            Start your project
          </a>
        </div>

        {/* Progress Indicator */}
        <div className="relative h-6 mt-16 text-center font-bold text-gray-500 tracking-[0.2em] text-sm z-20">
          {steps.map((step, i) => {
            const target = i / 4;
            let input, outputOpacity;
            if (i === 0) {
              input = [0, 0.04, 0.12];
              outputOpacity = [1, 1, 0];
            } else if (i === 4) {
              input = [0.88, 0.96, 1];
              outputOpacity = [0, 1, 1];
            } else {
              input = [target - 0.12, target - 0.04, target + 0.04, target + 0.12];
              outputOpacity = [0, 1, 1, 0];
            }
            const opacity = useTransform(scrollYProgress, input, outputOpacity);
            return (
              <motion.div key={i} className="absolute inset-0" style={{ opacity }}>
                0{i + 1}/05
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
