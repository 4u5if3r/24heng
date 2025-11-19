import React, { useState, useEffect } from 'react';
import { MOCK_TRANSACTIONS, BANK_COLORS, Transaction } from '../constants';

const BANKS: Transaction['bank'][] = ['KBANK', 'SCB', 'KTB', 'BBL', 'GSB'];

const generateRandomTransaction = (): Transaction => {
  const bank = BANKS[Math.floor(Math.random() * BANKS.length)];
  const randomId = Math.floor(Math.random() * 900) + 100;
  
  // Generate semi-realistic amounts
  const baseAmounts = [300, 500, 1000, 1500, 2000, 3000, 5000, 10000];
  const base = baseAmounts[Math.floor(Math.random() * baseAmounts.length)];
  const amount = base + (Math.random() > 0.7 ? Math.floor(Math.random() * 9) * 100 : 0);
  
  const now = new Date();
  
  return {
    id: Date.now().toString(),
    bank,
    userId: `ZZx${randomId}`,
    amount: amount,
    time: now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    status: 'pending'
  };
};

const TransactionList: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let statusTimeoutId: ReturnType<typeof setTimeout>;

    const scheduleNextTransaction = () => {
      // Random delay between 5 and 10 seconds (5000ms - 10000ms)
      const delay = Math.floor(Math.random() * 5000) + 5000;

      timeoutId = setTimeout(() => {
        const newTx = generateRandomTransaction();
        
        // Add new transaction at the top
        setTransactions(prev => [newTx, ...prev.slice(0, 6)]);

        // After 2 seconds, change status from 'pending' to 'success'
        statusTimeoutId = setTimeout(() => {
          setTransactions(prev => 
            prev.map(tx => 
              tx.id === newTx.id ? { ...tx, status: 'success' } : tx
            )
          );
        }, 2000);

        // Recursively schedule next transaction
        scheduleNextTransaction();
      }, delay);
    };

    // Start the loop
    scheduleNextTransaction();

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(statusTimeoutId);
    };
  }, []);

  return (
    <div className="px-4 max-w-sm mx-auto pb-10">
      <div className="text-center mb-3 mt-2">
        <h3 className="text-cyan-400 text-sm font-bold tracking-wider uppercase drop-shadow-sm">
          <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
          รายการถอนเงินอัตโนมัติ
        </h3>
      </div>

      <div className="border border-emerald-500/30 rounded-xl p-2 bg-gray-900/50 backdrop-blur-sm transition-all duration-500">
        <div className="space-y-2">
          {transactions.map((tx) => (
            <div 
              key={tx.id} 
              className="bg-gradient-to-r from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-lg p-2 flex items-center justify-between shadow-sm animate-slide-down"
            >
              {/* Left: Bank Icon & User Info */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white/20 shadow-md ${BANK_COLORS[tx.bank]}`}>
                  {tx.bank}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-gray-400">ลูกค้า:</span>
                    <span className="text-white font-bold text-xs">{tx.userId}</span>
                  </div>
                  <div className="text-[10px] text-cyan-400 font-light tracking-wide">ยอดถอน</div>
                  <div className="text-[9px] text-gray-500 flex items-center gap-1">
                    {tx.time} น.
                  </div>
                </div>
              </div>

              {/* Right: Amount & Status */}
              <div className="flex flex-col items-end">
                <div className="text-white font-bold text-sm drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                  {tx.amount.toLocaleString('th-TH', { minimumFractionDigits: 2 })} ฿
                </div>
                
                {/* Status Badge */}
                <div className={`px-2 py-0.5 rounded-full text-[9px] mt-1 border transition-all duration-500 ${
                  tx.status === 'pending' 
                    ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400 animate-pulse' 
                    : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                }`}>
                  {tx.status === 'pending' ? (
                    <span className="flex items-center gap-1">
                       รอโอน...
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                       โอนแล้ว
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionList;