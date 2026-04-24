import GlassCard from '../ui/GlassCard';
import SectionHeader from '../ui/SectionHeader';

const expertiseData = [
  {
    id: 1,
    title: 'Pôle Investissement',
    icon: '📈',
    description: 'Stratégie & Acquisition propulsée par Delta Elite Immo.',
    details: ['Chasse immobilière', 'Arbitrage patrimonial', 'Négociation premium']
  },
  {
    id: 2,
    title: 'Pôle Gestion locative',
    icon: '🏢',
    description: 'Performance & Sérénité. Location Premium optimisée par IA.',
    details: ['Yield Management', 'Catalogue biens interactif', 'Rentabilité garantie']
  },
  {
    id: 3,
    title: 'Pôle Opérationnel',
    icon: '🔧',
    description: 'Logistique d\'excellence pour une expérience sans faille.',
    details: ['Maintenance Smart Home', 'Housekeeping hôtelier', 'Sécurité & capteurs']
  },
  {
    id: 4,
    title: 'Pôle Expérience',
    icon: '✨',
    description: 'L\'Art de Recevoir. Support 24/7 multilingue.',
    details: ['Support 24/7', 'Conciergerie privée', 'Design & Home staging']
  }
];

export default function ExpertiseGrid() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-anthracite/50" id="expertises">
      <div className="container-responsive">
        <SectionHeader 
          badge="Notre savoir-faire"
          title="4 pôles d'expertise"
          subtitle="Une chaîne de valeur complète pour maximiser votre patrimoine immobilier"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {expertiseData.map((item, index) => (
            <GlassCard key={item.id} title={item.title} icon={item.icon} hover delay={index * 0.1}>
              <p className="text-gray-300">{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-gold/80">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-gold">•</span> {detail}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}