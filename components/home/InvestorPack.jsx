import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import NeoButton from '../ui/NeoButton';
import GlassCard from '../ui/GlassCard';

const steps = [
  { step: 1, title: 'Recherche', description: 'Sélection des biens à fort potentiel' },
  { step: 2, title: 'Aménagement', description: 'Design & home staging premium' },
  { step: 3, title: 'Exploitation', description: 'Gestion locative optimisée' },
  { step: 4, title: 'Optimisation IA', description: 'Yield management dynamique' },
];

export default function InvestorPack() {
  return (
    <section className="py-16 sm:py-20 md:py-24" id="pack-investisseur">
      <div className="container-responsive">
        <SectionHeader 
          badge="Clé en main"
          title="Pack Investisseur"
          subtitle="Une solution complète de l'acquisition à l'exploitation"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Steps */}
          <div className="space-y-4">
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 glass-effect p-4"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xl">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-gold">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - CTA */}
          <GlassCard hover={false}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gold mb-4">Rentabilité garantie</h3>
              <p className="text-gray-300 mb-6">
                Notre algorithme d'IA optimise vos revenus en temps réel.
                Performance moyenne : +15% vs marché traditionnel.
              </p>
              <NeoButton fullWidth>
                Demander une étude personnalisée
              </NeoButton>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}