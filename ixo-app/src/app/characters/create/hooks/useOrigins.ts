import { OriginConfig } from '@/types/config/origin';
import { useEffect, useState } from 'react';


export function useOrigins (gameSystemId?: string, allowedIds?: string[]) {
  const [ origins, setOrigins ] = useState<OriginConfig[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    if (!gameSystemId) {
      setOrigins([]);
      return;
    }
    setLoading(true);
    const params = new URLSearchParams();
    params.set('gameSystemId', gameSystemId);
    if (allowedIds && allowedIds.length > 0) {
      params.set('ids', allowedIds.join(','));
    }
    const url = `/api/configs/origin?${params.toString()}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setOrigins(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load origins');
        setLoading(false);
      });
  }, [ gameSystemId, allowedIds ]);

  return { origins, loading, error };
} 