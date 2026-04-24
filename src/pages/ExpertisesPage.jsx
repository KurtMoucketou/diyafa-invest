import { motion } from 'framer-motion';
import FuturisticBackground from '../components/ui/FuturisticBackground';

const expertises = [
  {
    id: 1,
    title: 'Pôle Investissement',
    icon: '📈',
    description: 'Stratégie & Acquisition',
    fullDescription: 'Propulsé par Delta Elite Immo, notre pôle investissement vous accompagne dans toutes les étapes de votre acquisition immobilière. Nous réalisons une analyse approfondie du marché casablancais pour identifier les opportunités à fort potentiel.',
    features: [
      'Chasse immobilière personnalisée pour la diaspora',
      'Arbitrage patrimonial et optimisation fiscale',
      'Négociation premium et due diligence',
      'Accès aux biens exclusifs hors marché'
    ],
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800'
  },
  {
    id: 2,
    title: 'Pôle Gestion locative',
    icon: '🏢',
    description: 'Performance & Sérénité',
    fullDescription: 'Notre gestion locative combine technologie et expertise humaine. Un algorithme de Yield Management optimise vos revenus en temps réel, tandis que notre équipe assure une relation locative sereine.',
    features: [
      'Location longue durée Premium',
      'Conciergerie short-term optimisée par IA',
      'Catalogue des biens interactif',
      'Rentabilité garantie avec reporting mensuel'
    ],
    image: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800'
  },
  {
    id: 3,
    title: 'Pôle Opérationnel',
    icon: '🔧',
    description: 'Logistique d\'excellence',
    fullDescription: 'Une équipe dédiée assure la maintenance et l\'entretien de vos biens selon des standards hôteliers. La domotique et les capteurs intelligents garantissent sécurité et confort.',
    features: [
      'Maintenance prédictive et Smart Home',
      'Housekeeping aux standards hôteliers',
      'Sécurité 24/7 et capteurs de nuisances',
      'Interventions techniques sous 2h'
    ],
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800'
  },
  {
    id: 4,
    title: 'Pôle Expérience',
    icon: '✨',
    description: 'L\'Art de Recevoir',
    fullDescription: 'Offrez à vos voyageurs une expérience inoubliable. Notre conciergerie privée et notre service personnalisé font de chaque séjour un moment d\'exception.',
    features: [
      'Support 24/7 multilingue',
      'Conciergerie privée (restaurants, activités, transport)',
      'Design d\'intérieur et home staging',
      'Box d\'accueil personnalisée'
    ],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
  }
];

export default function ExpertisesPage() {
  return (
    <div>
      {/* Background futuriste avec titre */}
      <FuturisticBackground 
        title="Nos Expertises"
        subtitle="Une approche globale pour maximiser la performance de votre patrimoine immobilier"
      />

      {/* Contenu principal */}
      <div className="bg-[#1E1E1E] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Liste des expertises */}
          <div className="space-y-20">
            {expertises.map((expertise, index) => (
              <motion.div
                key={expertise.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={expertise.image}
                      alt={expertise.title}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Contenu */}
                <div className="lg:w-1/2">
                  <div className="text-5xl mb-4">{expertise.icon}</div>
                  <h2 className="text-3xl font-bold text-[#D4AF37] mb-2">{expertise.title}</h2>
                  <p className="text-xl text-white mb-4">{expertise.description}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {expertise.fullDescription}
                  </p>
                  <ul className="space-y-3">
                    {expertise.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <span className="text-[#D4AF37] text-xl">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}