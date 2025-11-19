import React from 'react';

const StatsBar: React.FC = () => {
  return (
    <div className="px-2 max-w-sm mx-auto mb-6">
      <div className="grid grid-cols-3 gap-2">
        <StatBox label="ออนไลน์" value="486,518" />
        <StatBox label="ผู้ใช้งานวันนี้" value="3,022" />
        <StatBox label="ฝากเงินวันนี้" value="฿1,249,513" />
      </div>
    </div>
  );
};

interface StatBoxProps {
  label: string;
  value: string;
}

const StatBox: React.FC<StatBoxProps> = ({ label, value }) => {
  return (
    <div className="bg-black border border-green-500/50 rounded-lg p-2 text-center shadow-[0_0_10px_rgba(34,197,94,0.2)]">
      <div className="text-[10px] text-gray-400 mb-1">{label}</div>
      <div className="text-white font-bold text-xs sm:text-sm truncate">{value}</div>
    </div>
  );
};

export default StatsBar;
