import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PawPrint, Bone, Star } from 'lucide-react';
import { playBark, playPop } from '../utils/sound';

export const Navbar = ({ onOpenBooking }) => {
  const [muted, setMuted] = useState(false);

  const handleLogoClick = () => {
    if (!muted) playBark();
  };

  return (
    <header className="sticky top-0 z-50 bg-maxi-yellow border-b-4 border-maxi-dark shadow-brutal">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <motion.div
          whileHover={{ scale: 1.04, rotate: -1 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleLogoClick}
          className="cursor-pointer flex items-center gap-2 sm:gap-2.5 bg-white px-2 sm:px-3 py-1 sm:py-1.5 border-3 sm:border-4 border-maxi-dark shadow-brutal-sm rounded-lg sm:rounded-xl flex-shrink-0 select-none"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-maxi-pink border-2 border-black flex items-center justify-center text-white flex-shrink-0">
            <PawPrint className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
          </div>
          <div>
            <h1 className="font-dela text-base sm:text-lg tracking-tight text-maxi-dark leading-none">
              CHAOS<span className="text-maxi-pink">VET</span>
            </h1>
            <p className="hidden xs:block text-[9px] sm:text-[10px] font-archivo uppercase text-gray-800 -mt-0.5">
              ¡Cero Estrés • Máximo Amor!
            </p>
          </div>
        </motion.div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <motion.a
            href="#servicios"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => playPop()}
            className="hidden md:inline-flex items-center gap-1.5 font-archivo text-xs uppercase bg-maxi-cyan px-3.5 py-2 border-3 border-maxi-dark shadow-brutal-sm hover:shadow-none translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded-lg"
          >
            <Bone className="w-4 h-4 text-black" />
            <span>SERVICIOS</span>
          </motion.a>

          <motion.a
            href="#pacientes"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => playPop()}
            className="hidden md:inline-flex items-center gap-1.5 font-archivo text-xs uppercase bg-maxi-green px-3.5 py-2 border-3 border-maxi-dark shadow-brutal-sm hover:shadow-none translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded-lg"
          >
            <Star className="w-4 h-4 text-black fill-black" />
            <span>PACIENTES VIP</span>
          </motion.a>

          {/* Booking CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenBooking}
            className="bg-maxi-pink text-white font-archivo text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 border-3 sm:border-4 border-maxi-dark shadow-brutal-sm sm:shadow-brutal hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded-lg sm:rounded-xl flex items-center gap-1.5 sm:gap-2 uppercase tracking-wide whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-maxi-yellow animate-spin-slow flex-shrink-0" />
            <span>AGENDAR CITA</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
};
