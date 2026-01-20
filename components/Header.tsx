
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';
import WingLogo from './icons/WingLogo.tsx';
import Cart from './Cart.tsx';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a href={href} className="relative text-lg font-semibold text-white no-underline overflow-hidden py-2">
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-1 w-full bg-yellow-400"
        initial={{ y: "100%" }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </a>
  );
};

const Header: React.FC = () => {
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-red-500">
            <WingLogo className="h-10 w-10" />
            <span className="text-2xl font-bold text-white">Way Ahead</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#story">Story</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#shop">Shop</NavLink>
          </nav>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-white hover:text-yellow-400 transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart size={28} />
            {cartCount > 0 && (
              <motion.span
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-4 overflow-hidden -mb-4">
          <motion.svg
            className="w-[200%] h-auto"
            viewBox="0 0 1440 32"
            fill="#FBBF24"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'mirror' }}
          >
            <path d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,250.7C672,256,768,224,864,197.3C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" transform="translate(0 -200)"></path>
          </motion.svg>
        </div>
      </header>
      <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </>
  );
};

export default Header;
