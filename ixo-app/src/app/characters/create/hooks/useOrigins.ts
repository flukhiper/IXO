import { useEffect, useState } from 'react';

export interface OriginConfig {
  id: string;
  name: { en: string; [key: string]: string };
  // Add other fields as needed
}

export function useOrigins (gameSystemId?: string) {
  const [ origins, setOrigins ] = useState<OriginConfig[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    if (!gameSystemId) {
      setOrigins([]);
      return;
    }
    setLoading(true);
    fetch(`/api/configs/origin?gameSystemId=${encodeURIComponent(gameSystemId)}`)
      .then(res => res.json())
      .then(data => {
        setOrigins(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load origins');
        setLoading(false);
      });
  }, [ gameSystemId ]);

  return { origins, loading, error };
} 