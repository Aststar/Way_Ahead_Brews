
import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../lib/data.ts';

const AnimatedLine: React.FC = () => (
    <div className="h-24 w-1 flex justify-center">
        <svg width="2" height="100%" viewBox="0 0 2 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.line 
                x1="1" y1="0" x2="1" y2="96"
                stroke="url(#line-gradient)" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1 }}
            />
             <defs>
                <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="100%">
                    <stop offset="0%" stopColor="#FBBF24" />
                    <stop offset="100%" stopColor="#F87171" />
                </linearGradient>
            </defs>
        </svg>
    </div>
);

const Process: React.FC = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <section id="process" className="py-20 md:py-32 bg-slate-900">
            <div className="container mx-auto px-6 text-center">
                <motion.h2 
                    className="text-4xl md:text-5xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Molecular <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500">Magic</span>
                </motion.h2>
                <motion.p 
                    className="text-lg text-slate-300 max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    We've perfected a four-step process to create non-alcoholic beer that's packed with flavor, not compromises.
                </motion.p>
                
                <div className="flex flex-col items-center">
                    {processSteps.map((step, i) => (
                        <React.Fragment key={step.id}>
                            <motion.div
                                className="bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center"
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={cardVariants}
                            >
                                <div className="mb-4 inline-block p-4 bg-slate-700 rounded-full text-yellow-400">
                                    <step.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                <p className="text-slate-400">{step.description}</p>
                            </motion.div>
                            {i < processSteps.length - 1 && <AnimatedLine />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
