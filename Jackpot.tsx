import React from 'react';
import { Trophy } from 'lucide-react';

const Jackpot: React.FC = () => {
  return (
    <div className="px-4 max-w-sm mx-auto mb-6">
      <div className="bg-gray-900/80 rounded-xl border border-gray-800 p-4 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <Trophy className="text-yellow-500" size={20} />
          <h2 className="text-yellow-500 font-bold text-lg">แจ็คพอตล่าสุด</h2>
          <Trophy className="text-yellow-500" size={20} />
        </div>

        {/* Jackpot Amount */}
        <div className="bg-gradient-to-b from-red-600 to-red-800 rounded-lg py-3 px-4 text-center border border-red-500 mb-4 shadow-lg transform scale-105">
          <div className="text-white text-xs mb-1 opacity-80">มูลค่ารางวัล</div>
          <div className="text-3xl font-extrabold text-white drop-shadow-md tracking-wider">
            ฿8,552,336
          </div>
        </div>

        {/* Recent Winners Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-2 text-center">
            <div className="text-[10px] text-gray-500">ผู้โชคดีล่าสุด</div>
            <div className="text-blue-600 font-bold text-sm">ZZx44872</div>
          </div>
          <div className="bg-white rounded-lg p-2 text-center">
            <div className="text-[10px] text-gray-500">รางวัลสูงสุด</div>
            <div className="text-red-600 font-bold text-sm">฿127,252</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jackpot;