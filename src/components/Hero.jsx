import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { StickerPlayground } from './StickerPlayground';
import { Sparkles, Gift, Dog, Cat, HeartPulse } from 'lucide-react';
import { playFanfare, playBoing, playBark, playMeow } from '../utils/sound';

// SVG Component for Animal Paw Print
const PawPrint = ({ className = "w-6 h-6", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Main Pad */}
    <path d="M12 11.5c-2.4 0-4.3 1.9-4.3 4.2 0 1.8 1.1 3.3 2.6 3.9.5.2 1.1.3 1.7.3s1.2-.1 1.7-.3c1.5-.6 2.6-2.1 2.6-3.9 0-2.3-1.9-4.2-4.3-4.2z" />
    {/* 4 Toe Pads */}
    <ellipse cx="6.2" cy="10.8" rx="1.8" ry="2.4" transform="rotate(-18 6.2 10.8)" />
    <ellipse cx="9.8" cy="6.8" rx="1.8" ry="2.5" transform="rotate(-6 9.8 6.8)" />
    <ellipse cx="14.2" cy="6.8" rx="1.8" ry="2.5" transform="rotate(6 14.2 6.8)" />
    <ellipse cx="17.8" cy="10.8" rx="1.8" ry="2.4" transform="rotate(18 17.8 10.8)" />
  </svg>
);

export const Hero = ({ onOpenBooking }) => {
  const triggerConfettiBomb = () => {
    playFanfare();
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FFE600', '#FF2E93', '#00F0FF', '#00FF66', '#8A2BE2'],
    });
  };

  return (
    <section className="relative pt-8 pb-16 px-4 overflow-hidden border-b-4 border-maxi-dark bg-amber-50">
      {/* Repeating Animal Paw Prints Pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="paw-pattern"
            width="84"
            height="84"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(22)"
          >
            {/* Dark paw print */}
            <g fill="#121212" transform="translate(12, 12) scale(0.95)">
              <path d="M12 11.5c-2.4 0-4.3 1.9-4.3 4.2 0 1.8 1.1 3.3 2.6 3.9.5.2 1.1.3 1.7.3s1.2-.1 1.7-.3c1.5-.6 2.6-2.1 2.6-3.9 0-2.3-1.9-4.2-4.3-4.2z" />
              <ellipse cx="6.2" cy="10.8" rx="1.8" ry="2.4" transform="rotate(-18 6.2 10.8)" />
              <ellipse cx="9.8" cy="6.8" rx="1.8" ry="2.5" transform="rotate(-6 9.8 6.8)" />
              <ellipse cx="14.2" cy="6.8" rx="1.8" ry="2.5" transform="rotate(6 14.2 6.8)" />
              <ellipse cx="17.8" cy="10.8" rx="1.8" ry="2.4" transform="rotate(18 17.8 10.8)" />
            </g>
            {/* Offset colored paw print */}
            <g fill="#FF2E93" opacity="0.4" transform="translate(54, 54) scale(0.85) rotate(-28 12 12)">
              <path d="M12 11.5c-2.4 0-4.3 1.9-4.3 4.2 0 1.8 1.1 3.3 2.6 3.9.5.2 1.1.3 1.7.3s1.2-.1 1.7-.3c1.5-.6 2.6-2.1 2.6-3.9 0-2.3-1.9-4.2-4.3-4.2z" />
              <ellipse cx="6.2" cy="10.8" rx="1.8" ry="2.4" transform="rotate(-18 6.2 10.8)" />
              <ellipse cx="9.8" cy="6.8" rx="1.8" ry="2.5" transform="rotate(-6 9.8 6.8)" />
              <ellipse cx="14.2" cy="6.8" rx="1.8" ry="2.5" transform="rotate(6 14.2 6.8)" />
              <ellipse cx="17.8" cy="10.8" rx="1.8" ry="2.4" transform="rotate(18 17.8 10.8)" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#paw-pattern)" />
      </svg>

      {/* Walking Floating Decorative Paws (Trail effect on sides) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Left Trail */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [20, 25, 20] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-8 left-2 sm:left-4 text-maxi-pink/40 w-10 h-10 sm:w-16 sm:h-16"
        >
          <PawPrint className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [5, -5, 5], rotate: [40, 46, 40] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="hidden sm:block absolute top-36 left-16 text-maxi-yellow/60 w-14 h-14"
        >
          <PawPrint className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [-4, 4, -4], rotate: [15, 22, 15] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute top-72 left-2 sm:left-8 text-maxi-cyan/40 w-10 h-10 sm:w-16 sm:h-16"
        >
          <PawPrint className="w-full h-full" />
        </motion.div>

        {/* Right Trail */}
        <motion.div
          animate={{ y: [6, -6, 6], rotate: [-24, -30, -24] }}
          transition={{ duration: 4.3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-2 sm:right-6 text-maxi-green/50 w-10 h-10 sm:w-16 sm:h-16"
        >
          <PawPrint className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [-12, -18, -12] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="hidden sm:block absolute top-44 right-16 text-maxi-pink/40 w-14 h-14"
        >
          <PawPrint className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [4, -4, 4], rotate: [-32, -38, -32] }}
          transition={{ duration: 4.7, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
          className="absolute top-80 right-2 sm:right-8 text-maxi-yellow/60 w-10 h-10 sm:w-16 sm:h-16"
        >
          <PawPrint className="w-full h-full" />
        </motion.div>
      </div>

      {/* Draggable interactive stickers canvas */}
      <StickerPlayground />

      <div className="max-w-7xl mx-auto relative z-10 pt-2 sm:pt-4">
        {/* Giant Maximalist Headline */}
        <div className="text-center relative px-1">
          <h1 className="font-dela text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-maxi-dark select-none uppercase">
            <span className="block hover:text-maxi-pink transition-colors">
              ¡AMOR TOTAL
            </span>
            <span className="relative inline-block my-2">
              <span className="absolute -inset-1.5 sm:-inset-2 bg-maxi-yellow border-3 sm:border-4 border-maxi-dark shadow-brutal-sm sm:shadow-brutal -rotate-1 rounded-xl sm:rounded-2xl -z-10 transform scale-105"></span>
              <span className="text-black px-2.5 sm:px-4">SIN TRAUMAS!</span>
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto font-body text-sm sm:text-base md:text-xl font-bold text-gray-800 leading-relaxed bg-white/85 backdrop-blur-sm border-3 border-maxi-dark p-3.5 sm:p-4 shadow-brutal-sm sm:shadow-brutal rounded-xl sm:rounded-2xl">
            Atención médica de élite para perros, gatos y criaturas exóticas. 
            Música relajante, premios ilimitados y doctores que hablan con voz de consentir.
          </p>
        </div>

        {/* Giant CTAs */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 relative z-30 max-w-md sm:max-w-none mx-auto w-full px-2 sm:px-0">
          <motion.button
            whileHover={{ scale: 1.04, rotate: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              triggerConfettiBomb();
              onOpenBooking();
            }}
            className="w-full sm:w-auto bg-maxi-pink text-white font-archivo text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3.5 sm:py-4 border-3 sm:border-4 border-maxi-dark shadow-brutal hover:shadow-brutal-sm transition-all rounded-xl sm:rounded-2xl flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer group uppercase tracking-wider"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-maxi-yellow group-hover:rotate-45 transition-transform" />
            <span>AGENDAR CITA AHORA</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, rotate: 1 }}
            whileTap={{ scale: 0.96 }}
            onClick={triggerConfettiBomb}
            className="w-full sm:w-auto bg-maxi-green text-maxi-dark font-archivo text-sm sm:text-base md:text-lg px-5 sm:px-6 py-3 sm:py-4 border-3 sm:border-4 border-maxi-dark shadow-brutal hover:shadow-brutal-sm transition-all rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            <span>¡EXPLOSIÓN DE PREMIOS!</span>
          </motion.button>
        </div>

        {/* Feature Cards Showcase */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -6, rotate: -1 }}
            onClick={() => playBark()}
            className="cursor-pointer bg-white border-4 border-maxi-dark p-6 rounded-2xl shadow-brutal transition-all relative overflow-hidden group"
          >
            <div className="w-12 h-12 bg-maxi-yellow border-3 border-maxi-dark rounded-xl flex items-center justify-center shadow-brutal-sm mb-4">
              <Dog className="w-7 h-7 text-black stroke-[2.5]" />
            </div>
            <h3 className="font-dela text-xl mb-1 text-maxi-dark tracking-tight">
              Doggy Zone 100% Feliz
            </h3>
            <p className="font-body text-gray-700 text-sm font-semibold">
              Salas de consulta separadas para evitar estrés canino. Aromaterapia con olor a parque y chuches hipoalergénicas.
            </p>
            <div className="mt-4 font-mono font-bold text-xs text-maxi-pink">
              ▶ Haz clic para escuchar un guau
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -6, rotate: 1 }}
            onClick={() => playMeow()}
            className="cursor-pointer bg-maxi-cyan/20 border-4 border-maxi-dark p-6 rounded-2xl shadow-brutal transition-all relative overflow-hidden group"
          >
            <div className="w-12 h-12 bg-maxi-pink text-white border-3 border-maxi-dark rounded-xl flex items-center justify-center shadow-brutal-sm mb-4">
              <Cat className="w-7 h-7 text-white stroke-[2.5]" />
            </div>
            <h3 className="font-dela text-xl mb-1 text-maxi-dark tracking-tight">
              Cat Friendly Certified
            </h3>
            <p className="font-body text-gray-700 text-sm font-semibold">
              Espacio exclusivo para felinos con repisas elevadas, cero ladridos y veterinarios expertos en el lenguaje michi.
            </p>
            <div className="mt-4 font-mono font-bold text-xs text-maxi-purple">
              ▶ Haz clic para escuchar un miau
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -6, rotate: -2 }}
            onClick={() => playBoing()}
            className="cursor-pointer bg-maxi-yellow/30 border-4 border-maxi-dark p-6 rounded-2xl shadow-brutal transition-all relative overflow-hidden group"
          >
            <div className="w-12 h-12 bg-maxi-green border-3 border-maxi-dark rounded-xl flex items-center justify-center shadow-brutal-sm mb-4">
              <HeartPulse className="w-7 h-7 text-black stroke-[2.5]" />
            </div>
            <h3 className="font-dela text-xl mb-1 text-maxi-dark tracking-tight">
              Quirófano & Guardia 24H
            </h3>
            <p className="font-body text-gray-700 text-sm font-semibold">
              Monitoreo intensivo, ecografía digital, rayos X y banco de sangre para actuar de inmediato en cualquier emergencia.
            </p>
            <div className="mt-4 font-mono font-bold text-xs text-maxi-dark">
              ▶ Equipamiento hospitalario nivel humano
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
