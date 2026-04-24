import { motion } from 'framer-motion';
import NeoButton from '../ui/NeoButton';

export default function HeroSection() {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulateur');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite/80 via-anthracite/50 to-anthracite z-10" />
        <img
          src="https://images.unsplash.com/photo-1575361202575-8c9f6b4b7e9c?w=1200"
          alt="Casablanca"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="container-responsive relative z-20 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center sm:text-left max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-gold">Diyafa</span>
            <span className="text-white"> Invest</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            L'écosystème immobilier haute performance.
            De l'acquisition à l'exploitation, votre rentabilité est notre unique priorité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <NeoButton onClick={scrollToSimulator} size="lg">
              Estimer mon rendement →
            </NeoButton>
            <NeoButton variant="dark" size="lg">
              Découvrir nos pôles
            </NeoButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}