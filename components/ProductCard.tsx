
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types.ts';
import { useCart } from '../context/CartContext.tsx';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col group border border-slate-900/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative p-10 bg-slate-50 flex items-center justify-center overflow-hidden">
        <motion.img
          src={product.imageUrl}
          alt={product.title}
          loading="lazy"
          decoding="async"
          className="max-h-[220px] w-auto object-contain transition-transform duration-700"
          whileHover={{ scale: 1.1, rotate: 3 }}
        />
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Premium
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow bg-white">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title.replace('Way Ahead ', '')}</h3>
        <p className="text-slate-500 mb-6 text-sm leading-relaxed font-light">{product.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-2xl font-bold text-slate-900 tracking-tight">${product.price.toFixed(2)}</span>
          <motion.button
            onClick={() => addToCart(product)}
            className="bg-slate-900 text-white rounded-2xl px-5 py-3 flex items-center gap-2 hover:bg-slate-800 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag size={18} />
            <span className="text-sm font-bold">Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
