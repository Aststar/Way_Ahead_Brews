
import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import WingLogo from './icons/WingLogo.tsx';

interface OurStoryProps {
  onShopClick: () => void;
}

const HaxthausenCrest = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 240" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20 L 180 20 L 180 160 C 180 210, 100 230, 100 230 C 100 230, 20 210, 20 160 Z" fill="#FFD700" stroke="#000" strokeWidth="2" />
    <path d="M70 60 C 60 50, 40 60, 50 80 C 55 95, 80 100, 100 90 L 130 110" fill="none" stroke="#0047AB" strokeWidth="6" strokeLinecap="round" />
    <circle cx="100" cy="75" r="15" fill="#0047AB" />
    <path d="M60 140 C 50 130, 40 140, 60 160 L 60 160 C 80 140, 70 130, 60 140 Z" fill="#E31837" />
    <path d="M140 140 C 130 130, 120 140, 140 160 L 140 160 C 160 140, 150 130, 140 140 Z" fill="#E31837" />
    <path d="M100 170 C 90 160, 80 170, 100 190 L 100 190 C 120 170, 110 160, 100 170 Z" fill="#E31837" />
    <rect x="70" y="30" width="60" height="15" fill="#000" opacity="0.1" />
  </svg>
);

const Floaties: React.FC<{ type: 'hearts' | 'stars' | 'stripe' | 'strawberries', progress: MotionValue<number> }> = ({ type, progress }) => {
  const items = useMemo(() => Array.from({ length: 12 }), []);
  
  if (type === 'stripe') {
    return (
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{ opacity: useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]) }}
      >
        <motion.div className="w-full h-32 bg-white/10 backdrop-blur-sm" />
      </motion.div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${(i * 9) + (Math.random() * 5)}%`,
            top: `${Math.random() * 100}%`,
            opacity: useTransform(progress, [0, 0.2, 0.8, 1], [0, 0.5, 0.5, 0])
          }}
          animate={{ y: [0, -60, 0], rotate: [0, 360] }}
          transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: i * 0.2 }}
        >
          {type === 'hearts' && <span className="text-red-500/80 text-3xl">❤</span>}
          {type === 'stars' && <span className="text-white/80 text-2xl">★</span>}
          {type === 'strawberries' && <span className="text-3xl">🍓</span>}
        </motion.div>
      ))}
    </div>
  );
};

const OurStory: React.FC<OurStoryProps> = ({ onShopClick }) => {
  const founderRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: founderScroll } = useScroll({ target: founderRef, offset: ["start end", "end start"] });
  const { scrollYProgress: stickyScroll } = useScroll({ target: stickyRef, offset: ["start start", "end end"] });

  const stickyBg = useTransform(
    stickyScroll, 
    [0, 0.2, 0.45, 0.7, 0.95], 
    ['#6e80a6', '#6e80a6', '#005a31', '#448efc', '#f8b0b2']
  );

  const crestOpacity = useTransform(founderScroll, [0.3, 0.5, 0.7], [1, 0, 0]);
  const wingsOpacity = useTransform(founderScroll, [0.3, 0.5, 0.7], [0, 1, 1]);

  return (
    <div className="relative pt-24 bg-slate-900">
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter leading-none" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            The Way <br/><span className="text-[#ec1c24]">Ahead Story.</span>
          </motion.h1>
          <div className="space-y-8 text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
            <p>
              There is a reason our non-alcoholic beers are called Way Ahead. They are way ahead of the competition in terms of taste, freshness, and the variety of beer styles available. As a result, they are your way ahead: You no longer need to compromise and endure the headaches of alcohol consumption in order to enjoy exceptionally tasting beers. And you get good value for money, too.
            </p>
            <p>
              Exceptional taste, a wide variety of styles (yes, stay tuned for more...), full mental clarity, good value for money… With Way Ahead Brews you can have it all. You get way ahead of everybody else in your enjoyment of quality beer, and in where and when to enjoy it.
            </p>
          </div>
        </div>
      </section>

      <section ref={founderRef} className="py-24 bg-slate-950/50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
            <motion.div style={{ opacity: crestOpacity }} className="absolute">
              <HaxthausenCrest className="w-48 h-48 md:w-72 md:h-72" />
              <p className="text-center mt-4 text-slate-500 text-xs uppercase tracking-widest">Founder's Family Crest</p>
            </motion.div>
            <motion.div style={{ opacity: wingsOpacity }} className="absolute">
              <WingLogo className="w-48 h-48 md:w-72 md:h-72 text-[#ec1c24]" />
              <p className="text-center mt-4 text-[#ec1c24] text-xs uppercase tracking-widest">Way Ahead Wings</p>
            </motion.div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">The Story of the <span className="text-[#ec1c24]">Wings.</span></h2>
            <p className="text-slate-300 text-lg">
              What’s the story with what we call the “Way Ahead Wings”, our logo? Inspired by the family crest of our founder, Ove Haxthausen, the Wings communicate what makes our beer Way Ahead: Excellence in what we do, symbolized by the crown, and no compromises between exceptional taste, the negative effects of alcohol and good value for money, symbolized by the two wings of freedom rising out of the crown of excellence.
            </p>
            <p className="text-slate-300 text-lg">
              Because each of our beers has its own unique appearance, taste and history, each of them gets its own Way Ahead Wings: The colors and the objects on the Wings reflect the unique legacy of each beer. So, pick the Way Ahead Wings that best suit your beer taste, or have them all if you prefer. Either way, you’re Way Ahead!
            </p>
          </div>
        </div>
      </section>

      <section ref={stickyRef} className="relative h-[500vh]">
        <motion.div 
          className="sticky top-0 left-0 w-full h-screen flex flex-col justify-center overflow-hidden transition-colors duration-1000" 
          style={{ backgroundColor: stickyBg }}
        >
          <Floaties type="hearts" progress={useTransform(stickyScroll, [0, 0.25], [0, 1])} />
          <Floaties type="stars" progress={useTransform(stickyScroll, [0.25, 0.5], [0, 1])} />
          <Floaties type="stripe" progress={useTransform(stickyScroll, [0.5, 0.75], [0, 1])} />
          <Floaties type="strawberries" progress={useTransform(stickyScroll, [0.75, 1], [0, 1])} />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center relative h-[60vh]">
              
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center p-6" 
                style={{ 
                  opacity: useTransform(stickyScroll, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]), 
                  y: useTransform(stickyScroll, [0, 0.1, 0.2, 0.25], [50, 0, 0, -50]) 
                }}
              >
                <div className="relative mb-6">
                  <WingLogo className="w-40 h-40 text-[#ec1c24]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 pt-4">
                    <span className="text-red-600 text-xl">❤</span>
                    <span className="text-red-600 text-xl">❤</span>
                  </div>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-4">Way Ahead Pilsner</h3>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                  Our pilsner echoes the pilsners of our founder's native Denmark. The red hearts on the yellow wings are a nod to Denmark's coat of arms which has blue lions and red hearts on a yellow background.
                </p>
                <button onClick={onShopClick} className="bg-white text-slate-900 font-bold px-8 py-3 rounded-full hover:bg-[#ec1c24] hover:text-white transition-colors uppercase tracking-widest text-sm">
                  Shop in the beer store
                </button>
              </motion.div>

              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center p-6" 
                style={{ 
                  opacity: useTransform(stickyScroll, [0.25, 0.35, 0.45, 0.5], [0, 1, 1, 0]), 
                  y: useTransform(stickyScroll, [0.25, 0.35, 0.45, 0.5], [50, 0, 0, -50]) 
                }}
              >
                <div className="relative mb-6 flex gap-2">
                  <WingLogo className="w-40 h-40 text-blue-600 absolute -left-2 opacity-50" />
                  <WingLogo className="w-40 h-40 text-[#ec1c24] relative" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl pt-4">★</div>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-4">Way Ahead Hazy IPA</h3>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                  Our Hazy IPA was developed with New England style IPAs in mind. The blue and red wings with the white stars are of course a reference to the American flag since New England is known as the birthplace of the American Revolution.
                </p>
                <button onClick={onShopClick} className="bg-white text-slate-900 font-bold px-8 py-3 rounded-full hover:bg-[#ec1c24] hover:text-white transition-colors uppercase tracking-widest text-sm">
                  Shop in the beer store
                </button>
              </motion.div>

              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center p-6" 
                style={{ 
                  opacity: useTransform(stickyScroll, [0.5, 0.6, 0.7, 0.75], [0, 1, 1, 0]), 
                  y: useTransform(stickyScroll, [0.5, 0.6, 0.7, 0.75], [50, 0, 0, -50]) 
                }}
              >
                <div className="w-40 h-40 flex flex-col items-center justify-center mb-6 bg-red-600 rounded-lg p-2">
                  <div className="w-full h-4 bg-white shadow-lg mb-2" />
                  <WingLogo className="w-full h-full text-white/90" />
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-4 text-white">Way Ahead Belgian White</h3>
                <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                  The Belgian white beer style originated in the area in and around the city of Leuven. The city's coat of arms are a white horizontal stripe on a red background, hence the design of our Way Ahead Belgian White Wings
                </p>
                <button onClick={onShopClick} className="bg-white text-slate-900 font-bold px-8 py-3 rounded-full hover:bg-[#ec1c24] hover:text-white transition-colors uppercase tracking-widest text-sm">
                  Shop in the beer store
                </button>
              </motion.div>

              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center p-6" 
                style={{ 
                  opacity: useTransform(stickyScroll, [0.75, 0.85, 1], [0, 1, 1]), 
                  y: useTransform(stickyScroll, [0.75, 0.85, 1], [50, 0, 0]) 
                }}
              >
                <div className="flex items-center justify-center mb-6 gap-2">
                   <div className="text-6xl">🍓</div>
                   <WingLogo className="w-40 h-40 text-white" />
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900">Way Ahead Strawberry</h3>
                <p className="text-lg md:text-xl mb-8 text-slate-800 leading-relaxed">
                  The Way Ahead Strawberry Wings simply feature strawberries on a white background. No reason to make it more complicated.
                </p>
                <button onClick={onShopClick} className="bg-slate-900 text-white font-bold px-8 py-3 rounded-full hover:bg-[#ec1c24] hover:text-white transition-colors uppercase tracking-widest text-sm">
                  Shop in the beer store
                </button>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default OurStory;
