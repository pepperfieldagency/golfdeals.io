import { 
  sendEmailVerification, 
  applyActionCode, 
  User,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../lib/firebase';

export async function sendVerificationEmail(user: User) {
  try {
    await sendEmailVerification(user);
    return { success: true };
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw error;
  }
}

export async function verifyEmail(actionCode: string) {
  try {
    await applyActionCode(auth, actionCode);
    return { success: true };
  } catch (error) {
    console.error('Error verifying email:', error);
    throw error;
  }
}

export async function resendVerificationEmail(user: User) {
  try {
    await sendEmailVerification(user);
    return { success: true };
  } catch (error) {
    console.error('Error resending verification email:', error);
    throw error;
  }
}

export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error;
  }
}