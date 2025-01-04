import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { 
  getFirestore, 
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
  collection, 
  addDoc,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Enable offline persistence
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled in one tab at a time
      console.warn('Firebase persistence failed: Multiple tabs open');
    } else if (err.code === 'unimplemented') {
      // The current browser doesn't support persistence
      console.warn('Firebase persistence not supported in this browser');
    }
  });

// Initialize Firestore with sample data only in development
if (import.meta.env.DEV) {
  const initializeFirestore = async () => {
    try {
      // Check if deals collection exists and has documents
      const dealsRef = collection(db, 'deals');
      const snapshot = await getDocs(dealsRef);
      
      // Only add sample data if collection is empty
      if (snapshot.empty) {
        const sampleDeal = {
          title: "TaylorMade Stealth 2 Driver",
          description: "Revolutionary AI-designed driver with advanced carbon construction",
          originalPrice: 599.99,
          discountedPrice: 499.99,
          image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
          category: "Equipment",
          merchant: "Golf Galaxy",
          brand: "TaylorMade",
          dateAdded: new Date().toISOString(),
          url: "https://example.com/driver",
          views: 0
        };

        await addDoc(dealsRef, sampleDeal);
      }
    } catch (error) {
      console.error("Error initializing Firestore:", error);
    }
  };

  initializeFirestore();
}