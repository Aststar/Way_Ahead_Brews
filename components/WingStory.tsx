
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brandStories } from '../lib/data.ts';
import WingLogo from './icons/WingLogo.tsx';

const WingStory: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState(brandStories[0]);

  const story = brandStories.find((s) => s.id === selectedStory.id)!;
  const BgElements = story.bgElements;
  const StoryLogo = story.logo;

  return (
    <section id="story" className="relative py-20 md:py-32 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={story.id + "-bg"}
          className={`absolute inset-0 z-0 ${story.bgColor}`}
          initial={{ clipPath: 'circle(0% at 50% 50%)' }}
          animate={{ clipPath: 'circle(150% at 50% 50%)' }}
          exit={{ clipPath: 'circle(0% at 50% 50%)' }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 z-0 opacity-10">
        {BgElements.map((El, i) => (
          <motion.div
            key={story.id + i}
            className="absolute"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 35}%`,
              rotate: `${i * 45}deg`
            }}
          >
            <El className={`w-24 h-24 ${story.accentColor}`} />
          </motion.div>
        ))}
      </div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
             <AnimatePresence mode="wait">
                <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={`text-4xl md:text-5xl font-extrabold ${story.accentColor}`}>{story.title}</h2>
                    <p className="mt-4 text-lg text-white max-w-lg mx-auto md:mx-0">
                        {story.description}
                    </p>
                </motion.div>
             </AnimatePresence>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              key={story.id + "-wing"}
              initial={{ scale: 0.5, y: -100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
              className={`relative ${story.accentColor}`}
            >
              <WingLogo className="w-64 h-64" />
              <div className="absolute inset-0 flex items-center justify-center">
                <StoryLogo className="w-20 h-20" />
              </div>
            </motion.div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {brandStories.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedStory(item)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 transform
                    ${selectedStory.id === item.id ? 'scale-110 shadow-lg' : 'scale-90 opacity-70 hover:opacity-100 hover:scale-100'}
                    ${item.bgColor} ${item.accentColor}`}
                >
                  <item.logo className="w-8 h-8"/>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WingStory;
