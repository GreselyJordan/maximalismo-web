import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeBanners } from './components/MarqueeBanners';
import { ServicesSection } from './components/ServicesSection';
import { PetHallOfFame } from './components/PetHallOfFame';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Phone, Sparkles, Siren } from 'lucide-react';
import { motion } from 'framer-motion';
import { playBark } from './utils/sound';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-maxi-pink selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <MarqueeBanners />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <PetHallOfFame />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedService}
      />

      {/* Floating Emergency Action Button for quick reach */}
      <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        whileHover={{ scale: 1.1, rotate: 4 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          playBark();
          handleOpenBooking('Urgencia 24/7');
        }}
        className="fixed bottom-6 right-6 z-40 bg-maxi-pink text-white border-4 border-maxi-dark p-3.5 rounded-2xl shadow-brutal-xl cursor-pointer flex items-center gap-2.5 group"
      >
        <div className="w-9 h-9 rounded-xl bg-maxi-yellow border-2 border-black flex items-center justify-center animate-bounce text-black">
          <Siren className="w-5 h-5 stroke-[2.5]" />
        </div>
        <div className="font-archivo text-xs uppercase leading-tight">
          <p className="text-maxi-yellow">¿EMERGENCIA?</p>
          <p>TOCA AQUÍ</p>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
