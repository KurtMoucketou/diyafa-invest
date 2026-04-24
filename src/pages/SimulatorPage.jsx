import FuturisticBackground from '../components/ui/FuturisticBackground';

export default function SimulatorPage() {
  return (
    <div>
      {/* Background futuriste avec titre */}
      <FuturisticBackground 
        title="Simulateur de rendement"
        subtitle="Estimez la rentabilité de votre investissement immobilier à Casablanca"
      />

      {/* Contenu principal */}
      <div className="bg-[#1E1E1E] py-20">
        <div className="container-responsive">
          <div className="glass-effect p-8 max-w-2xl mx-auto">
            <div className="text-center">
              {/* Icône de construction */}
              <div className="text-6xl mb-4">🔧</div>
              
              <p className="text-gray-300 text-lg mb-4">
                Formulaire de simulation en cours de développement...
              </p>
              
              <div className="w-16 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full"></div>
              
              <p className="text-[#D4AF37] font-semibold">
                Revenez bientôt pour tester notre simulateur !
              </p>
              
              {/* Barre de progression animée */}
              <div className="mt-6 bg-white/10 rounded-full h-2 overflow-hidden">
                <div className="bg-[#D4AF37] h-2 rounded-full animate-pulse" style={{ width: '65%' }}></div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Développement en cours • 65%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}