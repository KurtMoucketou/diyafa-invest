export default function SectionHeader({ 
  title, 
  subtitle, 
  centered = true,
  badge 
}) {
  return (
    <div className={`
      mb-8 sm:mb-12 md:mb-16
      ${centered ? 'text-center' : 'text-left'}
    `}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs sm:text-sm bg-gold/20 text-gold rounded-full mb-3 sm:mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
        <span className="text-gold">{title.split(' ')[0]}</span>
        <span className="text-white"> {title.split(' ').slice(1).join(' ')}</span>
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}