
export interface Transaction {
  id: string;
  bank: 'KBANK' | 'SCB' | 'KTB' | 'BBL' | 'GSB';
  userId: string;
  amount: number;
  time: string;
  status: 'success' | 'pending';
}

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', bank: 'BBL', userId: 'ZZx789', amount: 5500.00, time: '10:57:43', status: 'success' },
  { id: '2', bank: 'KTB', userId: 'ZZx567', amount: 700.00, time: '10:57:40', status: 'success' },
  { id: '3', bank: 'KBANK', userId: 'ZZx923', amount: 400.00, time: '10:57:38', status: 'success' },
  { id: '4', bank: 'KTB', userId: 'ZZx044', amount: 4500.00, time: '10:57:36', status: 'success' },
  { id: '5', bank: 'KTB', userId: 'ZZx689', amount: 1100.00, time: '10:57:35', status: 'success' },
  { id: '6', bank: 'SCB', userId: 'ZZx221', amount: 100.00, time: '10:57:30', status: 'success' },
];

export const BANK_COLORS = {
  KBANK: 'bg-green-600',
  SCB: 'bg-purple-600',
  KTB: 'bg-cyan-600',
  BBL: 'bg-blue-800',
  GSB: 'bg-pink-500',
};

export const BANK_NAMES = {
  KBANK: 'K-Bank',
  SCB: 'SCB',
  KTB: 'Krungthai',
  BBL: 'Bangkok Bank',
  GSB: 'GSB',
};

// รวมลิงก์รูปภาพไว้ที่นี่ เพื่อให้แก้ไขง่าย
export const IMAGES = {
  // รูปพื้นหลังของโลโก้ด้านบน (Hero Logo)
  HERO_BG: "https://xn--24-5qi8lod.com/storage/images/logo.png",
  
  // รูปแบนเนอร์โปรโมชั่นด้านล่าง
  PROMO_BANNER: "https://24iboom-storeate.sgp1.digitaloceanspaces.com/24iboom-spaces/images/JWYnUMJ0QnROVT2dOMF472azmznuj4Y2q79PTsT9.jpg"
};
