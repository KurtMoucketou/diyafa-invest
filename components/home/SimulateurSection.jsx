import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import YieldForm from '../simulator/YieldForm';
import YieldResult from '../simulator/YieldResult';

export default function SimulateurSection() {
  const [result, setResult] = useState(null);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-anthracite to-black" id="simulateur">
      <div className="container-responsive">
        <SectionHeader 
          badge="Simulateur"
          title="Estimez votre rendement"
          subtitle="Découvrez en 2 minutes le potentiel de votre investissement immobilier à Casablanca"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <YieldForm onResult={setResult} />
          {result && <YieldResult result={result} />}
        </div>
      </div>
    </section>
  );
}