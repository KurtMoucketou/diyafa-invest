import { motion } from 'framer-motion';
import { useState } from 'react';
import FuturisticBackground from '../components/ui/FuturisticBackground';

const steps = [
  { step: 1, title: 'Recherche', description: 'Sélection des biens à fort potentiel', icon: '🔍' },
  { step: 2, title: 'Acquisition', description: 'Négociation et accompagnement juridique', icon: '📝' },
  { step: 3, title: 'Aménagement', description: 'Design & home staging premium', icon: '🎨' },
  { step: 4, title: 'Exploitation', description: 'Gestion locative optimisée par IA', icon: '⚙️' },
  { step: 5, title: 'Optimisation', description: 'Yield management dynamique', icon: '📊' },
  { step: 6, title: 'Reporting', description: 'Tableau de bord temps réel', icon: '📈' }
];

const benefits = [
  { value: '+15%', label: 'Rendement moyen vs marché' },
  { value: '98%', label: "Taux d'occupation" },
  { value: '24/7', label: 'Support dédié' },
  { value: '100%', label: 'Transparence' }
];

export default function PackInvestisseurPage() {
  const [selectedStep, setSelectedStep] = useState(1);

  return (
    <div>
      {/* Background futuriste avec titre */}
      <FuturisticBackground 
        title="Pack Investisseur"
        subtitle="La solution clé en main pour maximiser votre retour sur investissement immobilier"
      />

      {/* Contenu principal */}
      <div className="bg-[#1E1E1E] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bandeau rentabilité garantie */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-6 py-2 mb-8">
                <span className="text-[#D4AF37] font-semibold">✨ Rentabilité garantie ✨</span>
              </div>
            </motion.div>
          </div>

          {/* Bénéfices */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">{benefit.value}</div>
                <div className="text-sm text-gray-400">{benefit.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Parcours clé en main */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-white">Votre parcours </span>
              <span className="text-[#D4AF37]">clé en main</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:border-[#D4AF37]/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-md bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-2xl p-8 max-w-3xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Prêt à maximiser votre patrimoine ?
              </h3>
              <p className="text-gray-300 mb-6">
                Nos experts vous accompagnent dans votre projet d'investissement.
              </p>
              <button className="bg-[#D4AF37] text-[#1E1E1E] px-8 py-3 rounded-xl font-semibold hover:bg-[#B8960C] transition-all duration-300 transform hover:-translate-y-1">
                Demander une étude personnalisée →
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}