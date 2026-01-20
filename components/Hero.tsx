
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { products } from '../lib/data.ts';

const Hero: React.FC = () => {
  const mainProduct = products[1]; // Hazy IPA
  const BgElement = mainProduct.logo;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useTransform(mouseX, [-200, 200], ['-15px', '15px']);
  const parallaxY = useTransform(mouseY, [-200, 200], ['-15px', '15px']);
  const parallaxX2 = useTransform(mouseX, [-200, 200], ['10px', '-10px']);
  const parallaxY2 = useTransform(mouseY, [-200, 200], ['10px', '-10px']);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.width / 2);
    mouseY.set(event.clientY - rect.height / 2);
  };

  return (
    <section 
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-1/4 left-1/4 text-red-500/30">
        <BgElement className="w-16 h-16" />
      </motion.div>
      <motion.div style={{ x: parallaxX2, y: parallaxY2 }} className="absolute top-1/3 right-1/4 text-blue-500/30">
        <BgElement className="w-24 h-24" />
      </motion.div>
      <motion.div style={{ x: parallaxY, y: parallaxX2 }} className="absolute bottom-1/4 left-1/3 text-red-500/30">
        <BgElement className="w-12 h-12" />
      </motion.div>
       <motion.div style={{ x: parallaxY2, y: parallaxX }} className="absolute bottom-1/3 right-1/3 text-blue-500/30">
        <BgElement className="w-20 h-20" />
      </motion.div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500">
            Flavorfully
          </span>
          <br/>
          <span className="text-white">Way Ahead.</span>
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-slate-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Experience the full-bodied taste of craft beer, without the alcohol.
          It's time to get Way Ahead.
        </motion.p>
        
        <motion.div
          animate={{ y: ['-10px', '10px'] }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
          className="mt-8"
        >
          <img src={mainProduct.imageUrl} alt={mainProduct.title} className="max-w-xs md:max-w-sm mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
