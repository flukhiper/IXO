import React, { useEffect } from 'react';
import { useStats } from '../hooks/useStats';

interface StepAssignStatsProps {
  gameSystemId: string;
  baseStats: { statId: string; value: number }[];
  setBaseStats: React.Dispatch<React.SetStateAction<{ statId: string; value: number }[]>>;
  onNext: () => void;
  errors: string[];
}

const MIN = -1;
const MAX = 3;
const POINTS = 3;

export default function StepAssignStats ({ gameSystemId, baseStats, setBaseStats, onNext, errors }: StepAssignStatsProps) {
  const { stats, loading, error: fetchError } = useStats(gameSystemId);

  // Initialize baseStats if empty
  useEffect(() => {
    if (stats.length > 0 && baseStats.length === 0) {
      setBaseStats(stats.map(stat => ({ statId: stat.id, value: 0 })));
    }
    // eslint-disable-next-line
  }, [stats]);

  // Calculate points spent: sum of all stat values
  const pointsSpent = baseStats.reduce((sum, s) => sum + s.value, 0);
  const pointsRemaining = POINTS - pointsSpent;

  const handleChange = (statId: string, delta: number) => {
    setBaseStats(prev => prev.map(s => {
      if (s.statId !== statId) return s;
      const newValue = Math.max(MIN, Math.min(MAX, s.value + delta));
      // Prevent spending more than available points
      if (delta > 0 && pointsRemaining <= 0) return s;
      if (delta < 0 && s.value <= MIN) return s;
      return { ...s, value: newValue };
    }));
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onNext();
      }}
      className="space-y-6"
    >
      <div>
        <label className="block font-medium mb-1">Assign Stats *</label>
        <p className="text-sm text-gray-600 mb-4">You have {POINTS} points to spend. Each stat starts at 0. You can reduce a stat to -1 to gain a point, or increase up to +3. Points remaining: <b>{pointsRemaining}</b></p>
        {loading ? 
          <div>Loading stats...</div>
          : fetchError ? 
            <div className="text-red-600">{fetchError}</div>
            : 
            <div className="space-y-2">
              {stats.map(stat => {
                const statValue = baseStats.find(s => s.statId === stat.id)?.value ?? 0;
                return (
                  <div key={stat.id} className="flex items-center space-x-3 p-2 border rounded hover:bg-gray-50">
                    <div className="w-24 font-bold">{stat.abbreviation}</div>
                    <div className="flex-1">{stat.name.en}</div>
                    <button
                      type="button"
                      className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
                      onClick={() => handleChange(stat.id, -1)}
                      disabled={statValue <= MIN}
                    >-</button>
                    <span className="w-8 text-center">{statValue}</span>
                    <button
                      type="button"
                      className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
                      onClick={() => handleChange(stat.id, 1)}
                      disabled={statValue >= MAX || pointsRemaining <= 0}
                    >+</button>
                    {stat.description?.en && 
                    <span className="ml-4 text-xs text-gray-500">{stat.description.en}</span>
                    }
                  </div>
                );
              })}
            </div>
        }
      </div>
      {errors.length > 0 && 
        <div className="bg-red-100 border border-red-300 text-red-700 rounded p-2">
          {errors.map((err, i) => <div key={i}>{err}</div>)}
        </div>
      }
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={pointsRemaining < 0}
        >
          Next
        </button>
      </div>
    </form>
  );
} 