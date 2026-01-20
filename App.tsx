
import React from 'react';
import { CartProvider } from './context/CartContext.tsx';
import Header from './components/Header.tsx';
import Bubbles from './components/Bubbles.tsx';
import Hero from './components/Hero.tsx';
import WingStory from './components/WingStory.tsx';
import Process from './components/Process.tsx';
import Shop from './components/Shop.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="bg-slate-900 text-white min-h-screen overflow-hidden">
        <Bubbles />
        <Header />
        <main>
          <Hero />
          <WingStory />
          <Process />
          <Shop />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
