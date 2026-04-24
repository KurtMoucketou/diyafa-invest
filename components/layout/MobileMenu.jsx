import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: '/', label: 'Accueil' },
    { to: '/expertises', label: 'Expertises' },
    { to: '/pack-investisseur', label: 'Pack Investisseur' },
    { to: '/simulateur', label: 'Simulateur' },
  ];

  return (
    <div className="lg:hidden">
      {/* Burger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 w-10 h-10 focus:outline-none"
        aria-label="Menu"
      >
        <div className="absolute w-6 h-0.5 bg-gold transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/3 transition-all duration-300"
          style={{ transform: isOpen ? 'rotate(45deg) translateY(0)' : '' }} 
        />
        <div className="absolute w-6 h-0.5 bg-gold transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 transition-all duration-300"
          style={{ opacity: isOpen ? 0 : 1 }}
        />
        <div className="absolute w-6 h-0.5 bg-gold transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-2/3 transition-all duration-300"
          style={{ transform: isOpen ? 'rotate(-45deg) translateY(0)' : '' }}
        />
      </button>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 h-full w-64 bg-anthracite z-40 p-6 shadow-xl"
            >
              <nav className="mt-20 flex flex-col gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-white hover:text-gold transition text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <hr className="border-gray-700" />
                <Link to="/login" className="text-gold hover:text-gold-matte transition text-lg">
                  Espace pro
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}