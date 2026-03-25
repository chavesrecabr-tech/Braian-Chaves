import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const salesData = [
  { name: "Maria", city: "Lisboa", district: "Lisboa" },
  { name: "Ana", city: "Porto", district: "Porto" },
  { name: "Isabel", city: "Vila Nova de Gaia", district: "Porto" },
  { name: "Joana", city: "Amadora", district: "Lisboa" },
  { name: "Sofia", city: "Braga", district: "Braga" },
  { name: "Beatriz", city: "Funchal", district: "Madeira" },
  { name: "Mariana", city: "Coimbra", district: "Coimbra" },
  { name: "Carolina", city: "Setúbal", district: "Setúbal" },
  { name: "Inês", city: "Almada", district: "Setúbal" },
  { name: "Margarida", city: "Agualva-Cacém", district: "Lisboa" },
  { name: "João", city: "Queluz", district: "Lisboa" },
  { name: "José", city: "Aveiro", district: "Aveiro" },
  { name: "Francisco", city: "Guimarães", district: "Braga" },
  { name: "Tiago", city: "Odivelas", district: "Lisboa" },
  { name: "Diogo", city: "Rio Tinto", district: "Porto" },
  { name: "Pedro", city: "Viseu", district: "Viseu" },
  { name: "Ricardo", city: "Ponta Delgada", district: "Açores" },
  { name: "Miguel", city: "Matosinhos", district: "Porto" },
  { name: "Paulo", city: "Faro", district: "Faro" },
  { name: "Nuno", city: "Évora", district: "Évora" }
];

const SalesNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      
      // Hide after 2 seconds
      setTimeout(() => {
        setIsVisible(false);
        // Move to next index after it hides
        setCurrentIndex((prev) => (prev + 1) % salesData.length);
      }, 2000);
    };

    // Initial delay before first appearance
    const initialTimeout = setTimeout(showNotification, 3000);

    // Set up the interval for subsequent appearances
    // 2s visible + 6s hidden = 8s total cycle
    const interval = setInterval(showNotification, 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const currentSale = salesData[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, scale: 0.9 }}
          className="fixed bottom-8 left-4 z-[100] md:left-8"
        >
          <div className="bg-[#4ade80] text-black px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-black/10 min-w-[280px]">
            <div className="text-xl">✅</div>
            <div className="flex flex-col">
              <p className="text-sm font-bold leading-tight">
                {currentSale.name} acaba de comprar este produto
              </p>
              <p className="text-xs opacity-80">
                {currentSale.city}, {currentSale.district}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SalesNotification;
