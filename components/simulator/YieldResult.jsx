import { motion } from 'framer-motion';
import NeoButton from '../ui/NeoButton';

export default function YieldResult({ result }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-effect p-6 space-y-4"
    >
      <h3 className="text-xl font-bold text-gold text-center">Votre estimation</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{result.grossYield}%</div>
          <div className="text-xs text-gray-400">Rendement brut</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gold">{result.netYield}%</div>
          <div className="text-xs text-gray-400">Rendement net</div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Revenu mensuel</span>
          <span className="text-gold font-bold">{result.monthlyRevenue.toLocaleString()} MAD</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span className="text-gray-400">Revenu annuel</span>
          <span className="text-gold font-bold">{result.annualRevenue.toLocaleString()} MAD</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span className="text-gray-400">Taux d'occupation</span>
          <span className="text-gold font-bold">{result.occupancy}%</span>
        </div>
      </div>

      <div className="bg-gold/10 rounded-lg p-3">
        <p className="text-sm text-center text-gold">{result.recommendation}</p>
      </div>

      <NeoButton variant="gold" fullWidth size="sm">
        Être rappelé par un expert
      </NeoButton>
    </motion.div>
  );
}