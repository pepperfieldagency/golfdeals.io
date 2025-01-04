import { User } from 'firebase/auth';

// Admin email - in a real app, this would be stored in a secure configuration
const ADMIN_EMAIL = 'hello@golfdeals.io';

export const isAdmin = (user: User | null): boolean => {
  return user?.email === ADMIN_EMAIL;
};