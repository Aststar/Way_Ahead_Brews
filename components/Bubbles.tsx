
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Bubble: React.FC<{ initialX: number; size: number; duration: number; delay: number }> = ({ initialX, size, duration, delay }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      className="absolute bottom-0 rounded-full bg-white/10"
      style={{
        width: size,
        height: size,
        left: `${initialX}%`,
      }}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: -windowHeight - size, opacity: [1, 1, 0] }}
      transition={{
        duration,
        delay,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
};

const Bubbles: React.FC = () => {
  const bubbles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    size: Math.random() * 20 + 5,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} />
      ))}
    </div>
  );
};

export default Bubbles;
