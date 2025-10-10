import React from 'react';
import { useProficiencies } from '../hooks/useProficiencies';
import type { CharacterConfig } from '@/types/config/gameSystem';

interface StepAssignProficiencyProps {
  gameSystemId: string;
  characterConfig: CharacterConfig;
  proficiencies: { id: string; level: number }[];
  setProficiencies: (proficiencies: { id: string; level: number }[]) => void;
  onNext: () => void;
  errors: string[];
  classProgressionPoints: number;
}

export default function StepAssignProficiency ({ gameSystemId, characterConfig, proficiencies, setProficiencies, onNext, errors, classProgressionPoints }: StepAssignProficiencyProps) {
  // Calculate points
  const startPoints = characterConfig.startProficiencyPoint || 0;
  const classPoints = classProgressionPoints;

  // Calculate how many start/class points have been spent
  const usedStartPoints = proficiencies.filter(p => p.level > 0).length > startPoints ? startPoints : proficiencies.filter(p => p.level > 0).length;
  const usedClassPoints = proficiencies.reduce((sum, p) => sum + Math.max(0, p.level - 1), 0) + Math.max(0, proficiencies.filter(p => p.level > 0).length - startPoints);
  const remainingStartPoints = Math.max(0, startPoints - usedStartPoints);
  const remainingClassPoints = Math.max(0, classPoints - usedClassPoints);

  const { proficiencies: allProficiencies, loading, error: fetchError } = useProficiencies(gameSystemId);

  const getLevel = (id: string) => proficiencies.find(p => p.id === id)?.level || 0;

  const handleIncrease = (id: string) => {
    const currentLevel = getLevel(id);
    if (currentLevel === 0 && remainingStartPoints > 0) {
      setProficiencies([ ...proficiencies.filter(p => p.id !== id), { id, level: 1 } ]);
    } else if (currentLevel >= 1 && remainingClassPoints > 0) {
      setProficiencies([ ...proficiencies.filter(p => p.id !== id), { id, level: currentLevel + 1 } ]);
    }
  };

  const handleDecrease = (id: string) => {
    const currentLevel = getLevel(id);
    if (currentLevel > 0) {
      setProficiencies(
        currentLevel === 1
          ? proficiencies.filter(p => p.id !== id)
          : [ ...proficiencies.filter(p => p.id !== id), { id, level: currentLevel - 1 } ]
      );
    }
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
        <label className="block font-medium mb-1">Assign Proficiencies *</label>
        <p className="text-sm text-gray-600 mb-4">
          Spend all <b>start points</b> first (can only raise a proficiency to level 1), then <b>class points</b> (can raise to any level).
        </p>
        <div className="mb-2 text-sm text-blue-700">
          Start points: {remainingStartPoints} / {startPoints} | Class points: {remainingClassPoints} / {classPoints}
        </div>
        {loading ? 
          <div>Loading proficiencies...</div>
          : fetchError ? 
            <div className="text-red-600">{fetchError}</div>
            : 
            <div className="space-y-2">
              {allProficiencies.map(prof => {
                const level = getLevel(prof.id);
                const canIncrease = level === 0 && remainingStartPoints > 0 || level >= 1 && remainingClassPoints > 0;
                const canDecrease = level > 0;
                return (
                  <div key={prof.id} className="flex items-center space-x-3 p-2 border rounded hover:bg-gray-50">
                    <div className="flex-1">
                      <label htmlFor={prof.id} className="font-medium cursor-pointer">
                        {prof.name.en}
                      </label>
                      {prof.description?.en && 
                        <p className="text-sm text-gray-600 mt-1">{prof.description.en}</p>
                      }
                    </div>
                    <div className="flex items-center space-x-2">
                      <button type="button" onClick={() => handleDecrease(prof.id)} disabled={!canDecrease} className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50">-</button>
                      <span className="w-6 text-center">{level}</span>
                      <button type="button" onClick={() => handleIncrease(prof.id)} disabled={!canIncrease} className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50">+</button>
                    </div>
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
          disabled={proficiencies.length === 0}
        >
          Next
        </button>
      </div>
    </form>
  );
} 