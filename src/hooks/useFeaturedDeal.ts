import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

const FEATURED_DEAL_DOC = 'settings/featuredDeal';

export function useFeaturedDeal() {
  const [featuredDealId, setFeaturedDealId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, FEATURED_DEAL_DOC), (doc) => {
      setFeaturedDealId(doc.exists() ? doc.data().dealId : null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const setFeaturedDeal = async (dealId: string | null) => {
    try {
      const docRef = doc(db, FEATURED_DEAL_DOC);
      await setDoc(docRef, { dealId });
    } catch (error) {
      console.error('Error setting featured deal:', error);
      throw error;
    }
  };

  return {
    featuredDealId,
    setFeaturedDeal,
    loading
  };
}