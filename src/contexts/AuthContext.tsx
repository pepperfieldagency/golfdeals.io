import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // If user was previously logged in and now isn't, redirect to home
      if (!user && !loading) {
        navigate('/', { replace: true });
      }
      
      setUser(user);
      setLoading(false);
    });

    // Set up session expiry listener
    const checkSessionExpiry = () => {
      const lastActivity = localStorage.getItem('lastActivity');
      const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

      if (lastActivity && Date.now() - parseInt(lastActivity) > SESSION_TIMEOUT) {
        auth.signOut();
        navigate('/', { replace: true });
      }
    };

    // Update last activity timestamp
    const updateLastActivity = () => {
      if (user) {
        localStorage.setItem('lastActivity', Date.now().toString());
      }
    };

    // Set up activity listeners
    window.addEventListener('mousemove', updateLastActivity);
    window.addEventListener('keypress', updateLastActivity);
    window.addEventListener('click', updateLastActivity);
    window.addEventListener('scroll', updateLastActivity);

    // Check session every minute
    const intervalId = setInterval(checkSessionExpiry, 60 * 1000);

    // Initial activity timestamp
    if (user) {
      updateLastActivity();
    }

    return () => {
      unsubscribe();
      clearInterval(intervalId);
      window.removeEventListener('mousemove', updateLastActivity);
      window.removeEventListener('keypress', updateLastActivity);
      window.removeEventListener('click', updateLastActivity);
      window.removeEventListener('scroll', updateLastActivity);
    };
  }, [navigate, user, loading]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);