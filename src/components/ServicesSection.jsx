import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playPop, playBoing } from '../utils/sound';
import { Stethoscope, Scissors, Sparkles, Syringe, HeartPulse, ShieldCheck, Bird, Siren } from 'lucide-react';

const services = [
  {
    id: 'consultas',
    icon: Stethoscope,
    title: 'Consultas Generales & Mimos',
    desc: 'Diagnóstico integral, control de peso, chequeo dental y caricias terapéuticas incluidas.',
    badge: 'MÁS POPULAR',
    badgeColor: 'bg-maxi-pink text-white',
    cardBg: 'bg-white',
    price: '$25 USD',
    details: 'Incluye revisión oftalmológica, auscultación cardíaca, pesado y golosina premium.',
    rotate: 'sm:-rotate-1',
  },
  {
    id: 'vacunacion',
    icon: Syringe,
    title: 'Vacunación & Microchips',
    desc: 'Esquema completo puppy/kitten, refuerzos anuales con microchip con rastreo nacional.',
    badge: '100% SEGURO',
    badgeColor: 'bg-maxi-green text-black',
    cardBg: 'bg-maxi-cyan/15',
    price: '$20 USD',
    details: 'Cartilla de vacunación digitalizada con recordatorios automáticos por WhatsApp.',
    rotate: 'sm:rotate-2',
  },
  {
    id: 'estetica',
    icon: Scissors,
    title: 'Spa, Baño & Estilo Glam',
    desc: 'Corte de raza, deslanado profundo, corte de uñas sin estrés y perfume hipoalergénico.',
    badge: 'DÍA DE SPA',
    badgeColor: 'bg-maxi-yellow text-black',
    cardBg: 'bg-white',
    price: '$35 USD',
    details: 'Usamos agua tibia termoregulada y secadores supersilenciosos que no asustan a tu peludo.',
    rotate: 'sm:-rotate-2',
  },
  {
    id: 'urgencias',
    icon: Siren,
    title: 'Urgencias Médicas 24/7',
    desc: 'Atención crítica inmediata sin cita previa. Especialistas en trauma, shock y toxicología.',
    badge: '24 HORAS',
    badgeColor: 'bg-red-500 text-white animate-pulse',
    cardBg: 'bg-amber-100',
    price: 'PRIORIDAD 1',
    details: 'Laboratorio propio con resultados en 15 minutos y sala de oxígeno presurizada.',
    rotate: 'sm:rotate-1',
  },
  {
    id: 'odontologia',
    icon: Sparkles,
    title: 'Profilaxis Dental Ultrasónica',
    desc: 'Limpieza de sarro profunda para un aliento fresco y dientes sanos hasta la vejez.',
    badge: 'SONRISA TOP',
    badgeColor: 'bg-maxi-purple text-white',
    cardBg: 'bg-white',
    price: '$45 USD',
    details: 'Anestesia inhalatoria inhalada ultra segura con monitor multiparamétrico constante.',
    rotate: 'sm:-rotate-1',
  },
  {
    id: 'exoticos',
    icon: Bird,
    title: 'Especialista en Animales Exóticos',
    desc: 'Conejos, hamsters, loros, reptiles y cuyos atendidos por veterinarios certificados.',
    badge: 'ESPECIALIZADO',
    badgeColor: 'bg-maxi-orange text-white',
    cardBg: 'bg-maxi-green/15',
    price: '$30 USD',
    details: 'Hábitats de recuperación con temperatura y humedad controlada para cada especie.',
    rotate: 'sm:rotate-2',
  },
];

export const ServicesSection = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (srv) => {
    playBoing();
    setSelectedService(selectedService?.id === srv.id ? null : srv);
  };

  return (
    <section id="servicios" className="py-20 px-4 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16 px-2">
        <span className="bg-maxi-yellow border-3 border-maxi-dark shadow-brutal-sm px-3.5 py-1 font-mono font-bold text-xs sm:text-sm uppercase rounded-full inline-block mb-3">
          ⚡ MENÚ DE SERVICIOS MÉDICOS
        </span>
        <h2 className="font-dela text-xl sm:text-3xl md:text-5xl text-maxi-dark uppercase tracking-tight leading-snug">
          ¿QUÉ NECESITA TU <span className="underline decoration-maxi-pink decoration-wavy">MEJOR AMIGO</span> HOY?
        </h2>
        <p className="mt-3 sm:mt-4 text-gray-700 font-bold max-w-xl mx-auto text-sm sm:text-lg">
          Toca cualquiera de las tarjetas para desplegar más información y ver los detalles del cuidado.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((srv) => {
          const isExpanded = selectedService?.id === srv.id;

          return (
            <motion.div
              key={srv.id}
              whileHover={{ scale: 1.02, y: -4 }}
              onClick={() => handleCardClick(srv)}
              className={`cursor-pointer ${srv.cardBg} border-3 sm:border-4 border-maxi-dark p-5 sm:p-6 rounded-2xl shadow-brutal hover:shadow-brutal-lg transition-shadow rotate-0 ${srv.rotate} relative flex flex-col justify-between`}
            >
              {/* Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-maxi-yellow border-3 border-maxi-dark flex items-center justify-center shadow-brutal-sm">
                  <srv.icon className="w-6 h-6 text-black stroke-[2.5]" />
                </div>
                <span className={`${srv.badgeColor} border-2 border-maxi-dark px-3 py-1 font-mono font-black text-xs uppercase shadow-brutal-sm rounded-lg`}>
                  {srv.badge}
                </span>
              </div>

              <div>
                <h3 className="font-dela text-lg sm:text-xl text-maxi-dark mb-2 leading-snug tracking-tight">
                  {srv.title}
                </h3>
                <p className="font-body text-gray-800 text-sm font-semibold mb-4">
                  {srv.desc}
                </p>
              </div>

              {/* Price & Expand button */}
              <div className="pt-4 border-t-3 border-dashed border-maxi-dark flex items-center justify-between mt-auto">
                <span className="font-archivo text-base text-maxi-dark bg-maxi-yellow px-2.5 py-1 border-2 border-maxi-dark rounded-md shadow-brutal-sm">
                  {srv.price}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    playPop();
                    onOpenBooking(srv.title);
                  }}
                  className="bg-maxi-dark text-white font-archivo text-xs px-3 py-1.5 rounded-lg border-2 border-black hover:bg-maxi-pink transition-colors"
                >
                  RESERVAR ➔
                </button>
              </div>

              {/* Smooth Expanded details */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-3 border-t-2 border-black/20 text-xs font-mono font-bold bg-white/95 p-3 rounded-lg border-2 border-black shadow-inner">
                      <p className="text-gray-900 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-maxi-pink flex-shrink-0" />
                        <span>{srv.details}</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
