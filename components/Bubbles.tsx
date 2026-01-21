
import React, { useEffect, useState, useMemo } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Bubble: React.FC<{ 
  initialX: number; 
  initialY: number;
  size: number; 
  duration: number; 
  delay: number; 
  mouseX: any;
  driftFactor: number;
}> = ({ initialX, initialY, size, duration, delay, mouseX, driftFactor }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const driftX = useSpring(0, { stiffness: 10, damping: 20 });
  
  useEffect(() => {
    const unsubscribe = mouseX.on('change', (latest: number) => {
      const sensitivity = latest * (size * 8) * driftFactor; 
      driftX.set(sensitivity);
    });
    return () => unsubscribe();
  }, [mouseX, size, driftX, driftFactor]);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${initialX}%`,
        bottom: initialY,
        x: driftX,
        background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.05) 40%, rgba(255, 255, 255, 0.25) 85%, rgba(255, 255, 255, 0.6) 100%)',
        boxShadow: `inset -1px -1px 3px rgba(0,0,0,0.1), 0 0 ${size/2}px rgba(255,255,255,0.25)`,
        border: '0.5px solid rgba(255, 255, 255, 0.4)',
        mixBlendMode: 'screen',
        zIndex: Math.floor(size),
      }}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ 
        y: [0, -windowHeight * 0.88, -windowHeight * 0.95, -windowHeight * 0.98], 
        opacity: [0, 1, 1, 1, 0],
        scale: [0.6, 1, 1.1, 1.1, 0.7],
      }}
      transition={{
        y: { 
          duration: duration, 
          delay: delay, 
          times: [0, 0.8, 0.95, 1],
          ease: ["easeIn", "easeOut", "linear"],
          repeat: Infinity 
        },
        opacity: { 
          duration: duration, 
          delay: delay, 
          times: [0, 0.1, 0.9, 0.98, 1], 
          repeat: Infinity 
        },
        scale: { duration, delay, repeat: Infinity }
      }}
    >
      <div 
        className="absolute top-[15%] left-[15%] bg-white/95 rounded-full blur-[0.2px]" 
        style={{ width: '30%', height: '30%' }}
      />
    </motion.div>
  );
};

const Bubbles: React.FC = () => {
  const mouseX = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseX.set(normalizedX);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX]);

  const bubbleData = useMemo(() => {
    // Optimized for performance while maintaining high visual density
    return Array.from({ length: 180 }).map((_, i) => {
      const isLarge = Math.random() > 0.8;
      return {
        id: i,
        initialX: Math.random() * 100,
        initialY: Math.random() < 0.4 ? (Math.random() * 150 - 100) : (Math.random() * -500 - 50),
        size: isLarge ? (Math.random() * 14 + 12) : (Math.random() * 8 + 2), 
        duration: Math.random() * 12 + 15,
        delay: Math.random() * 30,
        driftFactor: Math.random() * 1.5 + 0.5,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10] overflow-hidden">
      {bubbleData.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} mouseX={mouseX} />
      ))}
    </div>
  );
};

export default Bubbles;
