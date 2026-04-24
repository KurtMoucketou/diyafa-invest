import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import NeoButton from '../ui/NeoButton';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-anthracite/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}
    `}>
      <div className="container-responsive py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl sm:text-3xl font-bold">
          <span className="text-gold">Diyafa</span>
          <span className="text-white"> Invest</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/expertises" className="text-white hover:text-gold transition">Expertises</Link>
          <Link to="/pack-investisseur" className="text-white hover:text-gold transition">Pack Investisseur</Link>
          <Link to="/simulateur" className="text-white hover:text-gold transition">Simulateur</Link>
          <LanguageSwitcher />
          <Link to="/login">
            <NeoButton variant="dark" size="sm">
              Espace pro
            </NeoButton>
          </Link>
        </nav>

        {/* Mobile menu */}
        <div className="lg:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}