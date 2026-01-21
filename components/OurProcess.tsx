
import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Droplets, Zap, BookOpen, Layers, ArrowRight, Package } from 'lucide-react';

interface OurProcessProps {
  onShopClick: () => void;
}

const OurProcess: React.FC<OurProcessProps> = ({ onShopClick }) => {
  return (
    <div className="pt-24 min-h-screen bg-slate-900">
      {/* Hero Header */}
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            Our <span className="text-[#ec1c24]">Process.</span>
          </h1>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              Until now, non-alcoholic beer has been produced either by extracting alcohol from normally brewed beer using a heat process, or by using some form of "controlled fermentation" involving a combination of lower temperatures and specialized yeast to minimize the creation of alcohol during the fermentation.
            </p>
            <p className="text-xl md:text-2xl text-[#ec1c24] font-normal leading-relaxed">
              These processes create beers that fail to taste like their regular, alcoholic counterparts and often have very limited shelf life.
            </p>
          </div>
        </motion.div>
      </section>

      {/* The Difference Section */}
      <section className="py-24 bg-slate-950/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold">Not anymore!</h2>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  Our process, <strong>molecular mixing</strong>, produces non-alcoholic beer simply by:
                </p>
                <ul className="space-y-4">
                  {[
                    "Blending premixes of natural ingredients together with water",
                    "Adding CO2",
                    "Canning",
                    "Pasteurizing"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <div className="w-2 h-2 rounded-full bg-[#ec1c24]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8">
                  No more complicated alcohol extraction or odd, incomplete fermentation. Instead, a process almost as simple as making a soda that produces exceptionally tasting, shelf stable, non-alcoholic beer.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:border-[#ec1c24]/30 transition-all">
                <Layers className="w-12 h-12 text-[#ec1c24] mb-4" />
                <h3 className="font-bold">Blending</h3>
              </div>
              <div className="aspect-square bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:border-[#ec1c24]/30 transition-all">
                <Droplets className="w-12 h-12 text-[#ec1c24] mb-4" />
                <h3 className="font-bold">CO2</h3>
              </div>
              <div className="aspect-square bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:border-[#ec1c24]/30 transition-all">
                <Package className="w-12 h-12 text-[#ec1c24] mb-4" />
                <h3 className="font-bold">Canning</h3>
              </div>
              <div className="aspect-square bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:border-[#ec1c24]/30 transition-all">
                <Beaker className="w-12 h-12 text-[#ec1c24] mb-4" />
                <h3 className="font-bold">Pasteurizing</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section className="py-32 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Science & Belgian Legacy.</h2>
              <div className="space-y-6 text-xl text-slate-300 font-light leading-relaxed">
                <p>
                  Molecular mixing was developed by Belgian company <a href="https://baron.bar" target="_blank" rel="noopener noreferrer" className="text-[#ec1c24] hover:underline inline-flex items-center gap-1 font-bold">Bar.on <ArrowRight size={18}/></a>.
                </p>
                <p>
                  The technology is based on the research of <strong>Miguel Roncoroni</strong> and <strong>Kevin Vestrepen</strong> of the University of Leuven, as published in their book:
                </p>
                <div className="flex items-start gap-4 text-[#ec1c24] font-bold italic text-3xl mt-12">
                  <BookOpen className="w-10 h-10 shrink-0 mt-1" />
                  "Belgian Beer Tested and Tasted"
                </div>
              </div>
              <motion.button 
                onClick={onShopClick}
                className="mt-16 bg-[#ec1c24] text-white font-bold px-12 py-5 rounded-full hover:bg-white hover:text-slate-900 transition-all uppercase tracking-widest text-sm shadow-xl"
              >
                Experience the Result
              </motion.button>
            </motion.div>

            <motion.div 
              className="md:w-1/2 relative group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[#ec1c24]/20 blur-[100px] rounded-full group-hover:bg-[#ec1c24]/30 transition-colors" />
              <div className="relative bg-slate-800 p-4 rounded-[2rem] shadow-2xl overflow-hidden border border-white/10 max-w-sm mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=50&w=600&auto=format&fit=crop" 
                  alt="Belgian Beer Tested and Tasted Book" 
                  width="384"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-[1.5rem] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#ec1c24] mb-2">Scientific Foundation</p>
                  <p className="text-lg font-serif italic">Belgian Beer Tested and Tasted</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProcess;
