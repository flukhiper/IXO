import { TraitConfig } from '@/types/config/trait';
import { useEffect, useState } from 'react';

export function useTraits (gameSystemId?: string) {
  const [ traits, setTraits ] = useState<TraitConfig[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    if (!gameSystemId) {
      setTraits([]);
      return;
    }
    setLoading(true);
    const params = new URLSearchParams({
      gameSystemId: gameSystemId
    });
    fetch(`/api/configs/trait?${params}`)
      .then(res => res.json())
      .then(data => {
        setTraits(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load traits');
        setLoading(false);
      });
  }, [ gameSystemId ]);

  return { traits, loading, error };
} 