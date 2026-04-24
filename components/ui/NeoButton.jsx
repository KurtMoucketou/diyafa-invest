import { motion } from 'framer-motion';

export default function NeoButton({ 
  children, 
  onClick, 
  variant = 'gold',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
  type = 'button'
}) {
  const variants = {
    gold: 'bg-gradient-to-br from-gold to-gold-matte text-anthracite',
    dark: 'bg-gradient-to-br from-anthracite to-acier text-white',
    electric: 'bg-gradient-to-br from-electric to-blue-600 text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled}
      className={`
        rounded-xl font-semibold
        shadow-neumorphism hover:shadow-neumorphism-sm
        transition-all duration-200 active:shadow-inner
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled && 'opacity-50 cursor-not-allowed'}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}