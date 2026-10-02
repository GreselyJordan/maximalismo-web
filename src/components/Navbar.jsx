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
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogoClick}
          className="cursor-pointer flex items-center gap-2.5 bg-white px-3 py-1.5 border-4 border-maxi-dark shadow-brutal-sm rounded-lg"
        >
          <div className="w-8 h-8 rounded-lg bg-maxi-pink border-2 border-black flex items-center justify-center text-white">
            <PawPrint className="w-5 h-5 fill-white" />
          </div>
          <div>
            <h1 className="font-dela text-lg tracking-tight text-maxi-dark">
              CHAOS<span className="text-maxi-pink">VET</span>
            </h1>
            <p className="text-[10px] font-archivo uppercase text-gray-800 -mt-0.5">
              ¡Cero Estrés • Máximo Amor!
            </p>
          </div>
        </motion.div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#servicios"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => playPop()}
            className="hidden sm:inline-flex items-center gap-1.5 font-archivo text-xs uppercase bg-maxi-cyan px-4 py-2 border-3 border-maxi-dark shadow-brutal-sm hover:shadow-none translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded-lg"
          >
            <Bone className="w-4 h-4 text-black" />
            <span>SERVICIOS</span>
          </motion.a>

          <motion.a
            href="#pacientes"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => playPop()}
            className="hidden sm:inline-flex items-center gap-1.5 font-archivo text-xs uppercase bg-maxi-green px-4 py-2 border-3 border-maxi-dark shadow-brutal-sm hover:shadow-none translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded-lg"
          >
            <Star className="w-4 h-4 text-black fill-black" />
            <span>PACIENTES VIP</span>
          </motion.a>

          {/* Booking CTA Button */}
          <motion.button
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenBooking}
            className="bg-maxi-pink text-white font-display font-black text-sm sm:text-base px-4 py-2 border-4 border-maxi-dark shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all rounded-xl flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-maxi-yellow animate-spin-slow" />
            <span>AGENDAR CITA</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
};
