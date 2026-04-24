import { useState, useEffect, useRef } from 'react';

function Counter({ end, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-[#D4AF37]">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-gray-400 mt-2">{label}</div>
    </div>
  );
}

export default function SocialProof() {
  const stats = [
    { end: 150, suffix: 'M+', label: 'DH gérés' },
    { end: 5000, suffix: '+', label: 'Voyageurs accueillis' },
    { end: 98, suffix: '%', label: "Taux d'occupation" },
    { end: 24, suffix: '/7', label: 'Support dédié' },
  ];

  return (
    <section className="py-16">
      <div className="container-responsive">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <Counter key={idx} end={stat.end} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}