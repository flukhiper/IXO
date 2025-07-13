import { useState, useEffect, useRef } from 'react';
import type { ItemConfig } from '@/types/config/item';

// Simple cache to avoid refetching if hook is used multiple times
const itemsCache: Map<string, ItemConfig[]> = new Map();
const cachePromises: Map<string, Promise<ItemConfig[]>> = new Map();

export function useItems (gameSystemId?: string) {
  const [ items, setItems ] = useState<ItemConfig[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    
    const fetchItems = async () => {
      if (!gameSystemId) {
        setItems([]);
        return;
      }

      try {
        // Return cached data if available
        if (itemsCache.has(gameSystemId)) {
          setItems(itemsCache.get(gameSystemId)!);
          return;
        }

        // If there's already a fetch in progress, wait for it
        if (cachePromises.has(gameSystemId)) {
          const data = await cachePromises.get(gameSystemId)!;
          if (mountedRef.current) {
            setItems(data);
          }
          return;
        }

        setLoading(true);
        
        // Create new fetch promise and cache it
        const params = new URLSearchParams({
          gameSystemId: gameSystemId
        });
        
        const promise = fetch(`/api/configs/item?${params}`)
          .then(res => res.json())
          .then(data => Array.isArray(data) ? data : []);
          
        cachePromises.set(gameSystemId, promise);
        const data = await promise;
        
        // Cache the result
        itemsCache.set(gameSystemId, data);
        cachePromises.delete(gameSystemId);
        
        if (mountedRef.current) {
          setItems(data);
          setError(null);
        }
      } catch {
        cachePromises.delete(gameSystemId); // Reset on error
        if (mountedRef.current) {
          setError('Failed to load items');
        }
      } finally {
        if (mountedRef.current) {
          setLoading(false);
        }
      }
    };

    fetchItems();

    return () => {
      mountedRef.current = false;
    };
  }, [ gameSystemId ]);

  return { items, loading, error };
} 