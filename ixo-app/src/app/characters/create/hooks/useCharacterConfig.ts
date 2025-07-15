import { useEffect, useState } from 'react';
import type { CharacterConfig } from '@/types/config/character';

export function useCharacterConfig (gameSystemId?: string) {
  const [ config, setConfig ] = useState<CharacterConfig | null>(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    if (!gameSystemId) {
      setConfig(null);
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    fetch(`/api/configs/character?gameSystemId=${encodeURIComponent(gameSystemId)}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setConfig(data[0]); // Use the first config if array returned
        } else if (data && typeof data === 'object' && data.id) {
          setConfig(data);
        } else {
          setConfig(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load character config');
        setConfig(null);
        setLoading(false);
      });
  }, [ gameSystemId ]);

  return { config, loading, error };
} 