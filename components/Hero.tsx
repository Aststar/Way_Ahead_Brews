
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onStoryClick?: () => void;
}

// Rotating text phrases - defined outside component for stability
const ROTATING_PHRASES = ["Flavorfully", "Look ahead,", "Think ahead, drink"];

const Hero: React.FC<HeroProps> = ({ onShopClick, onStoryClick }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);
  // Parallax effect for background - moves slower
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Rotating text state
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % ROTATING_PHRASES.length);
    }, 4000); // Change phrase every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={targetRef}
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        width: '100vw',
        height: 'calc(100vh + 2cm)',
        minHeight: 'calc(100vh + 2cm)',
        maxHeight: 'calc(100vh + 2cm)',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        paddingTop: '80px',
        paddingBottom: '0px'
      }}
    >
      {/* Background Image - Full Bleed with Parallax */}
      <motion.div 
        className="absolute z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/pictures/5.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: 'calc(100vh + 2cm)',
          minHeight: 'calc(100vh + 2cm)',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          y: backgroundY
        }}
      />
      {/* Black Overlay - 10% Transparency */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          width: '100vw',
          height: 'calc(100vh + 2cm)',
          top: 0,
          left: 0,
          right: 0
        }}
      />
      {/* Background Gradient Overlay - Minimal Vignette */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.2) 50%, rgba(2, 6, 23, 0.4) 100%)',
          width: '100vw',
          height: 'calc(100vh + 2cm)',
          top: 0,
          left: 0,
          right: 0
        }}
      />
      {/* Smooth Transition Gradient at Bottom */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.8) 100%)',
          width: '100vw',
          height: '200px',
          bottom: 0,
          left: 0,
          right: 0
        }}
      />

      {/* Content Container - Centered with max-width */}
      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center w-full" style={{ marginTop: '-1cm' }}>
        
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#f5dd12] text-sm font-medium tracking-wider uppercase"
            style={{ marginTop: 'calc(-2rem - 3cm)', marginBottom: 'calc(1rem + 1cm)' }}
          >
            <Star className="w-4 h-4 fill-current" />
            The Molecular Carbonation Standard
          </motion.div>

          {/* --- BIG HEADLINE --- */}
          <div className="flex flex-col items-center">
            {/* Line 1 - Rotating Text */}
            <div className="relative flex items-center justify-center" style={{ height: '1.2em', minHeight: '1.2em', width: '100%' }}>
              {ROTATING_PHRASES.map((phrase, index) => (
                <span
                  key={index}
                  className="block text-white text-4xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight absolute whitespace-nowrap transition-all duration-500 ease-in-out"
                  style={{ 
                    left: '50%',
                    transform: `translateX(-50%) translateY(${currentPhraseIndex === index ? 0 : 20}px)`,
                    opacity: currentPhraseIndex === index ? 1 : 0,
                    pointerEvents: currentPhraseIndex === index ? 'auto' : 'none'
                  }}
                >
                  {phrase}
                </span>
              ))}
            </div>
            {/* Line 2 - Wordmark */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="block"
              style={{ marginTop: '-1.5cm' }}
            >
              <img 
                src="/images/wordmark/WayAhead-Wordmark-WA-RGB-Red-260115-v01ccr.png"
                alt="Way Ahead"
                className="h-40 md:h-64 lg:h-80 xl:h-96 w-auto object-contain"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </div>

          {/* --- CTAs --- */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-30"
            style={{ marginTop: '-1cm' }}
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
