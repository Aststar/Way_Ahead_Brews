
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onStoryClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopClick, onStoryClick }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section 
      ref={targetRef}
      className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-8 md:pb-12"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center">
        
        {/* --- 0% ALCOHOL BADGE --- */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.5 }}
          className="absolute top-[-20px] right-2 md:right-[5%] md:top-10 z-20"
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-[#ec1c24] rounded-full text-white font-bold shadow-lg shadow-[#ec1c24]/50">
            <div className="absolute inset-0 border-2 border-dashed border-white/50 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="flex flex-col items-center leading-none">
              <span className="text-2xl md:text-4xl font-heading">0%</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest mt-1">Alcohol</span>
              <span className="text-[8px] md:text-[10px] opacity-80">100% Taste</span>
            </div>
          </div>
        </motion.div>

        {/* --- TEXT CONTENT --- */}
        <motion.div style={{ opacity: opacityText, y: yText }} className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#d4af37] text-sm font-medium tracking-wider uppercase"
          >
            <Star className="w-4 h-4 fill-current" />
            The Molecular Carbonation Standard
          </motion.div>

          {/* --- BIG HEADLINE --- */}
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading text-white tracking-tight leading-[0.9]">
            {/* Line 1 */}
            <motion.span 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="block"
            >
              Flavorfully
            </motion.span>
            {/* Line 2 */}
            <motion.span 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="block"
            >
              <span className="text-[#ec1c24]">Way</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                Ahead.
              </span>
            </motion.span>
          </h1>

          {/* --- SLOGAN --- */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
          >
            "Once you're way ahead, <br className="md:hidden" />
            <span className="text-[#d4af37] font-heading italic text-2xl md:text-3xl">
              you never look back.
            </span>"
          </motion.p>

          {/* --- CTAs --- */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-30 pt-4"
          >
            <button 
              onClick={onShopClick}
              className="group relative px-10 py-5 bg-[#ec1c24] text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(236,28,36,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Shop the Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button 
              onClick={onStoryClick}
              className="text-white/70 hover:text-white font-medium border-b border-transparent hover:border-[#d4af37] transition-colors"
            >
              Read our story
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
