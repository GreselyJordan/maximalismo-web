import React from 'react';
import { motion } from 'framer-motion';
import { playBark, playMeow, playBoing } from '../utils/sound';
import { Star, Camera, PawPrint, Trophy, Crown, Sparkles } from 'lucide-react';

const patients = [
  {
    id: 1,
    name: 'Rocky Balboa',
    species: 'Bulldog Francés',
    age: '3 años',
    quote: '"Me dieron 3 galletas después de la inyección. Volvería a enfermarme solo por los premios."',
    stamp: 'CAMPEÓN DEL DOLOR',
    stampIcon: Trophy,
    stampBg: 'bg-maxi-yellow text-black',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80',
    rotate: 'sm:-rotate-3',
    sound: playBark,
  },
  {
    id: 2,
    name: 'Señor Bigotes',
    species: 'Gato Persa',
    age: '5 años',
    quote: '"Intenté arañar a 2 doctores pero me hablaron con voz tierna y terminé ronroneando. Una vergüenza."',
    stamp: 'MICHI SUPREMO',
    stampIcon: Crown,
    stampBg: 'bg-maxi-pink text-white',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80',
    rotate: 'sm:rotate-4',
    sound: playMeow,
  },
  {
    id: 3,
    name: 'Chispita',
    species: 'Golden Retriever',
    age: '1 año',
    quote: '"¡EL MEJOR LUGAR! El termómetro estuvo frío pero todos me dijeron que soy una buena chica."',
    stamp: '10/10 BUENA CHICA',
    stampIcon: Star,
    stampBg: 'bg-maxi-green text-black',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80',
    rotate: 'sm:-rotate-2',
    sound: playBark,
  },
  {
    id: 4,
    name: 'Don Pepito',
    species: 'Hamster Ruso',
    age: '8 meses',
    quote: '"Chequeo dental en 3 minutos. Me regalaron una semilla de girasol gigante. 100% recomendado."',
    stamp: 'MICRO PACIENTE',
    stampIcon: Sparkles,
    stampBg: 'bg-maxi-cyan text-black',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=500&q=80',
    rotate: 'sm:rotate-3',
    sound: playBoing,
  },
];

export const PetHallOfFame = () => {
  return (
    <section id="pacientes" className="py-20 px-4 bg-maxi-cream border-y-4 border-maxi-dark relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="bg-maxi-pink text-white px-3 py-1 font-mono font-bold text-xs inline-flex items-center gap-1.5 rounded-md border-2 border-black shadow-brutal-sm uppercase mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>POLAROID WALL OF FAME</span>
            </div>
            <h2 className="font-dela text-xl sm:text-3xl md:text-5xl text-maxi-dark uppercase tracking-tight leading-snug">
              PACIENTES <span className="text-maxi-purple">ESTRELLA</span> DEL MES
            </h2>
            <p className="font-body text-gray-700 font-bold text-sm sm:text-base mt-2">
              Haz clic sobre cualquier foto para escuchar la reacción de cada paciente.
            </p>
          </div>

          <div className="bg-maxi-yellow border-3 border-maxi-dark p-3 rounded-xl shadow-brutal flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-maxi-pink border-2 border-black flex items-center justify-center text-white">
              <PawPrint className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
            </div>
            <div className="font-mono text-xs font-bold leading-tight">
              <p>MÁS DE 12,450</p>
              <p className="text-maxi-pink uppercase font-black">PACIENTES FELICES</p>
            </div>
          </div>
        </div>

        {/* Polaroids Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {patients.map((pet) => {
            const StampIcon = pet.stampIcon;
            return (
              <motion.div
                key={pet.id}
                whileHover={{ scale: 1.04, rotate: 0, y: -6 }}
                whileTap={{ scale: 0.96 }}
                onClick={pet.sound}
                className={`cursor-pointer bg-white border-3 sm:border-4 border-maxi-dark p-3.5 sm:p-4 shadow-brutal sm:shadow-brutal-lg transition-transform rotate-0 ${pet.rotate} rounded-xl relative tape-effect`}
              >
                {/* Photo */}
                <div className="w-full h-48 sm:h-56 bg-gray-200 border-2 sm:border-3 border-maxi-dark rounded-lg overflow-hidden relative mb-3 sm:mb-4">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover filter contrast-105"
                    loading="lazy"
                  />
                  {/* Stamp */}
                  <div className={`absolute bottom-2 right-2 ${pet.stampBg} border-2 border-maxi-dark font-archivo text-[10px] px-2 py-0.5 rounded shadow-brutal-sm flex items-center gap-1`}>
                    <StampIcon className="w-3 h-3 stroke-[2.5]" />
                    <span>{pet.stamp}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-dela text-base text-maxi-dark">{pet.name}</h3>
                    <span className="font-mono text-xs text-gray-600 font-bold">{pet.age}</span>
                  </div>
                  <p className="text-xs font-bold text-maxi-purple">{pet.species}</p>
                  <p className="font-body text-xs text-gray-800 italic pt-2 border-t-2 border-dashed border-gray-300">
                    {pet.quote}
                  </p>
                </div>

                <div className="mt-3 flex justify-center">
                  <div className="flex gap-1 bg-black px-2.5 py-1 rounded-full border border-black">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-maxi-yellow fill-maxi-yellow" />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
