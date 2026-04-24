export default function FloatingIcons() {
  const icons = ['🏠', '🔑', '📈', '🏢', '✨', '🌟', '💎', '🏰'];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon, i) => (
        <div
          key={i}
          className="absolute text-3xl opacity-10 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
}