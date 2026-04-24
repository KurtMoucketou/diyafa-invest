export default function GlassCard({ children, title, icon }) {
  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2">
      {icon && (
        <div className="text-4xl mb-4">{icon}</div>
      )}
      {title && (
        <h3 className="text-xl font-bold text-[#D4AF37] mb-3">{title}</h3>
      )}
      <div className="text-gray-300">
        {children}
      </div>
    </div>
  );
}