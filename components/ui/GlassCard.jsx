import { motion } from 'framer-motion';

export default function GlassCard({ 
  children, 
  title,
  icon,
  className = '',
  hover = true,
  delay = 0
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, transition: { duration: 0.2 } } : {}}
      className={`
        glass-effect p-5 sm:p-6 md:p-8 
        ${hover && 'hover:shadow-2xl hover:border-gold/30 transition-all duration-300'}
        ${className}
      `}
    >
      {icon && (
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gold">
          {title}
        </h3>
      )}
      <div className="text-sm sm:text-base text-gray-300 space-y-3">
        {children}
      </div>
    </motion.div>
  );
}