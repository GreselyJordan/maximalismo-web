import React from 'react';
import Marquee from 'react-fast-marquee';
import { Bone, Cat, Scissors, Zap, Syringe, Star, Sparkles, PawPrint } from 'lucide-react';

export const MarqueeBanners = () => {
  return (
    <div className="relative my-8 sm:my-14 overflow-hidden z-10 space-y-4 sm:space-y-6 py-3 sm:py-6">
      {/* Tape Strip 1: Yellow/Black Diagonal */}
      <div className="bg-maxi-yellow border-y-3 sm:border-y-4 border-maxi-dark py-2.5 sm:py-4 transform -rotate-1 shadow-brutal w-[108%] -ml-[4%]">
        <Marquee speed={45} gradient={false}>
          <div className="flex items-center gap-6 sm:gap-10 font-dela text-xs sm:text-sm md:text-base text-maxi-dark tracking-normal uppercase">
            <span className="flex items-center gap-2 sm:gap-2.5"><Bone className="w-4 h-4 sm:w-5 sm:h-5 text-black" /> CIRUGÍA & CUIDADOS CRÍTICOS</span>
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-maxi-pink text-maxi-pink flex-shrink-0" />
            <span className="flex items-center gap-2 sm:gap-2.5"><Cat className="w-4 h-4 sm:w-5 sm:h-5 text-black" /> HOTEL PARA GATOS 5 ESTRELLAS</span>
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-maxi-pink text-maxi-pink flex-shrink-0" />
            <span className="flex items-center gap-2 sm:gap-2.5"><Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-black" /> SPA, CORTE & GUAPURA CANINA</span>
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-maxi-pink text-maxi-pink flex-shrink-0" />
            <span className="flex items-center gap-2 sm:gap-2.5"><Zap className="w-4 h-4 sm:w-5 sm:h-5 text-black fill-black" /> URGENCIAS SIN CITA PREVIA</span>
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-maxi-pink text-maxi-pink flex-shrink-0" />
            <span className="flex items-center gap-2 sm:gap-2.5"><Syringe className="w-4 h-4 sm:w-5 sm:h-5 text-black" /> VACUNAS Y DESPARASITACIÓN EXPRESS</span>
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-maxi-pink text-maxi-pink flex-shrink-0" />
          </div>
        </Marquee>
      </div>

      {/* Tape Strip 2: Hot Pink Reversed */}
      <div className="bg-maxi-pink border-y-3 sm:border-y-4 border-maxi-dark py-2.5 sm:py-4 transform rotate-1 text-white shadow-brutal w-[108%] -ml-[4%]">
        <Marquee speed={60} direction="right" gradient={false}>
          <div className="flex items-center gap-6 sm:gap-10 font-archivo text-xs sm:text-base md:text-lg tracking-wider uppercase">
            <span className="flex items-center gap-2 sm:gap-2.5"><Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-maxi-yellow" /> NO ACEPTAMOS DRAMA, SOLO MASCOTAS CONSENTIDAS</span>
            <PawPrint className="w-4 h-4 sm:w-5 sm:h-5 text-maxi-yellow fill-maxi-yellow flex-shrink-0" />
            <span className="flex items-center gap-2 sm:gap-2.5"><Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-maxi-yellow" /> PREMIOS ILIMITADOS EN CONSULTA</span>
            <PawPrint className="w-4 h-4 sm:w-5 sm:h-5 text-maxi-yellow fill-maxi-yellow flex-shrink-0" />
            <span className="flex items-center gap-2 sm:gap-2.5"><Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-maxi-yellow" /> EQUIPO MÉDICO DE ALTA PRECISIÓN</span>
            <PawPrint className="w-4 h-4 sm:w-5 sm:h-5 text-maxi-yellow fill-maxi-yellow flex-shrink-0" />
            <span className="flex items-center gap-2 sm:gap-2.5"><Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-maxi-yellow" /> +10,000 COLITAS MOVIÉNDOSE FELICES</span>
            <PawPrint className="w-4 h-4 sm:w-5 sm:h-5 text-maxi-yellow fill-maxi-yellow flex-shrink-0" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};
