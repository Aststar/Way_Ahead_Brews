
import React, { useState } from 'react';
import { CartProvider } from './context/CartContext.tsx';
import Header from './components/Header.tsx';
import Bubbles from './components/Bubbles.tsx';
import Hero from './components/Hero.tsx';
import FeaturedBrews from './components/FeaturedBrews.tsx';
import WingStory from './components/WingStory.tsx';
import Process from './components/Process.tsx';
import Commitment from './components/Commitment.tsx';
import Shop from './components/Shop.tsx';
import Footer from './components/Footer.tsx';
import OurStory from './components/OurStory.tsx';
import OurProcess from './components/OurProcess.tsx';

export type Page = 'home' | 'story' | 'shop' | 'process';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="bg-slate-900 text-white min-h-screen relative selection:bg-[#ec1c24] selection:text-white">
        <Bubbles />
        <Header currentPage={currentPage} onNavigate={navigateTo} />
        <main className="relative z-[1]">
          {currentPage === 'home' && (
            <>
              <Hero 
                onShopClick={() => navigateTo('shop')} 
                onStoryClick={() => navigateTo('story')}
              />
              <FeaturedBrews onShopClick={() => navigateTo('shop')} />
              <WingStory onMoreClick={() => navigateTo('story')} />
              <Process onProcessClick={() => navigateTo('process')} />
              <Commitment />
              <div id="shop-section">
                <Shop />
              </div>
            </>
          )}
          {currentPage === 'story' && (
            <OurStory onShopClick={() => navigateTo('shop')} />
          )}
          {currentPage === 'shop' && (
            <div className="pt-20">
              <Shop />
            </div>
          )}
          {currentPage === 'process' && (
            <OurProcess onShopClick={() => navigateTo('shop')} />
          )}
        </main>
        <Footer onNavigate={navigateTo} />
      </div>
    </CartProvider>
  );
};

export default App;
