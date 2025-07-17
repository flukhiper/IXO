import { useState } from 'react';
import { ActionConfig } from '@/types/config/action';

export interface ActionGainChoice {
  actionId?: string;
  type?: string;
  includedTags?: string[];
  excludedTags?: string[];
}

export function useCachedActions (gameSystemId?: string) {
  const [ cache, setCache ] = useState<Record<string, ActionConfig[]>>({});
  const [ loading, setLoading ] = useState<Record<string, boolean>>({});
  const [ error, setError ] = useState<Record<string, string | null>>({});

  function buildActionQueryParams (choice: ActionGainChoice, gameSystemId: string) {
    const params = new URLSearchParams();
    params.set('gameSystemId', gameSystemId);
    if (choice.actionId) params.set('actionId', choice.actionId);
    if (choice.type) params.set('type', choice.type);
    if (choice.includedTags && choice.includedTags.length > 0) params.set('includeTags', choice.includedTags.join(','));
    if (choice.excludedTags && choice.excludedTags.length > 0) params.set('excludeTags', choice.excludedTags.join(','));
    return params;
  }

  function getActionsForChoice (choice: ActionGainChoice) {
    if (!gameSystemId) return { actions: [], loading: false, error: 'No gameSystemId' };
    const cacheKey = JSON.stringify({ ...choice, gameSystemId });
    if (!cache[cacheKey]) {
      setLoading(prev => ({ ...prev, [cacheKey]: true }));
      const params = buildActionQueryParams(choice, gameSystemId);
      fetch(`/api/configs/action?${params}`)
        .then(res => res.json())
        .then(data => {
          setCache(prev => ({ ...prev, [cacheKey]: Array.isArray(data) ? data : [] }));
          setLoading(prev => ({ ...prev, [cacheKey]: false }));
          setError(prev => ({ ...prev, [cacheKey]: null }));
        })
        .catch(e => {
          setLoading(prev => ({ ...prev, [cacheKey]: false }));
          setError(prev => ({ ...prev, [cacheKey]: e.message || 'Failed to fetch actions' }));
        });
      return { actions: [], loading: true, error: null };
    }
    return { actions: cache[cacheKey], loading: loading[cacheKey] || false, error: error[cacheKey] || null };
  }

  return { getActionsForChoice };
} 