import React from 'react';
import { motion } from 'framer-motion';
import { playBoing, playMeow, playBark, playPop } from '../utils/sound';
import { Dog, Cat, Bone, Syringe, Award } from 'lucide-react';

const stickers = [
  {
    id: 1,
    icon: Dog,
    text: '¡Lomito Feliz!',
    sound: playBark,
    bg: 'bg-maxi-yellow text-black',
    rotate: -6,
    initialX: 10,
    initialY: 15,
    border: 'border-maxi-dark',
    showOnMobile: true, // Only this sticker stays visible on mobile
  },
  {
    id: 2,
    icon: Cat,
    text: 'Michi Boss',
    sound: playMeow,
    bg: 'bg-maxi-pink text-white',
    rotate: 10,
    initialX: -10,
    initialY: 70,
    border: 'border-maxi-dark',
    showOnMobile: false,
  },
  {
    id: 3,
    icon: Bone,
    text: 'Snack Zone',
    sound: playBoing,
    bg: 'bg-maxi-green text-black',
    rotate: -12,
    initialX: 20,
    initialY: 140,
    border: 'border-maxi-dark',
    showOnMobile: false,
  },
  {
    id: 4,
    icon: Syringe,
    text: 'Sin Trauma!',
    sound: playPop,
    bg: 'bg-maxi-cyan text-black',
    rotate: 8,
    initialX: -15,
    initialY: 210,
    border: 'border-maxi-dark',
    showOnMobile: false,
  },
  {
    id: 5,
    icon: Award,
    text: 'VET TOP 2026',
    sound: playBoing,
    bg: 'bg-maxi-purple text-white',
    rotate: -8,
    initialX: 25,
    initialY: 260,
    border: 'border-maxi-dark',
    showOnMobile: false,
  },
];

export const StickerPlayground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      <div className="max-w-7xl mx-auto h-full relative">
        {stickers.map((stk) => {
          const Icon = stk.icon;
          return (
            <motion.div
              key={stk.id}
              drag
              dragConstraints={{ left: -60, right: 60, top: -40, bottom: 150 }}
              dragElastic={0.2}
              whileHover={{ scale: 1.12, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
              onDragStart={stk.sound}
              onClick={stk.sound}
              style={{
                top: `${stk.initialY}px`,
                right: stk.initialX > 0 ? `${stk.initialX}px` : 'auto',
                left: stk.initialX <= 0 ? `${Math.abs(stk.initialX)}px` : 'auto',
              }}
              className={`pointer-events-auto absolute cursor-grab active:cursor-grabbing select-none
                ${stk.showOnMobile ? 'flex' : 'hidden sm:flex'}
                ${stk.bg} border-2 sm:border-4 ${stk.border} shadow-brutal-sm sm:shadow-brutal px-2.5 py-1.5 sm:px-4 sm:py-2 font-archivo text-[10px] sm:text-xs uppercase tracking-wider
                items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl transition-shadow hover:shadow-brutal-lg`}
              initial={{ scale: 0, rotate: stk.rotate }}
              animate={{ scale: 1, rotate: stk.rotate }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: stk.id * 0.1 }}
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </div>
              <span>{stk.text}</span>
              <span className="text-[9px] sm:text-[10px] bg-black text-white px-1 sm:px-1.5 py-0.5 rounded font-mono font-bold tracking-tighter">
                ¡ARRASTRA!
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
