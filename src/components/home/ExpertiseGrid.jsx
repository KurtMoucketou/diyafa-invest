import GlassCard from '../ui/GlassCard';

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
    description: "Logistique d'excellence pour une expérience sans faille.",
    details: ['Maintenance Smart Home', 'Housekeeping hôtelier', 'Sécurité & capteurs']
  },
  {
    id: 4,
    title: 'Pôle Expérience',
    icon: '✨',
    description: "L'Art de Recevoir. Support 24/7 multilingue.",
    details: ['Support 24/7', 'Conciergerie privée', 'Design & Home staging']
  }
];

export default function ExpertiseGrid() {
  return (
    <section className="py-20 bg-[#1E1E1E]/50">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm bg-[#D4AF37]/20 text-[#D4AF37] rounded-full mb-4">
            Notre savoir-faire
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#D4AF37]">4 pôles</span>
            <span className="text-white"> d'expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une chaîne de valeur complète pour maximiser votre patrimoine immobilier
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.map((item) => (
            <GlassCard key={item.id} title={item.title} icon={item.icon}>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <ul className="space-y-2 text-sm text-[#D4AF37]/80">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#D4AF37]">•</span> {detail}
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