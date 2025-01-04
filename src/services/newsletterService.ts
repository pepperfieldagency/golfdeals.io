import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export async function subscribeToNewsletter(email: string) {
  try {
    const newsletterRef = collection(db, 'newsletter_subscribers');
    await addDoc(newsletterRef, {
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active'
    });
    return { success: true };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
}