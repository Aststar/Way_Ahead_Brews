
import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';
import WingLogo from './icons/WingLogo.tsx';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center text-center">
                    <a href="#" className="flex items-center gap-2 text-red-500 mb-4">
                        <WingLogo className="h-12 w-12" />
                        <span className="text-3xl font-bold text-white">Way Ahead Brews</span>
                    </a>
                    <p className="max-w-md text-slate-400">
                        The future of flavor is here. Enjoy the journey, one sip at a time.
                    </p>
                    <div className="flex space-x-6 mt-6">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github /></a>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Way Ahead Brews. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
