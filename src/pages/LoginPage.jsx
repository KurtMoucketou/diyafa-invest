import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NeoButton from '../components/ui/NeoButton';
import { useAuthStore } from '../store/authStore';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4">
      <div className="glass-effect p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gold text-center mb-6">Espace Propriétaire</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold focus:outline-none text-white"
              required
              placeholder="votre@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-white">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold focus:outline-none text-white"
              required
              placeholder="••••••••"
            />
          </div>
          
          <NeoButton type="submit" fullWidth disabled={isLoading}>
            {isLoading ? 'Connexion...' : 'Se connecter'}
          </NeoButton>
        </form>

        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Démo : utilisez n'importe quel email/mot de passe</p>
        </div>
      </div>
    </div>
  );
}