import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export default function PrivateRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-gold border-b-2" />
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}