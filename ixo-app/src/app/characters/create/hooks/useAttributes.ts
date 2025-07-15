import { useEffect, useState } from 'react';
import type { AnyAttributeConfig } from '@/types/config/attribute';

export function useAttributes (gameSystemId?: string) {
  const [ attributes, setAttributes ] = useState<AnyAttributeConfig[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    if (!gameSystemId) {
      setAttributes([]);
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    fetch(`/api/configs/attribute?gameSystemId=${encodeURIComponent(gameSystemId)}`)
      .then(res => res.json())
      .then(data => {
        setAttributes(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load attribute configs');
        setLoading(false);
      });
  }, [ gameSystemId ]);

  return { attributes, loading, error };
} 