
import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../lib/data.ts';
import { ArrowRight } from 'lucide-react';

interface ProcessProps {
  onProcessClick: () => void;
}

const Process: React.FC<ProcessProps> = ({ onProcessClick }) => {
    return (
        <section id="process" className="py-24 md:py-32 bg-[#448efc]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2 
                        className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        The Brewing Ritual
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-white/90 font-light leading-relaxed mb-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We’ve mastered the art of molecular extraction—preserving every nuanced hop profile while removing every trace of alcohol.
                    </motion.p>
                    <motion.button
                      onClick={onProcessClick}
                      className="inline-flex items-center gap-2 bg-white text-[#ec1c24] font-bold px-8 py-3 rounded-full hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      How we do it <ArrowRight size={18} />
                    </motion.button>
                </div>
                
                <div className="grid md:grid-cols-4 gap-8">
                    {processSteps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center hover:bg-white/15 transition-all group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
