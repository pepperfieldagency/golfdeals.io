import { useState, useCallback } from 'react';
import { User } from 'firebase/auth';
import { sendVerificationEmail, resendVerificationEmail } from '../services/authService';

interface EmailVerificationState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

export function useEmailVerification() {
  const [state, setState] = useState<EmailVerificationState>({
    loading: false,
    error: null,
    success: false
  });

  const sendVerification = useCallback(async (user: User) => {
    if (!user) return;
    
    setState({ loading: true, error: null, success: false });
    try {
      await sendVerificationEmail(user);
      setState({ loading: false, error: null, success: true });
    } catch (error) {
      setState({ 
        loading: false, 
        error: 'Failed to send verification email. Please try again.', 
        success: false 
      });
    }
  }, []);

  const resendVerification = useCallback(async (user: User) => {
    if (!user) return;
    
    setState({ loading: true, error: null, success: false });
    try {
      await resendVerificationEmail(user);
      setState({ loading: false, error: null, success: true });
    } catch (error) {
      setState({ 
        loading: false, 
        error: 'Failed to resend verification email. Please try again.', 
        success: false 
      });
    }
  }, []);

  return {
    ...state,
    sendVerification,
    resendVerification
  };
}