import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  isLoading: false,
  user: null,
  login: async (email, password) => {
    set({ isLoading: true });
    // Simulation d'appel API
    await new Promise(resolve => setTimeout(resolve, 1000));
    localStorage.setItem('auth', 'true');
    set({ 
      isAuthenticated: true, 
      isLoading: false, 
      user: { email } 
    });
  },
  logout: () => {
    localStorage.removeItem('auth');
    set({ isAuthenticated: false, user: null });
  },
  checkAuth: () => {
    const auth = localStorage.getItem('auth');
    set({ isAuthenticated: auth === 'true' });
  }
}));