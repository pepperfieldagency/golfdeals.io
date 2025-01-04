import { useState, useEffect } from 'react';
import { collection, query, orderBy, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useArchivedDeals } from './useArchivedDeals';
import { Deal } from '../types';

export function useDeals() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const { archiveDeal } = useArchivedDeals();

  useEffect(() => {
    const q = query(collection(db, 'deals'), orderBy('dateAdded', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const dealsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Deal[];
      
      setDeals(dealsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addDeal = async (newDeal: Partial<Deal>) => {
    setLoading(true);
    try {
      const dealData = {
        ...newDeal,
        dateAdded: new Date().toISOString(),
        views: 0
      };
      await addDoc(collection(db, 'deals'), dealData);
    } catch (error) {
      console.error('Error adding deal:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateDeal = async (updatedDeal: Partial<Deal>) => {
    if (!updatedDeal.id) return;
    
    setLoading(true);
    try {
      const dealRef = doc(db, 'deals', updatedDeal.id);
      await updateDoc(dealRef, updatedDeal);
    } catch (error) {
      console.error('Error updating deal:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteDeal = async (dealId: string) => {
    setLoading(true);
    try {
      // Find the deal before deleting it
      const dealToArchive = deals.find(deal => deal.id === dealId);
      if (dealToArchive) {
        // Archive the deal first
        archiveDeal(dealToArchive);
        // Then delete from Firestore
        await deleteDoc(doc(db, 'deals', dealId));
        // Update local state immediately
        setDeals(prevDeals => prevDeals.filter(deal => deal.id !== dealId));
      }
    } catch (error) {
      console.error('Error deleting deal:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const incrementViews = async (dealId: string) => {
    try {
      const dealRef = doc(db, 'deals', dealId);
      await updateDoc(dealRef, {
        views: (deals.find(d => d.id === dealId)?.views || 0) + 1
      });
    } catch (error) {
      console.error('Error incrementing views:', error);
    }
  };

  return {
    deals,
    loading,
    addDeal,
    updateDeal,
    deleteDeal,
    incrementViews
  };
}