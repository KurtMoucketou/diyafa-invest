import HeroCarousel from './HeroCarousel';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulateur');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carrousel d'images */}
      <HeroCarousel />

      {/* Icônes flottantes (immobilier) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl animate-float opacity-30">
          🏠
        </div>
        <div className="absolute top-40 right-20 text-3xl animate-float opacity-25" style={{ animationDelay: '1s' }}>
          🔑
        </div>
        <div className="absolute bottom-40 left-20 text-5xl animate-float opacity-20" style={{ animationDelay: '2s' }}>
          🏢
        </div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
          📈
        </div>
        <div className="absolute top-1/3 left-1/4 text-2xl animate-float opacity-25" style={{ animationDelay: '1.5s' }}>
          ✨
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm bg-white/30 backdrop-blur-sm border border-[#C6A43F]/30 text-[#030314] rounded-full mb-6 shadow-sm">
              ✨ Excellence immobilière ✨
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="text-[#C6A43F] drop-shadow-md">Diyafa</span>
            <span className="text-[#030314] drop-shadow-md"> Invest</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-[#030314] mb-8 leading-relaxed drop-shadow-sm"
          >
            L'écosystème immobilier haute performance.
            <br />
            De l'acquisition à l'exploitation, votre rentabilité est notre priorité.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={scrollToSimulator}
              className="group bg-[#C6A43F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#A88B35] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 mx-auto sm:mx-0"
            >
              <span>Estimer mon rendement</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="bg-white/40 backdrop-blur-sm text-[#2C2C2C] px-8 py-4 rounded-xl font-semibold border-2 border-[#C6A43F]/40 hover:bg-white/60 transition-all duration-300">
              Découvrir nos pôles
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}