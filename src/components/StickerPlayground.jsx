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
    initialX: 20,
    initialY: 40,
    border: 'border-maxi-dark',
  },
  {
    id: 2,
    icon: Cat,
    text: 'Michi Boss',
    sound: playMeow,
    bg: 'bg-maxi-pink text-white',
    rotate: 12,
    initialX: -30,
    initialY: 100,
    border: 'border-maxi-dark',
  },
  {
    id: 3,
    icon: Bone,
    text: 'Snack Zone',
    sound: playBoing,
    bg: 'bg-maxi-green text-black',
    rotate: -15,
    initialX: 60,
    initialY: 160,
    border: 'border-maxi-dark',
  },
  {
    id: 4,
    icon: Syringe,
    text: 'Sin Trauma!',
    sound: playPop,
    bg: 'bg-maxi-cyan text-black',
    rotate: 8,
    initialX: -50,
    initialY: 220,
    border: 'border-maxi-dark',
  },
  {
    id: 5,
    icon: Award,
    text: 'VET TOP 2026',
    sound: playBoing,
    bg: 'bg-maxi-purple text-white',
    rotate: -10,
    initialX: 40,
    initialY: 290,
    border: 'border-maxi-dark',
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
              dragConstraints={{ left: -100, right: 100, top: -50, bottom: 200 }}
              dragElastic={0.2}
              whileHover={{ scale: 1.15, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
              onDragStart={stk.sound}
              onClick={stk.sound}
              style={{
                top: `${stk.initialY}px`,
                right: stk.initialX > 0 ? `${stk.initialX}px` : 'auto',
                left: stk.initialX <= 0 ? `${Math.abs(stk.initialX)}px` : 'auto',
              }}
              className={`pointer-events-auto absolute cursor-grab active:cursor-grabbing select-none
                ${stk.bg} border-4 ${stk.border} shadow-brutal px-4 py-2 font-archivo text-xs uppercase tracking-wider
                flex items-center gap-2 rounded-xl transition-shadow hover:shadow-brutal-lg`}
              initial={{ scale: 0, rotate: stk.rotate }}
              animate={{ scale: 1, rotate: stk.rotate }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: stk.id * 0.1 }}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <Icon className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span>{stk.text}</span>
              <span className="text-[10px] bg-black text-white px-1.5 py-0.5 rounded font-mono font-bold tracking-tighter">
                ¡ARRASTRA!
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
