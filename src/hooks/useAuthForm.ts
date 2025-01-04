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
      navigate('/deals');
    } catch (error: any) {
      setState({
        loading: false,
        error: error.message
      });
    }
  };

  const handleGoogleAuth = async () => {
    setState({ loading: true, error: null });
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/deals');
    } catch (error: any) {
      setState({
        loading: false,
        error: error.message
      });
    }
  };

  return { ...state, handleAuth, handleGoogleAuth };
}