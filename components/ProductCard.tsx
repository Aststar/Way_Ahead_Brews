
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col group"
      variants={cardVariants}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative p-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-auto object-contain transition-transform duration-500"
          style={{ transformOrigin: 'center' }}
          whileHover={{ rotateY: 15, rotateX: -10 }}
        />
      </motion.div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{product.title}</h3>
        <p className="text-slate-400 mb-4 text-sm flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-2xl font-extrabold text-yellow-400">${product.price.toFixed(2)}</span>
          <motion.button
            onClick={() => addToCart(product)}
            className="bg-red-500 text-white rounded-full p-3 hover:bg-red-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingBag size={24} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
