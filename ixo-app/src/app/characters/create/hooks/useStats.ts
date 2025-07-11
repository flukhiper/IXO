import { useEffect, useState } from 'react';
import { StatConfig } from '@/types/config/stat';

export function useStats (gameSystemId?: string) {
  const [ stats, setStats ] = useState<StatConfig[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    if (!gameSystemId) {
      setStats([]);
      return;
    }
    setLoading(true);
    const params = new URLSearchParams({ gameSystemId });
    fetch(`/api/configs/stat?${params}`)
      .then(res => res.json())
      .then(data => {
        setStats(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load stats');
        setLoading(false);
      });
  }, [ gameSystemId ]);

  return { stats, loading, error };
} 