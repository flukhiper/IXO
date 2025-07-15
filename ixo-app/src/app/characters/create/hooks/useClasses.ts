import { ClassConfig } from '@/types/config/class';
import { useEffect, useState } from 'react';

export function useClasses (gameSystemId?: string, allowedIds?: string[]) {
  const [ classes, setClasses ] = useState<ClassConfig[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    if (!gameSystemId) {
      setClasses([]);
      return;
    }
    setLoading(true);
    const params = new URLSearchParams();
    params.set('gameSystemId', gameSystemId);
    if (allowedIds && allowedIds.length > 0) {
      params.set('ids', allowedIds.join(','));
    }
    const url = `/api/configs/class?${params.toString()}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setClasses(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load classes');
        setLoading(false);
      });
  }, [ gameSystemId, allowedIds ]);

  return { classes, loading, error };
} 