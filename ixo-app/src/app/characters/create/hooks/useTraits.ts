import { TraitConfig } from '@/types/config/trait';
import { useEffect, useState } from 'react';

export function useTraits (gameSystemId?: string, allowedIds?: string[]) {
  const [ traits, setTraits ] = useState<TraitConfig[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    if (!gameSystemId) {
      setTraits([]);
      return;
    }
    setLoading(true);
    const params = new URLSearchParams();
    params.set('gameSystemId', gameSystemId);
    if (allowedIds && allowedIds.length > 0) {
      params.set('ids', allowedIds.join(','));
    }
    const url = `/api/configs/trait?${params.toString()}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTraits(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load traits');
        setLoading(false);
      });
  }, [ gameSystemId, allowedIds ]);

  return { traits, loading, error };
} 