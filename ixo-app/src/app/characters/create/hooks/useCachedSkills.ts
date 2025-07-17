import { useState } from 'react';
import { SkillConfig } from '@/types/config/skill';
import type { SkillGainChoice } from '@/types/config/class';

export function useCachedSkills (gameSystemId?: string) {
  const [ cache, setCache ] = useState<Record<string, SkillConfig[]>>({});
  const [ loading, setLoading ] = useState<Record<string, boolean>>({});
  const [ error, setError ] = useState<Record<string, string | null>>({});

  function buildSkillQueryParams (choice: SkillGainChoice, gameSystemId: string) {
    const params = new URLSearchParams();
    params.set('gameSystemId', gameSystemId);
    if (choice.skillId) params.set('skillId', choice.skillId);
    if (choice.skillType) params.set('skillType', choice.skillType);
    if (choice.classId) params.set('classId', choice.classId);
    if (choice.roleId) params.set('roleId', choice.roleId);
    if (choice.tier) params.set('tier', String(choice.tier));
    if (choice.includedTags && choice.includedTags.length > 0) params.set('includeTags', choice.includedTags.join(','));
    if (choice.excludedTags && choice.excludedTags.length > 0) params.set('excludedTags', choice.excludedTags.join(','));
    return params;
  }

  function getSkillsForChoice (choice: SkillGainChoice) {
    if (!gameSystemId) return { skills: [], loading: false, error: 'No gameSystemId' };
    const cacheKey = JSON.stringify({ ...choice, gameSystemId });
    if (!cache[cacheKey]) {
      setLoading(prev => ({ ...prev, [cacheKey]: true }));
      const params = buildSkillQueryParams(choice, gameSystemId);
      fetch(`/api/configs/skill?${params}`)
        .then(res => res.json())
        .then(data => {
          setCache(prev => ({ ...prev, [cacheKey]: Array.isArray(data) ? data : [] }));
          setLoading(prev => ({ ...prev, [cacheKey]: false }));
          setError(prev => ({ ...prev, [cacheKey]: null }));
        })
        .catch(e => {
          setLoading(prev => ({ ...prev, [cacheKey]: false }));
          setError(prev => ({ ...prev, [cacheKey]: e.message || 'Failed to fetch skills' }));
        });
      return { skills: [], loading: true, error: null };
    }
    return { skills: cache[cacheKey], loading: loading[cacheKey] || false, error: error[cacheKey] || null };
  }

  return { getSkillsForChoice };
} 