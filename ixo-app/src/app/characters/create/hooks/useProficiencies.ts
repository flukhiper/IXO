import { useEffect, useState } from 'react';

export interface ProficiencyConfig {
  id: string;
  name: { en: string };
  description?: { en?: string };
}

export function useProficiencies (gameSystemId?: string) {
  const [ proficiencies, setProficiencies ] = useState<ProficiencyConfig[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    if (!gameSystemId) {
      setProficiencies([]);
      return;
    }
    setLoading(true);
    const params = new URLSearchParams({ gameSystemId });
    fetch(`/api/configs/proficiency?${params}`)
      .then(res => res.json())
      .then(data => {
        setProficiencies(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load proficiencies');
        setLoading(false);
      });
  }, [ gameSystemId ]);

  return { proficiencies, loading, error };
} 