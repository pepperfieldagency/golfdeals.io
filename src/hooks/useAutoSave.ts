import { useCallback, useEffect, useRef } from 'react';

export function useAutoSave<T>(callback: (data: T) => void, delay: number = 1000) {
  const timeoutRef = useRef<NodeJS.Timeout>();
  
  const debouncedSave = useCallback((data: T) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      callback(data);
    }, delay);
  }, [callback, delay]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedSave;
}