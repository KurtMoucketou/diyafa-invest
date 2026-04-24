// src/components/layout/MobileMenu.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/catalogue', label: 'Catalogue' },
    { path: '/expertises', label: 'Expertises' },
    { path: '/pack-investisseur', label: 'Pack Investisseur' },
    { path: '/simulator', label: 'Simulateur' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Empêcher le scroll quand le menu est ouvert
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="md:hidden">
      {/* Bouton burger */}
      <button
        onClick={toggleMenu}
        className="relative z-50 w-10 h-10 focus:outline-none"
        aria-label="Menu"
      >
        <div className="absolute w-6 h-0.5 bg-[#C6A43F] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/3 transition-all duration-300"
          style={{ transform: isOpen ? 'rotate(45deg) translateY(8px)' : '' }} 
        />
        <div className="absolute w-6 h-0.5 bg-[#C6A43F] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 transition-all duration-300"
          style={{ opacity: isOpen ? 0 : 1 }}
        />
        <div className="absolute w-6 h-0.5 bg-[#C6A43F] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-2/3 transition-all duration-300"
          style={{ transform: isOpen ? 'rotate(-45deg) translateY(-8px)' : '' }}
        />
      </button>

      {/* Menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fond sombre */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              onClick={closeMenu}
            />
            
            {/* Menu latéral */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-[#1E1E1E] to-[#0a0a2a] z-40 p-6 shadow-2xl"
            >
              {/* Logo dans le menu */}
              <div className="mb-8 pt-8">
                <img src="/Logo-removebg-preview.png" alt="Logo" className="w-24 mx-auto" />
              </div>

              {/* Navigation mobile */}
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className="block py-3 px-4 text-white text-lg hover:text-[#C6A43F] hover:bg-white/5 rounded-xl transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Lien Espace pro */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="block py-3 px-4 text-[#C6A43F] text-lg hover:bg-[#C6A43F]/10 rounded-xl transition-all duration-300 font-semibold"
                  >
                    🔑 Espace pro
                  </Link>
                </motion.div>
              </nav>

              {/* Contact rapide */}
              <div className="absolute bottom-8 left-0 right-0 text-center px-6">
                <hr className="border-white/10 mb-4" />
                <p className="text-gray-500 text-xs">
                  contact@diyafainvest.ma<br />
                  +212 5 22 12 34 56
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}