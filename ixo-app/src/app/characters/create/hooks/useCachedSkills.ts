import { useCallback, useRef, useState } from 'react';
import { SkillConfig } from '@/types/config/skill';

interface SkillCache {
  class: Record<string, Record<number, SkillConfig[]>>;
  role: Record<string, Record<number, SkillConfig[]>>;
  general: Record<number, SkillConfig[]>;
}

interface LoadingState {
  class: Record<string, Record<number, boolean>>;
  role: Record<string, Record<number, boolean>>;
  general: Record<number, boolean>;
}

interface ErrorState {
  class: Record<string, Record<number, string | null>>;
  role: Record<string, Record<number, string | null>>;
  general: Record<number, string | null>;
}

export function useCachedSkills (gameSystemId?: string) {
  const [ cache, setCache ] = useState<SkillCache>({ class: {}, role: {}, general: {} });
  const [ loading, setLoading ] = useState<LoadingState>({ class: {}, role: {}, general: {} });
  const [ error, setError ] = useState<ErrorState>({ class: {}, role: {}, general: {} });

  // Prevent duplicate fetches
  const inFlight = useRef<{ [key: string]: boolean }>({});

  // Helper to fetch and cache skills
  const fetchSkills = useCallback(async (params: Record<string, string | number>, type: 'class' | 'role' | 'general', key: string, tier?: number) => {
    if (!gameSystemId) return;
    if (inFlight.current[key]) return;
    inFlight.current[key] = true;
    // Set loading
    setLoading(prev => {
      const next = { ...prev };
      if (type === 'class') {
        next.class = { ...next.class, [key]: { ...next.class[key] || {}, [tier!]: true } };
      } else if (type === 'role') {
        next.role = { ...next.role, [key]: { ...next.role[key] || {}, [tier!]: true } };
      } else {
        next.general = { ...next.general, [tier!]: true };
      }
      return next;
    });
    try {
      const urlParams = new URLSearchParams({ ...params, gameSystemId });
      const res = await fetch(`/api/configs/skill?${urlParams}`);
      const data = await res.json();
      setCache(prev => {
        const next = { ...prev };
        if (type === 'class') {
          next.class = { ...next.class, [key]: { ...next.class[key] || {}, [tier!]: Array.isArray(data) ? data : [] } };
        } else if (type === 'role') {
          next.role = { ...next.role, [key]: { ...next.role[key] || {}, [tier!]: Array.isArray(data) ? data : [] } };
        } else {
          next.general = { ...next.general, [tier!]: Array.isArray(data) ? data : [] };
        }
        return next;
      });
      setError(prev => {
        const next = { ...prev };
        if (type === 'class') {
          next.class = { ...next.class, [key]: { ...next.class[key] || {}, [tier!]: null } };
        } else if (type === 'role') {
          next.role = { ...next.role, [key]: { ...next.role[key] || {}, [tier!]: null } };
        } else {
          next.general = { ...next.general, [tier!]: null };
        }
        return next;
      });
    } catch (e: unknown) {
      setError(prev => {
        const next = { ...prev };
        if (type === 'class') {
          next.class = { ...next.class, [key]: { ...next.class[key] || {}, [tier!]: (e as Error).message || 'Failed to fetch class skills' } };
        } else if (type === 'role') {
          next.role = { ...next.role, [key]: { ...next.role[key] || {}, [tier!]: (e as Error).message || 'Failed to fetch role skills' } };
        } else {
          next.general = { ...next.general, [tier!]: (e as Error).message || 'Failed to fetch general skills' };
        }
        return next;
      });
    } finally {
      setLoading(prev => {
        const next = { ...prev };
        if (type === 'class') {
          next.class = { ...next.class, [key]: { ...next.class[key] || {}, [tier!]: false } };
        } else if (type === 'role') {
          next.role = { ...next.role, [key]: { ...next.role[key] || {}, [tier!]: false } };
        } else {
          next.general = { ...next.general, [tier!]: false };
        }
        inFlight.current[key] = false;
        return next;
      });
    }
  }, [ gameSystemId ]);

  // API
  const getClassSkills = useCallback((classId: string, tier: number) => {
    if (!cache.class[classId] || !cache.class[classId][tier]) {
      fetchSkills({ classId, type: 'class', tier }, 'class', classId, tier);
      return { skills: [], loading: loading.class[classId]?.[tier] || false, error: error.class[classId]?.[tier] || null };
    }
    return { skills: cache.class[classId][tier], loading: loading.class[classId]?.[tier] || false, error: error.class[classId]?.[tier] || null };
  }, [ cache, loading, error, fetchSkills ]);

  const getRoleSkills = useCallback((roleId: string, tier: number) => {
    if (!cache.role[roleId] || !cache.role[roleId][tier]) {
      fetchSkills({ archetypeRoleId: roleId, type: 'role', tier }, 'role', roleId, tier);
      return { skills: [], loading: loading.role[roleId]?.[tier] || false, error: error.role[roleId]?.[tier] || null };
    }
    return { skills: cache.role[roleId][tier], loading: loading.role[roleId]?.[tier] || false, error: error.role[roleId]?.[tier] || null };
  }, [ cache, loading, error, fetchSkills ]);

  const getGeneralSkills = useCallback((tier: number) => {
    if (!cache.general[tier]) {
      fetchSkills({ type: 'general', tier }, 'general', 'general', tier);
      return { skills: [], loading: loading.general[tier] || false, error: error.general[tier] || null };
    }
    return { skills: cache.general[tier], loading: loading.general[tier] || false, error: error.general[tier] || null };
  }, [ cache, loading, error, fetchSkills ]);

  return {
    getClassSkills,
    getRoleSkills,
    getGeneralSkills,
    loading,
    error,
    cache
  };
} 