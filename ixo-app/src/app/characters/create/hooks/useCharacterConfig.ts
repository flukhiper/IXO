import { useEffect, useState } from 'react';
import type { CharacterConfig } from '@/types/config/character';

export function useCharacterConfig (gameSystemId?: string) {
  const [ config, setConfig ] = useState<CharacterConfig | null>(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    if (!gameSystemId) {
      setConfig(null);
      return;
    }
    setLoading(true);
    fetch(`/api/configs/character?gameSystemId=${gameSystemId}`)
      .then(res => res.json())
      .then(data => {
        setConfig(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load character config');
        setLoading(false);
      });
  }, [ gameSystemId ]);

  return { config, loading, error };
} 