import { motion } from 'framer-motion';

export default function BackgroundAnimations() {
  // Icônes immobilier qui flottent
  const floatingIcons = [
    { icon: '🏠', delay: 0, duration: 8, size: 'text-4xl', top: '10%', left: '5%' },
    { icon: '🔑', delay: 1, duration: 10, size: 'text-3xl', top: '20%', right: '8%' },
    { icon: '📈', delay: 2, duration: 9, size: 'text-5xl', top: '70%', left: '10%' },
    { icon: '🏢', delay: 0.5, duration: 11, size: 'text-4xl', top: '85%', right: '15%' },
    { icon: '✨', delay: 1.5, duration: 7, size: 'text-3xl', top: '40%', left: '85%' },
    { icon: '🌟', delay: 2.5, duration: 12, size: 'text-2xl', top: '60%', left: '20%' },
    { icon: '💎', delay: 0.8, duration: 9, size: 'text-3xl', top: '15%', left: '75%' },
    { icon: '🏰', delay: 1.8, duration: 10, size: 'text-4xl', top: '50%', right: '25%' },
  ];

  // Particules dorées
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Icônes flottantes */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.size} opacity-15`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 15, 0, -15, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Particules dorées */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            opacity: [0.15, 0.05, 0.15, 0.05, 0.15],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Cercle lumineux rotatif */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#D4AF37]/5"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#D4AF37]/10"
        animate={{
          rotate: -360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}