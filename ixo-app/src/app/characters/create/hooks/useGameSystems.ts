import { useEffect, useState } from 'react';
import type { GameSystem } from '@/types/config/gameSystem';

export function useGameSystems () {
  const [ systems, setSystems ] = useState<GameSystem[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/configs/gamesystem')
      .then(res => res.json())
      .then(data => {
        setSystems(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load game systems');
        setLoading(false);
      });
  }, []);

  return { systems, loading, error };
} 