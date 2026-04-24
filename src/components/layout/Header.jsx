import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Définition des liens de navigation
  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/expertises', label: 'Expertises' },
    { path: '/catalogue', label: 'Catalogue' },
    { path: '/pack-investisseur', label: 'Pack Investisseur' },
    { path: '/simulator', label: 'Simulateur' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl sm:text-3xl font-bold">
          <img src="/Logo-removebg-preview.png" alt="Logo" className='w-20 h-25' />
        </Link>

        {/* Section navigation avec effet actif */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span className={`transition-colors duration-300 font-bold ${
                  isActive ? 'text-[#C6A43F]' : 'text-[#010103] hover:text-[#C6A43F]'
                }`}>
                  {link.label}
                </span>
                
                {/* Barre indicatrice en dessous du lien actif */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#C6A43F] rounded-full"></span>
                )}
                
                {/* Effet hover - barre qui apparaît */}
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C6A43F] rounded-full transition-all duration-300 group-hover:w-full"></span>
                )}
              </Link>
            );
          })}
          
          {/* Bouton Espace pro */}
          <Link to="/login">
            <button className="bg-[#C6A43F] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#A88B35] transition shadow-md">
              Espace pro
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}