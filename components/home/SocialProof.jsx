import Counter from '../ui/Counter';
import { motion } from 'framer-motion';

export default function SocialProof() {
  const stats = [
    { end: 150, suffix: 'M+', label: 'DH gérés', delay: 0 },
    { end: 5000, suffix: '+', label: 'Voyageurs accueillis', delay: 0.2 },
    { end: 98, suffix: '%', label: "Taux d'occupation", delay: 0.4 },
    { end: 24, suffix: '/7', label: 'Support dédié', delay: 0.6 },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="container-responsive">
        <div className="glass-effect rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Counter end={stat.end} suffix={stat.suffix} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}