
import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';
import { Page } from '../App.tsx';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col items-center text-center">
                    <button onClick={() => onNavigate('home')} className="flex items-center mb-6 group outline-none">
                        <img 
                          src="/logos/WayAhead-Logo-RGB-260115-v01ccr.png" 
                          alt="Way Ahead Logo" 
                          width="240"
                          height="64"
                          loading="lazy"
                          decoding="async"
                          className="h-16 md:h-20 w-auto transition-transform group-hover:scale-105" 
                        />
                    </button>
                    <p className="max-w-md text-slate-400 leading-relaxed mb-8">
                        The future of flavor is here. No compromises, no headaches, just pure excellence in every can.
                    </p>
                    <nav className="flex gap-8 mb-10">
                      <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-white transition-colors">Home</button>
                      <button onClick={() => onNavigate('story')} className="text-slate-400 hover:text-white transition-colors">Our Story</button>
                      <button onClick={() => onNavigate('process')} className="text-slate-400 hover:text-white transition-colors">Our Process</button>
                      <button onClick={() => onNavigate('shop')} className="text-slate-400 hover:text-white transition-colors">Shop</button>
                    </nav>
                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github /></a>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Way Ahead Brews. Precision Effervescence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
