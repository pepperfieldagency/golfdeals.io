import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  auth, 
  googleProvider 
} from '../lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';

interface AuthFormState {
  loading: boolean;
  error: string | null;
}

export function useAuthForm(isLogin: boolean) {
  const [state, setState] = useState<AuthFormState>({
    loading: false,
    error: null
  });
  const navigate = useNavigate();

  const handleAuth = async (email: string, password: string, name?: string) => {
    setState({ loading: true, error: null });
    
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        if (name) {
          await updateProfile(user, { displayName: name });
        }
      }
      navigate('/deals', { replace: true });
    } catch (error: any) {
      let errorMessage = 'An error occurred. Please try again.';
      
      // Handle specific Firebase auth errors
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        case 'auth/email-already-in-use':
          errorMessage = 'An account already exists with this email.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password should be at least 6 characters.';
          break;
      }

      setState({
        loading: false,
        error: errorMessage
      });
    }
  };

  const handleGoogleAuth = async () => {
    setState({ loading: true, error: null });
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/deals', { replace: true });
    } catch (error: any) {
      setState({
        loading: false,
        error: 'Failed to sign in with Google. Please try again.'
      });
    }
  };

  return { ...state, handleAuth, handleGoogleAuth };
}