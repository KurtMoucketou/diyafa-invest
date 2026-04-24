import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('FR');

  const toggleLang = () => {
    setLang(lang === 'FR' ? 'EN' : 'FR');
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleLang}
      className="px-3 py-1 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-gold/20 transition"
    >
      {lang}
    </motion.button>
  );
}