import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-anthracite/80 border-t border-white/10 py-8 sm:py-12 mt-16">
      <div className="container-responsive">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gold">Diyafa</span>
              <span className="text-white"> Invest</span>
            </h3>
            <p className="text-gray-400 text-sm">
              L'écosystème immobilier haute performance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold mb-4 font-semibold">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/expertises" className="hover:text-gold transition">Expertises</Link></li>
              <li><Link to="/pack-investisseur" className="hover:text-gold transition">Pack Investisseur</Link></li>
              <li><Link to="/simulator" className="hover:text-gold transition">Simulateur</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold mb-4 font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>contact@diyafainvest.ma</li>
              <li>+212 5 22 12 34 56</li>
              <li>Casablanca, Maroc</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gold mb-4 font-semibold">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-gold transition">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-500 text-xs">
          © 2024 Diyafa Invest. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}