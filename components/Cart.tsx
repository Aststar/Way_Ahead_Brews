
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext.tsx';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const Cart: React.FC<{ isOpen: boolean; setIsOpen: (isOpen: boolean) => void }> = ({ isOpen, setIsOpen }) => {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-slate-800 shadow-2xl z-50 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h2 className="text-2xl font-bold text-white">Your Cart</h2>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-grow flex flex-col items-center justify-center text-slate-400">
                <p className="text-lg">Your cart is empty.</p>
                <p>Let's get some brews!</p>
              </div>
            ) : (
              <div className="flex-grow overflow-y-auto p-6 flex flex-col">
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-contain" />
                      <div className="flex-grow">
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-slate-400">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-slate-700 hover:bg-slate-600"><Minus size={16} /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-slate-700 hover:bg-slate-600"><Plus size={16} /></button>
                      </div>
                       <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-400"><Trash2 size={20} /></button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="p-6 border-t border-slate-700 mt-auto">
                <div className="flex justify-between items-center text-lg font-bold mb-4">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full bg-[#ec1c24] text-white font-bold py-3 rounded-lg hover:bg-white hover:text-[#ec1c24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_14px_rgba(236,28,36,0.3)]" disabled={cart.length === 0}>
                    Checkout
                </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
