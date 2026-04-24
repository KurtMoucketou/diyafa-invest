import { useAuthStore } from '../store/authStore';
import NeoButton from '../components/ui/NeoButton';
import FinancialChart from '../components/dashboard/FinancialChart';
import CalendarSync from '../components/dashboard/CalendarSync';

export default function DashboardPage() {
  const { logout, user } = useAuthStore();

  return (
    <div className="pt-32 pb-20">
      <div className="container-responsive">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gold">Dashboard</h1>
            <p className="text-gray-400">Bienvenue, {user?.email || 'Propriétaire'}</p>
          </div>
          <NeoButton variant="dark" size="sm" onClick={logout}>
            Déconnexion
          </NeoButton>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-effect p-6">
            <div className="text-gray-400 text-sm">Revenus totaux</div>
            <div className="text-2xl font-bold text-gold">284,500 MAD</div>
            <div className="text-xs text-green-500 mt-2">+12% vs mois dernier</div>
          </div>
          <div className="glass-effect p-6">
            <div className="text-gray-400 text-sm">Taux d'occupation</div>
            <div className="text-2xl font-bold text-gold">87%</div>
            <div className="text-xs text-green-500 mt-2">+5% vs mois dernier</div>
          </div>
          <div className="glass-effect p-6">
            <div className="text-gray-400 text-sm">Prochaines réservations</div>
            <div className="text-2xl font-bold text-gold">8</div>
            <div className="text-xs text-gray-400 mt-2">Dans les 30 prochains jours</div>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-8">
          <FinancialChart />
        </div>

        {/* Calendar */}
        <div className="mt-8">
          <CalendarSync />
        </div>
      </div>
    </div>
  );
}