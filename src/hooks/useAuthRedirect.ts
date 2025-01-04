import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function useAuthRedirect(redirectTo: string, whenAuthenticated: boolean = true) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      const shouldRedirect = whenAuthenticated ? !!user : !user;
      if (shouldRedirect) {
        navigate(redirectTo);
      }
    }
  }, [user, loading, navigate, redirectTo, whenAuthenticated]);

  return { loading };
}