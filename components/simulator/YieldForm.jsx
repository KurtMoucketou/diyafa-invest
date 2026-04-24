import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import NeoButton from '../ui/NeoButton';

const schema = z.object({
  propertyType: z.string().min(1),
  surface: z.number().min(20).max(500),
  bedrooms: z.number().min(1).max(10),
  neighborhood: z.string().min(1),
  estimatedPrice: z.number().min(500000).max(20000000),
});

export default function YieldForm({ onResult }) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      propertyType: 'apartment',
      surface: 80,
      bedrooms: 2,
      neighborhood: 'gauthier',
      estimatedPrice: 2500000,
    }
  });

  const neighborhoodMultipliers = {
    gauthier: 0.008,
    racine: 0.0075,
    cfc: 0.007,
    bouskoura: 0.006,
    anfa: 0.0078,
  };

  const onSubmit = async (data) => {
    setLoading(true);
    
    // Simulation calcul
    setTimeout(() => {
      const multiplier = neighborhoodMultipliers[data.neighborhood] || 0.007;
      const monthlyRevenue = data.estimatedPrice * multiplier;
      const annualRevenue = monthlyRevenue * 12;
      const grossYield = (annualRevenue / data.estimatedPrice) * 100;
      const netYield = grossYield * 0.85;
      const occupancy = data.neighborhood === 'gauthier' ? 88 : 82;

      const yieldResult = {
        grossYield: grossYield.toFixed(1),
        netYield: netYield.toFixed(1),
        monthlyRevenue: Math.round(monthlyRevenue),
        annualRevenue: Math.round(annualRevenue),
        occupancy,
        recommendation: grossYield > 7 
          ? 'Rentabilité exceptionnelle pour ce quartier' 
          : grossYield > 5 
          ? 'Bon potentiel de rendement' 
          : 'Rentabilité à étudier avec nos experts',
      };
      onResult(yieldResult);
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2 text-gold">Type de bien</label>
        <select 
          {...register('propertyType')}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold focus:outline-none text-white"
        >
          <option value="apartment">Appartement</option>
          <option value="villa">Villa</option>
          <option value="studio">Studio</option>
          <option value="duplex">Duplex</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-gold">Surface (m²)</label>
          <input 
            type="number" 
            {...register('surface', { valueAsNumber: true })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold focus:outline-none text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gold">Chambres</label>
          <input 
            type="number" 
            {...register('bedrooms', { valueAsNumber: true })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold focus:outline-none text-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gold">Quartier</label>
        <select 
          {...register('neighborhood')}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold focus:outline-none text-white"
        >
          <option value="gauthier">Gauthier</option>
          <option value="racine">Racine</option>
          <option value="cfc">CFC</option>
          <option value="bouskoura">Bouskoura</option>
          <option value="anfa">Anfa</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gold">Prix d'achat estimé (MAD)</label>
        <input 
          type="number" 
          {...register('estimatedPrice', { valueAsNumber: true })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold focus:outline-none text-white"
          placeholder="Ex: 2 500 000"
        />
      </div>

      <NeoButton type="submit" fullWidth disabled={loading}>
        {loading ? 'Calcul en cours...' : 'Calculer mon rendement'}
      </NeoButton>
    </form>
  );
}