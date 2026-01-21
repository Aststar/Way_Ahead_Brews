
import React from 'react';
import { motion } from 'framer-motion';

interface FeaturedBrewsProps {
  onShopClick?: () => void;
}

const CANS = [
  { 
    id: 'pilsner', 
    name: 'Pilsner', 
    color: 'from-green-700 to-green-500', 
    shadow: 'shadow-green-500/50',
    delay: 0,
    rotate: -6 
  },
  { 
    id: 'ipa', 
    name: 'Hazy IPA', 
    color: 'from-slate-700 to-slate-500', 
    shadow: 'shadow-slate-500/50',
    delay: 0.2,
    rotate: -3 
  },
  { 
    id: 'white', 
    name: 'Belgian White', 
    color: 'from-blue-600 to-sky-400', 
    shadow: 'shadow-sky-500/50',
    delay: 0.4,
    rotate: 3 
  },
  { 
    id: 'strawberry', 
    name: 'Strawberry', 
    color: 'from-pink-500 to-rose-400', 
    shadow: 'shadow-rose-500/50',
    delay: 0.6,
    rotate: 6 
  },
];

const FeaturedBrews: React.FC<FeaturedBrewsProps> = ({ onShopClick }) => {
  return (
    <section id="featured" className="pt-0 pb-24 md:pb-32 bg-[#6e80a6] overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* The Can Squad */}
        <div className="relative w-full max-w-5xl h-[400px] md:h-[550px] [perspective:1000px] flex justify-center items-end gap-3 md:gap-8">
          {CANS.map((can, index) => (
            <motion.div
              key={can.id}
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                damping: 14, 
                stiffness: 100, 
                delay: 0.1 + (index * 0.1) 
              }}
              className="relative group cursor-pointer"
            >
              <button onClick={onShopClick} className="appearance-none block">
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ 
                    duration: 5 + index, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: index * 0.5 
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -40, 
                    rotate: 0,
                    zIndex: 50,
                    transition: { duration: 0.3 } 
                  }}
                  className={`relative w-24 md:w-52 aspect-[1/2] rounded-3xl bg-gradient-to-br ${can.color} p-1 ${can.shadow} shadow-2xl border-t border-white/20 transition-shadow duration-300`}
                  style={{ rotate: can.rotate }}
                >
                  <div className="w-full h-full rounded-[20px] bg-slate-900/10 backdrop-blur-sm flex flex-col items-center justify-between py-8 border border-white/10 overflow-hidden relative">
                    {/* Glossy Reflection */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

                    {/* Logo Area - Using optimized symbol */}
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center p-2">
                       <img 
                          src="/logos/WayAhead-Symbol-260115-v01ccr.svg" 
                          alt="" 
                          className="w-full h-full invert brightness-200"
                       />
                    </div>

                    {/* Text */}
                    <div className="text-center px-2">
                      <h3 className="text-white font-heading text-lg md:text-3xl font-bold leading-none drop-shadow-md">
                        {can.name}
                      </h3>
                      <p className="text-[9px] md:text-[11px] text-white/80 uppercase tracking-widest mt-2">Way Ahead</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floor Shadow */}
                <motion.div 
                   animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.1, 0.3, 0.1] }}
                   transition={{ duration: 5 + index, repeat: Infinity, delay: index * 0.5 }}
                   className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/60 blur-xl rounded-[100%]" 
                />
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-white/60 font-medium uppercase tracking-[0.3em] text-xs">
            Molecular precision in every drop
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBrews;
