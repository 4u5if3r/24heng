import React from 'react';
import Header from './components/Header';
import HeroLogo from './components/HeroLogo';
import ActionButtons from './components/ActionButtons';
import StatsBar from './components/StatsBar';
import Jackpot from './components/Jackpot';
import PromoBanner from './components/PromoBanner';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#020b10] bg-[radial-gradient(circle_at_center,_#0a2e28_0%,_#000000_100%)] text-white overflow-x-hidden">
      <div className="max-w-md mx-auto min-h-screen relative">
        {/* Background Ambient Effects */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-screen overflow-hidden pointer-events-none z-0">
           <div className="absolute top-[-10%] left-[-20%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-[10%] right-[-20%] w-[250px] h-[250px] bg-emerald-500/10 rounded-full blur-[80px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <HeroLogo />
          <ActionButtons />
          <StatsBar />
          <PromoBanner />
          <Jackpot />
          <TransactionList />
          
          {/* Footer note */}
          <div className="text-center py-8 text-gray-600 text-[10px]">
            © 2024 24HENG. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;