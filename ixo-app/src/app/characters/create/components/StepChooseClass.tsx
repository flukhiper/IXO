import React from 'react';
import { useClasses } from '../hooks/useClasses';
import { useCachedSkills } from '../hooks/useCachedSkills';
import { useStats } from '../hooks/useStats';
// Import types if available
import type { SkillConfig } from '@/types/config/skill';
import type { StatConfig } from '@/types/config/stat';
import type { CharacterConfig } from '@/types/config/character';

interface StepChooseClassProps {
  gameSystemId: string;
  characterConfig: CharacterConfig;
  characterLevel: number;
  value: { classId: string; level: number }[]; // selected classes with levels
  onChange: (classLevels: { classId: string; level: number }[]) => void;
  onNext: () => void;
  errors: string[];
  statIncreases: { classId: string; level: number; statId: string }[];
  setStatIncreases: React.Dispatch<React.SetStateAction<{ classId: string; level: number; statId: string }[]>>;
  skills: { skillId: string; type: 'class' | 'general' | 'role'; classId?: string; learnedAt: number }[];
  setSkills: React.Dispatch<React.SetStateAction<{ skillId: string; type: 'class' | 'general' | 'role'; classId?: string; learnedAt: number }[]>>;
}

export default function StepChooseClass ({ gameSystemId, characterConfig, characterLevel, value, onChange, onNext, errors, statIncreases, setStatIncreases, skills, setSkills }: StepChooseClassProps) {
  const { classes, loading, error } = useClasses(gameSystemId);
  // Filter classes by characterConfig.startClassChoice
  const allowedClasses = characterConfig?.startClassChoice || [];
  const filteredClasses = classes.filter(cls => allowedClasses.includes(cls.id));

  // Helper: get total assigned levels
  const totalLevels = value.reduce((sum, c) => sum + c.level, 0);

  // Helper: get level for a class
  const getLevel = (classId: string) => value.find(c => c.classId === classId)?.level || 0;

  // Add or remove class
  const handleClassToggle = (classId: string) => {
    if (value.some(c => c.classId === classId)) {
      onChange(value.filter(c => c.classId !== classId));
    } else {
      // Add with default level 1
      onChange([ ...value, { classId, level: 1 } ]);
    }
  };

  // Change level for a class
  const handleLevelChange = (classId: string, newLevel: number) => {
    onChange(value.map(c => c.classId === classId ? { ...c, level: newLevel } : c));
  };

  // Calculate max assignable level for a class
  const getMaxLevel = (classId: string) => {
    const otherLevels = value.filter(c => c.classId !== classId).reduce((sum, c) => sum + c.level, 0);
    return Math.max(1, characterLevel - otherLevels);
  };

  // Check if a class can be added (when not already selected)
  const canAddClass = (classId: string) => {
    if (value.some(c => c.classId === classId)) {
      return true; // Already selected, can always modify
    }
    // Check if adding level 1 would exceed character level
    return totalLevels + 1 <= characterLevel;
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
        <label className="block font-medium mb-1">Choose Class(es) and Assign Levels *</label>
        <p className="text-sm text-gray-600 mb-4">You may take multiple classes, total class levels ≤ character level ({characterLevel})</p>
        {loading ?
          <div>Loading classes...</div>
          : error ?
            <div className="text-red-600">{error}</div>
            :
            <div className="space-y-3">
              {filteredClasses.map(classItem => {
                const selected = value.some(c => c.classId === classItem.id);
                const canAdd = canAddClass(classItem.id);
                return (
                  <div key={classItem.id} className={`flex items-start space-x-3 p-3 border rounded ${
                    canAdd ? 'hover:bg-gray-50' : 'bg-gray-100 opacity-60'
                  }`}>
                    <input
                      type="checkbox"
                      id={classItem.id}
                      checked={selected}
                      onChange={() => handleClassToggle(classItem.id)}
                      disabled={!canAdd}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <label htmlFor={classItem.id} className={`font-medium ${canAdd ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                        {classItem.name.en}
                        {!canAdd && !selected && 
                          <span className="ml-2 text-xs text-red-600">(Max level reached)</span>
                        }
                      </label>
                      {classItem.description &&
                    <p className="text-sm text-gray-600 mt-1">
                      {classItem.description.en}
                    </p>
                      }
                      {classItem.role &&
                    <p className="text-sm text-gray-500 mt-1">
                      Role: {classItem.role}
                    </p>
                      }
                      {selected &&
                    <div className="mt-2">
                      <label className="text-sm mr-2">Level:</label>
                      <input
                        type="number"
                        min={1}
                        max={getMaxLevel(classItem.id)}
                        value={getLevel(classItem.id)}
                        onChange={e => handleLevelChange(classItem.id, Math.max(1, Math.min(getMaxLevel(classItem.id), Number(e.target.value))))}
                        className="w-16 border rounded px-2 py-1"
                      />
                      <span className="ml-2 text-xs text-gray-500">(max {getMaxLevel(classItem.id)})</span>
                    </div>
                      }
                    </div>
                  </div>
                );
              })}
            </div>
        }
      </div>
      <div className={`text-sm ${totalLevels >= characterLevel ? 'text-red-600 font-medium' : 'text-gray-700'}`}>
        Total assigned class levels: {totalLevels} / {characterLevel}
        {totalLevels >= characterLevel && ' (Maximum reached)'}
      </div>

      {/* Progression UI for each class/level using characterConfig.classProgression */}
      {value.map(({ classId, level }) => {
        const classObj = filteredClasses.find(c => c.id === classId);
        const archetypeRoleId = classObj?.role || '';
        return (
          <div key={classId} className="border rounded p-4 mt-6">
            <h2 className="font-bold mb-2">Class: {classObj?.name?.en || classId} (Level {level})</h2>
            {[ ...Array(level) ].map((_, i) => {
              const progression = characterConfig.classProgression[i + 1];
              if (!progression) return null;
              return (
                <div key={i} className="mb-4">
                  <div className="font-medium mb-1">Level {i + 1} Progression</div>
                  {/* Stat Modifier */}
                  {progression.statModifier && progression.statModifier.length > 0 && 
                    <div className="mb-2">
                      <div className="text-sm text-blue-800 font-semibold">Stat Modifiers:</div>
                      <ul className="ml-4 list-disc">
                        {progression.statModifier.map((mod, idx) => 
                          <li key={idx}>{mod.statId}: {mod.value > 0 ? '+' : ''}{mod.value}</li>
                        )}
                      </ul>
                    </div>
                  }
                  {/* Attribute Modifier */}
                  {progression.attributeModifier && progression.attributeModifier.length > 0 && 
                    <div className="mb-2">
                      <div className="text-sm text-green-800 font-semibold">Attribute Modifiers:</div>
                      <ul className="ml-4 list-disc">
                        {progression.attributeModifier.map((mod, idx) => 
                          <li key={idx}>{mod.attributeId}: {typeof mod.baseValue === 'object' ? JSON.stringify(mod.baseValue) : mod.baseValue}{mod.formula ? ` (${mod.formula})` : ''}</li>
                        )}
                      </ul>
                    </div>
                  }
                  {/* Proficiency Point */}
                  {progression.proficiencyPoint && progression.proficiencyPoint > 0 && 
                    <div className="mb-2 text-purple-800 font-semibold">
                      Proficiency Points: +{progression.proficiencyPoint}
                    </div>
                  }
                  {/* Skill Gain */}
                  {progression.skillGain && progression.skillGain.length > 0 && 
                    <div className="mb-2">
                      <div className="text-sm text-orange-800 font-semibold">Skill Gains:</div>
                      {progression.skillGain.map((gain, idx) => 
                        <div key={idx} className="ml-4 mb-1">
                          <div>Choose {gain.numberOfSkill} skill(s) {gain.skillType ? `of type ${gain.skillType}` : ''} {gain.tier ? `(Tier ${gain.tier})` : ''}</div>
                          {/* TODO: Implement skill selection UI filtered by criteria */}
                          <div className="text-xs text-gray-500">[Skill selection UI not yet implemented]</div>
                        </div>
                      )}
                    </div>
                  }
                  {/* Action Gain */}
                  {progression.actionGain && progression.actionGain.length > 0 && 
                    <div className="mb-2">
                      <div className="text-sm text-pink-800 font-semibold">Action Gains:</div>
                      {progression.actionGain.map((gain, idx) => 
                        <div key={idx} className="ml-4 mb-1">
                          <div>Choose {gain.numberOfAction} action(s)</div>
                          {/* TODO: Implement action selection UI filtered by criteria */}
                          <div className="text-xs text-gray-500">[Action selection UI not yet implemented]</div>
                        </div>
                      )}
                    </div>
                  }
                </div>
              );
            })}
          </div>
        );
      })}

      {errors.length > 0 &&
        <div className="bg-red-100 border border-red-300 text-red-700 rounded p-2">
          {errors.map((err, i) => <div key={i}>{err}</div>)}
        </div>
      }
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={value.length === 0}
        >
          Next
        </button>
      </div>
    </form>
  );
} 