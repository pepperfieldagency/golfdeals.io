import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    const contactRef = collection(db, 'contact_submissions');
    await addDoc(contactRef, {
      ...formData,
      submittedAt: new Date().toISOString(),
      status: 'new'
    });
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}