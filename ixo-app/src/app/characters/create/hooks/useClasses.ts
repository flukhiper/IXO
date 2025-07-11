import { ClassConfig } from '@/types/config/class';
import { useEffect, useState } from 'react';

export function useClasses (gameSystemId?: string) {
  const [ classes, setClasses ] = useState<ClassConfig[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    if (!gameSystemId) {
      setClasses([]);
      return;
    }
    setLoading(true);
    const params = new URLSearchParams({
      gameSystemId: gameSystemId
    });
    fetch(`/api/configs/class?${params}`)
      .then(res => res.json())
      .then(data => {
        setClasses(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load classes');
        setLoading(false);
      });
  }, [ gameSystemId ]);

  return { classes, loading, error };
} 