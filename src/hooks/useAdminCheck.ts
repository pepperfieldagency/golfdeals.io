import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { isAdmin } from '../utils/adminUtils';

export function useAdminCheck() {
  const { user } = useAuth();
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsAdminUser(isAdmin(user));
    setLoading(false);
  }, [user]);

  return { isAdminUser, loading };
}