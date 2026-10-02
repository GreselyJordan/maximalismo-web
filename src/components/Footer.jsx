import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { playPop, playBark } from '../utils/sound';
import { Heart, Instagram, Music, MessageCircle, ArrowUp, PawPrint, Zap, Sparkles, Clock, Globe } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-maxi-dark text-white border-t-4 border-black relative overflow-hidden">
      {/* Bottom Marquee strip */}
      <div className="bg-maxi-yellow text-maxi-dark border-b-4 border-black py-2">
        <Marquee speed={50} gradient={false}>
          <div className="flex items-center gap-6 font-mono font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-widest">
            <span className="flex items-center gap-2"><PawPrint className="w-4 h-4 fill-black" /> NINGÚN ANIMAL FUE MOLESTADO EN LA CREACIÓN DE ESTA PÁGINA</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 fill-black" /> PREMIOS 100% LIBRES DE GRANO</span>
            <span className="flex items-center gap-2"><Heart className="w-4 h-4 fill-red-500 text-red-500" /> AMOR ANIMAL SIN LÍMITES</span>
            <span className="flex items-center gap-2"><PawPrint className="w-4 h-4 fill-black" /> GATOS Y PERROS VIVIENDO EN PAZ</span>
            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-black" /> CLÍNICA VETERINARIA MAXIMALISTA</span>
          </div>
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 items-start">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4 md:col-span-2">
            <div className="inline-flex items-center gap-2 bg-maxi-pink px-3.5 sm:px-4 py-2 border-3 border-white shadow-brutal-yellow rounded-xl transform -rotate-1">
              <h2 className="font-dela text-lg sm:text-xl tracking-tight text-white flex items-center gap-2">
                <span>CHAOS<span className="text-maxi-yellow">VET</span></span>
                <PawPrint className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
              </h2>
            </div>
            <p className="font-body text-gray-300 font-bold text-sm sm:text-base max-w-md">
              Rompemos con las veterinarias blancas y aburridas que le dan miedo a tus mascotas. Aquí todo es alegría, medicina de punta, snacks premium y mimos ilimitados.
            </p>

            {/* Retro Hit Counter */}
            <div className="pt-2 flex items-center gap-3">
              <span className="font-mono text-xs uppercase text-maxi-cyan font-bold">VISITANTES:</span>
              <div className="flex gap-1 font-mono font-black text-sm bg-black border-2 border-maxi-green px-2 py-1 rounded text-maxi-green">
                <span className="bg-gray-800 px-1">0</span>
                <span className="bg-gray-800 px-1">8</span>
                <span className="bg-gray-800 px-1">4</span>
                <span className="bg-gray-800 px-1">9</span>
                <span className="bg-gray-800 px-1">2</span>
              </div>
            </div>
          </div>

          {/* Col 2: Horarios */}
          <div className="bg-gray-900 border-3 border-gray-700 p-4 sm:p-5 rounded-2xl shadow-brutal-sm">
            <h4 className="font-dela text-sm sm:text-base text-maxi-yellow mb-3 uppercase tracking-tight flex items-center gap-2">
              <Clock className="w-4 h-4 text-maxi-yellow stroke-[2.5]" />
              <span>HORARIOS</span>
            </h4>
            <ul className="space-y-2 font-mono text-xs font-bold text-gray-300">
              <li className="flex justify-between border-b border-gray-800 pb-1">
                <span>LUNES - VIERNES:</span>
                <span className="text-maxi-cyan">08:00 - 20:00</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-1">
                <span>SÁBADOS:</span>
                <span className="text-maxi-cyan">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-1">
                <span>DOMINGOS:</span>
                <span className="text-maxi-cyan">10:00 - 15:00</span>
              </li>
              <li className="flex justify-between pt-1 text-maxi-pink font-black">
                <span>URGENCIAS:</span>
                <span>24/7 SIEMPRE</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Back to Top */}
          <div className="space-y-4">
            <h4 className="font-dela text-sm sm:text-base text-maxi-cyan uppercase tracking-tight flex items-center gap-2">
              <Globe className="w-4 h-4 text-maxi-cyan stroke-[2.5]" />
              <span>REDES Y CONTACTO</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              <motion.a
                whileHover={{ scale: 1.1, rotate: -3 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-maxi-pink text-white p-3 border-2 border-white rounded-xl shadow-brutal-sm flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="bg-maxi-cyan text-black p-3 border-2 border-white rounded-xl shadow-brutal-sm flex items-center justify-center"
              >
                <Music className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -3 }}
                whileTap={{ scale: 0.9 }}
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="bg-maxi-green text-black p-3 border-2 border-white rounded-xl shadow-brutal-sm flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Back to top button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="mt-4 w-full bg-maxi-yellow text-maxi-dark font-archivo text-xs py-2.5 px-4 border-2 border-black rounded-xl shadow-brutal-sm flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <ArrowUp className="w-4 h-4" />
              <span>SUBIR AL CIELO PERRUNO</span>
            </motion.button>
          </div>
        </div>

        {/* Retro Copyright Badge */}
        <div className="mt-12 pt-6 border-t-2 border-gray-800 text-center font-mono text-xs text-gray-500">
          <p>© 2026 CHAOS VET CLINIC. Todos los derechos reservados a los michis y perritos del mundo.</p>
        </div>
      </div>
    </footer>
  );
};
