import { useState, useEffect } from 'react';

type ViewType = 'grid' | 'list';
const VIEW_PREFERENCE_KEY = 'dealfinder_view_preference';

export function useViewPreference() {
  const [view, setView] = useState<ViewType>(() => {
    const saved = localStorage.getItem(VIEW_PREFERENCE_KEY);
    return (saved as ViewType) || 'grid';
  });

  useEffect(() => {
    localStorage.setItem(VIEW_PREFERENCE_KEY, view);
  }, [view]);

  return [view, setView] as const;
}