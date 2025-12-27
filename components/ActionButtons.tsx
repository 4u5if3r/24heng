
import React from 'react';
import { UserPlus, MessageCircle } from 'lucide-react';

const ActionButtons: React.FC = () => {
  return (
    <div className="px-4 space-y-3 max-w-sm mx-auto mb-6">
      <a 
        href="https://24heng.org/u1ZU6I537441"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-black font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(52,211,153,0.5)] flex items-center justify-center gap-2 transition-all active:scale-95 decoration-0"
      >
        <span>สมัครสมาชิก</span>
        <UserPlus size={18} />
      </a>
      
      <a 
        href="https://lin.ee/N8ZYgl5"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-black font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(52,211,153,0.5)] flex items-center justify-center gap-2 transition-all active:scale-95 decoration-0"
      >
        <MessageCircle size={18} className="fill-current" />
        <span>สมัครสมาชิกผ่านไลน์</span>
      </a>
    </div>
  );
};

export default ActionButtons;
