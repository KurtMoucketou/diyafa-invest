export default function NeoButton({ 
  children, 
  onClick, 
  variant = 'gold',
  size = 'md',
  fullWidth = false 
}) {
  const variants = {
    gold: 'bg-gradient-to-br from-[#D4AF37] to-[#B8960C] text-[#1E1E1E]',
    dark: 'bg-gradient-to-br from-[#1E1E1E] to-[#4A4A4A] text-white',
    electric: 'bg-gradient-to-br from-[#00B4D8] to-[#0066CC] text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`
        rounded-xl font-semibold
        shadow-[8px_8px_16px_rgba(0,0,0,0.2),_-8px_-8px_16px_rgba(255,255,255,0.05)]
        hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),_-4px_-4px_8px_rgba(255,255,255,0.05)]
        transition-all duration-200
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </button>
  );
}