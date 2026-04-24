// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ExpertisesPage from './pages/ExpertisesPage';
import PackInvestisseurPage from './pages/PackInvestisseurPage';
import SimulatorPage from './pages/SimulatorPage';
import LoginPage from './pages/LoginPage';
import BackgroundAnimations from './components/ui/BackgroundAnimations';
import CataloguePage from './pages/CataloguePage';

function App() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] relative">
      {/* Animations de fond */}
      <BackgroundAnimations />
      
      {/* Contenu principal */}
      <div className="relative z-10">
        <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expertises" element={<ExpertisesPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/pack-investisseur" element={<PackInvestisseurPage />} />
          <Route path="/simulator" element={<SimulatorPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </div>
  );
}

export default App;