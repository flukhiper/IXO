import React from 'react';
import { useClasses } from '../hooks/useClasses';
import { useCachedSkills } from '../hooks/useCachedSkills';
import { useStats } from '../hooks/useStats';
// Import types if available
import type { SkillConfig } from '@/types/config/skill';
import type { StatConfig } from '@/types/config/stat';

interface StepChooseClassProps {
  gameSystemId: string;
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

const progressionTable = [
  { level: 1, type: 'classSkill', label: 'Class Skill – Tier 1', tier: 1 },
  { level: 2, type: 'generalSkill', label: 'General Skill – Tier 1', tier: 1 },
  { level: 3, type: 'roleSkill', label: 'Role Skill – Tier 1', tier: 1 },
  { level: 4, type: 'stat', label: '+1 Stat (player\'s choice)' },
  { level: 5, type: 'classSkill', label: 'Class Skill – Tier 2', tier: 2 },
  { level: 6, type: 'generalSkill', label: 'General Skill – Tier 2', tier: 2 },
  { level: 7, type: 'roleSkill', label: 'Role Skill – Tier 2', tier: 2 },
  { level: 8, type: 'stat', label: '+1 Stat (player\'s choice)' },
  { level: 9, type: 'classSkill', label: 'Class Skill – Tier 3', tier: 3 },
  { level: 10, type: 'generalSkill', label: 'General Skill – Tier 3', tier: 3 },
  { level: 11, type: 'roleSkill', label: 'Role Skill – Tier 3', tier: 3 },
  { level: 12, type: 'stat', label: '+1 Stat (player\'s choice)' }
];

// GeneralSkillPicker component
function GeneralSkillPicker ({
  skills, value, onChange, loading, error, label
}: {
  skills: SkillConfig[];
  value: string;
  onChange: (skillId: string) => void;
  loading: boolean;
  error: string | null;
  label: string;
}) {
  return (
    <div className="mb-4">
      <div className="font-medium mb-1">{label}</div>
      {loading ?
        <div>Loading general skills...</div>
        : error ?
          <div className="text-red-600">{error}</div>
          :
          <>
            <select
              className="w-full border rounded px-3 py-2"
              value={value}
              onChange={e => onChange(e.target.value)}
              required
            >
              <option value="">Select a general skill</option>
              {skills.map(skill => 
                <option key={skill.id} value={skill.id}>{skill.name.en}</option>
              )}
            </select>
            {value &&
            <div className="text-green-700 text-sm mt-1">
              Selected: {skills.find(s => s.id === value)?.name.en}
            </div>
            }
          </>
      }
    </div>
  );
}

// RoleSkillPicker component
function RoleSkillPicker ({
  skills, value, onChange, loading, error, label
}: {
  skills: SkillConfig[];
  value: string;
  onChange: (skillId: string) => void;
  loading: boolean;
  error: string | null;
  label: string;
}) {
  return (
    <div className="mb-4">
      <div className="font-medium mb-1">{label}</div>
      {loading ?
        <div>Loading role skills...</div>
        : error ?
          <div className="text-red-600">{error}</div>
          :
          <>
            <select
              className="w-full border rounded px-3 py-2"
              value={value}
              onChange={e => onChange(e.target.value)}
              required
            >
              <option value="">Select a role skill</option>
              {skills.map(skill => 
                <option key={skill.id} value={skill.id}>{skill.name.en}</option>
              )}
            </select>
            {value &&
            <div className="text-green-700 text-sm mt-1">
              Selected: {skills.find(s => s.id === value)?.name.en}
            </div>
            }
          </>
      }
    </div>
  );
}

// StatPicker component
function StatPicker ({
  stats, value, onChange, loading, error, label
}: {
  stats: StatConfig[];
  value: string;
  onChange: (statId: string) => void;
  loading: boolean;
  error: string | null;
  label: string;
}) {
  return (
    <div className="mb-4">
      <div className="font-medium mb-1">{label}</div>
      {loading ?
        <div>Loading stats...</div>
        : error ?
          <div className="text-red-600">{error}</div>
          :
          <>
            <select
              className="w-full border rounded px-3 py-2"
              value={value}
              onChange={e => onChange(e.target.value)}
              required
            >
              <option value="">Select a stat</option>
              {stats.map(stat => 
                <option key={stat.id} value={stat.id}>{stat.abbreviation} - {stat.name.en}</option>
              )}
            </select>
            {value &&
            <div className="text-green-700 text-sm mt-1">
              Selected: {stats.find(s => s.id === value)?.abbreviation}
            </div>
            }
          </>
      }
    </div>
  );
}

export default function StepChooseClass ({ gameSystemId, characterLevel, value, onChange, onNext, errors, statIncreases, setStatIncreases, skills, setSkills }: StepChooseClassProps) {
  const { classes, loading, error } = useClasses(gameSystemId);
  const { getClassSkills, getGeneralSkills, getRoleSkills } = useCachedSkills(gameSystemId);
  const { stats, loading: statsLoading, error: statsError } = useStats(gameSystemId);
  // Remove local state for selections
  // const [ generalSkillSelections, setGeneralSkillSelections ] = useState<Record<string, string>>({});
  // const [ roleSkillSelections, setRoleSkillSelections ] = useState<Record<string, string>>({});
  // const [ statSelections, setStatSelections ] = useState<Record<string, string>>({});

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

  // Helpers to get/set stat and skill selections in top-level state
  function getStatSelection (classId: string, level: number) {
    return statIncreases.find(s => s.classId === classId && s.level === level)?.statId || '';
  }
  function handleStatChange (classId: string, level: number, statId: string) {
    setStatIncreases(prev => {
      const filtered = prev.filter(s => !(s.classId === classId && s.level === level));
      return statId ? [ ...filtered, { classId, level, statId } ] : filtered;
    });
  }

  function getSkillSelection (classId: string, level: number, type: 'general' | 'role') {
    return skills.find(s => s.classId === classId && s.learnedAt === level && s.type === type)?.skillId || '';
  }
  function handleSkillChange (classId: string, level: number, type: 'general' | 'role', skillId: string) {
    setSkills(prev => {
      const filtered = prev.filter(s => !(s.classId === classId && s.learnedAt === level && s.type === type));
      return skillId ? [ ...filtered, { skillId, type, classId, learnedAt: level } ] : filtered;
    });
  }

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
              {classes.map(classItem => {
                const selected = value.some(c => c.classId === classItem.id);
                return (
                  <div key={classItem.id} className="flex items-start space-x-3 p-3 border rounded hover:bg-gray-50">
                    <input
                      type="checkbox"
                      id={classItem.id}
                      checked={selected}
                      onChange={() => handleClassToggle(classItem.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <label htmlFor={classItem.id} className="font-medium cursor-pointer">
                        {classItem.name.en}
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
      <div className="text-sm text-gray-700">Total assigned class levels: {totalLevels} / {characterLevel}</div>

      {/* Progression UI for each class/level */}
      {value.map(({ classId, level }) => {
        const classObj = classes.find(c => c.id === classId);
        const archetypeRoleId = classObj?.role || '';
        return (
          <div key={classId} className="border rounded p-4 mt-6">
            <h2 className="font-bold mb-2">Class: {classId} (Level {level})</h2>
            {[ ...Array(level) ].map((_, i) => {
              const prog = progressionTable[i];
              if (prog.type === 'classSkill' && prog.tier) {
                const { skills, loading, error } = getClassSkills(classId, prog.tier);
                return (
                  <div key={i} className="mb-4">
                    <div className="font-medium mb-1">Level {i + 1}: {prog.label}</div>
                    {loading ?
                      <div>Loading class skills...</div>
                      : error ?
                        <div className="text-red-600">{error}</div>
                        : skills.length > 0 ?
                          <div className="bg-blue-50 p-2 rounded text-sm">
                            {skills.map(skill => 
                              <div key={skill.id}>
                                <b>{skill.name.en}</b> <span className="text-gray-600">(auto-granted)</span>
                              </div>
                            )}
                          </div>
                          :
                          <div className="text-gray-500">No class skill found for this tier.</div>
                    }
                  </div>
                );
              }
              if (prog.type === 'generalSkill' && prog.tier) {
                const { skills: generalSkills, loading, error } = getGeneralSkills(prog.tier);
                return (
                  <GeneralSkillPicker
                    key={i}
                    skills={generalSkills}
                    value={getSkillSelection(classId, i + 1, 'general')}
                    onChange={skillId => handleSkillChange(classId, i + 1, 'general', skillId)}
                    loading={loading}
                    error={error}
                    label={`Level ${i + 1}: ${prog.label}`}
                  />
                );
              }
              if (prog.type === 'roleSkill' && prog.tier) {
                const { skills: roleSkills, loading, error } = getRoleSkills(archetypeRoleId, prog.tier);
                return (
                  <RoleSkillPicker
                    key={i}
                    skills={roleSkills}
                    value={getSkillSelection(classId, i + 1, 'role')}
                    onChange={skillId => handleSkillChange(classId, i + 1, 'role', skillId)}
                    loading={loading}
                    error={error}
                    label={`Level ${i + 1}: ${prog.label}`}
                  />
                );
              }
              if (prog.type === 'stat') {
                return (
                  <StatPicker
                    key={i}
                    stats={stats}
                    value={getStatSelection(classId, i + 1)}
                    onChange={statId => handleStatChange(classId, i + 1, statId)}
                    loading={statsLoading}
                    error={statsError}
                    label={`Level ${i + 1}: ${prog.label}`}
                  />
                );
              }
              return (
                <div key={i} className="mb-4">
                  <div className="font-medium mb-1">Level {i + 1}: {prog.label}</div>
                  <div className="bg-gray-50 p-2 rounded text-sm text-gray-600">[UI for {prog.type} goes here]</div>
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