import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { playFanfare, playPop, playBark, playMeow } from '../utils/sound';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

export const BookingModal = ({ isOpen, onClose, preselectedService }) => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('dog');
  const [dramaLevel, setDramaLevel] = useState(8);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    playFanfare();

    // Fire big celebratory confetti
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#FFE600', '#FF2E93', '#00F0FF', '#00FF66'],
    });

    setTimeout(() => {
      // Allow user to see success state before closing
    }, 1500);
  };

  const handleClose = () => {
    playPop();
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.8, rotate: -3, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.8, rotate: 3, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="bg-white border-4 border-maxi-dark shadow-brutal-xl rounded-3xl max-w-lg w-full p-6 sm:p-8 relative overflow-hidden"
        >
          {/* Top colored strip */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-maxi-pink via-maxi-yellow to-maxi-cyan border-b-3 border-maxi-dark"></div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-10 h-10 bg-maxi-yellow border-3 border-maxi-dark rounded-xl flex items-center justify-center font-black shadow-brutal-sm hover:scale-110 active:scale-95 transition-transform"
          >
            <X className="w-5 h-5 text-black" />
          </button>

          {!isSuccess ? (
            <div>
              <div className="mb-6 pt-2">
                <span className="bg-maxi-green text-black font-mono font-black text-xs px-2.5 py-1 rounded-md border-2 border-black shadow-brutal-sm uppercase">
                  ⚡ FAST BOOKING EXPRESS
                </span>
                <h3 className="font-dela text-xl sm:text-2xl text-maxi-dark mt-2 leading-tight uppercase">
                  RESERVA SU HORA VIP
                </h3>
                <p className="font-body text-xs sm:text-sm text-gray-700 font-bold mt-1">
                  Tu peludo merece el mejor trato médico y cero sustos.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Pet Name */}
                <div>
                  <label className="block font-mono font-black text-xs uppercase mb-1">
                    Nombre del Paciente Peludo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Firulais, Michi, Thor..."
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="w-full bg-yellow-50 border-3 border-maxi-dark p-3 rounded-xl font-body font-bold text-base focus:bg-white focus:outline-none focus:ring-4 focus:ring-maxi-yellow shadow-brutal-sm"
                  />
                </div>

                {/* Species Selector */}
                <div>
                  <label className="block font-mono font-black text-xs uppercase mb-1">
                    Especie:
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'dog', emoji: '🐶', label: 'Perro', sound: playBark },
                      { id: 'cat', emoji: '🐱', label: 'Gato', sound: playMeow },
                      { id: 'bird', emoji: '🦜', label: 'Ave', sound: playPop },
                      { id: 'other', emoji: '🐰', label: 'Otro', sound: playPop },
                    ].map((sp) => (
                      <button
                        key={sp.id}
                        type="button"
                        onClick={() => {
                          setPetType(sp.id);
                          sp.sound();
                        }}
                        className={`py-2 px-1 border-3 border-maxi-dark rounded-xl font-display font-black text-xs flex flex-col items-center gap-1 transition-all
                          ${petType === sp.id ? 'bg-maxi-pink text-white shadow-brutal-sm scale-105' : 'bg-gray-100 hover:bg-gray-200'}`}
                      >
                        <span className="text-xl">{sp.emoji}</span>
                        <span>{sp.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Drama Level Slider */}
                <div className="bg-maxi-cyan/15 border-3 border-maxi-dark p-3 rounded-xl">
                  <div className="flex justify-between font-mono font-black text-xs uppercase mb-2">
                    <span>Nivel de Drama de tu mascota:</span>
                    <span className="bg-maxi-pink text-white px-2 py-0.5 rounded border border-black">
                      {dramaLevel}/10 {dramaLevel >= 8 ? '🔥 DRAMÁTICO TOTAL' : '😎 TRANQUILO'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={dramaLevel}
                    onChange={(e) => setDramaLevel(Number(e.target.value))}
                    className="w-full accent-maxi-pink cursor-pointer"
                  />
                  <p className="text-[11px] text-gray-600 font-bold mt-1">
                    *Adaptamos la dosis de mimos y premios según este nivel.
                  </p>
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-maxi-green text-maxi-dark font-display font-black text-lg py-3.5 border-4 border-maxi-dark shadow-brutal hover:shadow-brutal-lg transition-all rounded-2xl flex items-center justify-center gap-2 mt-4 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-black" />
                  <span>¡CONFIRMAR CITA CON PREMIOS!</span>
                </motion.button>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-maxi-green border-4 border-maxi-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-brutal text-4xl"
              >
                🎉
              </motion.div>
              <h3 className="font-display font-black text-3xl text-maxi-dark uppercase">
                ¡CITA AGENDADA CON ÉXITO!
              </h3>
              <p className="font-body font-bold text-gray-800 mt-2 max-w-sm mx-auto">
                Preparando la sala y las galletas para <strong>{petName || 'tu consentido'}</strong>. ¡Nos vemos pronto!
              </p>
              <button
                onClick={handleClose}
                className="mt-6 bg-maxi-yellow text-black font-display font-black px-6 py-2.5 border-3 border-maxi-dark shadow-brutal rounded-xl hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                CERRAR Y SEGUIR EXPLORANDO
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
