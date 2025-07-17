import React, { useMemo } from 'react';
import { useClasses } from '../hooks/useClasses';
import { useCachedSkills } from '../hooks/useCachedSkills';
import { useCachedActions } from '../hooks/useCachedActions';
import type { CharacterConfig } from '@/types/config/character';
import type { ClassConfig, ClassGainConfig } from '@/types/config/class';
import type { StatConfig } from '@/types/config/stat';
import type { AnyAttributeConfig } from '@/types/config/attribute';

function StatModifierSelector ({
  progression,
  onProgressionChange,
  statConfigs,
  selectedStatIds,
  classIndex,
  level
}: {
  progression: ClassGainConfig;
  onProgressionChange: StepChooseClassProps['onClassProgressionSelected'];
  statConfigs: StatConfig[];
  selectedStatIds: string[];
  classIndex: number;
  level: number;
}) {
  if (!progression.statModifier || progression.statModifier.choices.length === 0) return null;

  const statModifier = progression.statModifier;
  const statOptions = statModifier.choices.map(c => {
    let stat: StatConfig[] = [];
    if (c.statId) {
      stat = statConfigs.filter(s => s.id === c.statId);
    } 
    if (c.includeTags) {
      stat = statConfigs.filter(s => c.includeTags?.every(tag => s.tags?.includes(tag)));
    }
    if (c.excludeTags) {
      stat = statConfigs.filter(s => !c.excludeTags?.some(tag => s.tags?.includes(tag)));
    }

    return stat;
  }).reduce((acc, curr) => acc.concat(curr), []);

  return (
    <div className="mb-2">
      <div className="text-sm font-semibold">Stat Modifier:</div>
      {statModifier.choices.length === 1 ? 
        <div>
          Gain {statModifier.value > 0 ? '+' : ''}{statModifier.value} to {statModifier.choices[0].statId || statModifier.choices[0].includeTags?.join(', ')}
        </div>
        : statModifier.choice > 0 ? 
          <div>
            <span>Choose {statModifier.choice} stat(s) to gain {statModifier.value > 0 ? '+' : ''}{statModifier.value}:</span>
            <select
              multiple={statModifier.choice > 1}
              value={selectedStatIds}
              onChange={e => {
                const selected = Array.from(e.target.selectedOptions).map(o => o.value);
                onProgressionChange(classIndex, 'chosenStats', level, selected);
              }}
              className="w-full border rounded px-3 py-2 mt-1"
            >
              {statOptions.map(opt => 
                <option key={opt.id} value={opt.id}>{opt.name.en}</option>
              )}
            </select>
          </div>
          : null}
    </div>
  );
}

function AttributeModifierSelector ({
  progression,
  onProgressionChange,
  attributeConfigs,
  selectedAttributeIds,
  classIndex,
  level
}: {
  progression: ClassGainConfig;
  onProgressionChange: StepChooseClassProps['onClassProgressionSelected'];
  attributeConfigs: AnyAttributeConfig[];
  selectedAttributeIds: string[];
  classIndex: number;
  level: number;
}) {
  if (!progression.attributeModifier || progression.attributeModifier.choices.length === 0) return null;

  const attributeModifier = progression.attributeModifier;
  const attributeOptions = attributeModifier.choices.map(c => {
    let attribute: AnyAttributeConfig[] = [];
    if (c.attributeId) {
      attribute = attributeConfigs.filter(a => a.id === c.attributeId);
    }
    if (c.includeTags) {
      attribute = attributeConfigs.filter(a => c.includeTags?.every(tag => a.tags?.includes(tag)));
    }
    if (c.excludeTags) {
      attribute = attributeConfigs.filter(a => !c.excludeTags?.some(tag => a.tags?.includes(tag)));
    }
    return attribute;
  }).reduce((acc, curr) => acc.concat(curr), []);

  return (
    <div className="mb-2">
      <div className="text-sm font-semibold">Attribute Modifier:</div>
      {attributeModifier.choices.length === 1 ? 
        <div>
          Gain {String(attributeModifier.baseValue)} to {attributeOptions.map(a => a.name.en).join(', ')}
        </div>
        : attributeModifier.choice > 0 ? 
          <div>
            <span>Choose {attributeModifier.choice} attribute(s) to gain {String(attributeModifier.baseValue)}:</span>
            <select
              multiple={attributeModifier.choice > 1}
              value={selectedAttributeIds}
              onChange={e => {
                const selected = Array.from(e.target.selectedOptions).map(o => o.value);
                onProgressionChange(classIndex, 'chosenAttributes', level, selected);
              }}
              className="w-full border rounded px-3 py-2 mt-1"
            >
              {attributeOptions.map(opt => 
                <option key={opt.id} value={opt.id}>{opt.name.en}</option>
              )}
            </select>
          </div>
          : null}
    </div>
  );
}

function SkillGainSelector ({
  progression,
  onProgressionChange,
  gameSystemId,
  selectedSkillIds,
  classIndex,
  level
}: {
  progression: ClassGainConfig;
  onProgressionChange: StepChooseClassProps['onClassProgressionSelected'];
  gameSystemId: string;
  selectedSkillIds: string[];
  classIndex: number;
  level: number;
}) {
  const { getSkillsForChoice } = useCachedSkills(gameSystemId);
  if (!progression.skillGain || progression.skillGain.choices.length === 0) return null;
  const skillGain = progression.skillGain;
  // For now, only support the first choice (could be extended to support multiple choices)
  const choice = skillGain.choices[0];
  const { skills: skillOptions, loading } = getSkillsForChoice(choice);

  return (
    <div className="mb-2">
      <div className="text-sm font-semibold">Skill Gain:</div>
      {skillGain.choices.length === 1 ? 
        <div>
          Gain skill: {skillGain.choices[0].skillId || skillGain.choices[0].includedTags?.join(', ')}
        </div>
        : skillGain.choice > 0 ? 
          <div>
            <span>Choose {skillGain.choice} skill(s):</span>
            <select
              multiple={skillGain.choice > 1}
              value={selectedSkillIds}
              onChange={e => {
                const selected = Array.from(e.target.selectedOptions).map(o => o.value);
                onProgressionChange(classIndex, 'chosenSkills', level, selected);
              }}
              className="w-full border rounded px-3 py-2 mt-1"
              disabled={loading}
            >
              {skillOptions.map(opt => 
                <option key={opt.id} value={opt.id}>{opt.name.en}</option>
              )}
            </select>
          </div>
          : null}
    </div>
  );
}

function ActionGainSelector ({
  progression,
  onProgressionChange,
  gameSystemId,
  selectedActionIds,
  classIndex,
  level
}: {
  progression: ClassGainConfig;
  onProgressionChange: StepChooseClassProps['onClassProgressionSelected'];
  gameSystemId: string;
  selectedActionIds: string[];
  classIndex: number;
  level: number;
}) {
  const { getActionsForChoice } = useCachedActions(gameSystemId);
  if (!progression.actionGain || progression.actionGain.choices.length === 0) return null;
  const actionGain = progression.actionGain;
  // For now, only support the first choice (could be extended to support multiple choices)
  const choice = actionGain.choices[0];
  const { actions: actionOptions, loading } = getActionsForChoice(choice);

  return (
    <div className="mb-2">
      <div className="text-sm font-semibold">Action Gain:</div>
      {actionGain.choices.length === 1 ? 
        <div>
          Gain action: {actionGain.choices[0].actionId || actionGain.choices[0].includedTags?.join(', ')}
        </div>
        : actionGain.choice > 0 ? 
          <div>
            <span>Choose {actionGain.choice} action(s):</span>
            <select
              multiple={actionGain.choice > 1}
              value={selectedActionIds}
              onChange={e => {
                const selected = Array.from(e.target.selectedOptions).map(o => o.value);
                onProgressionChange(classIndex, 'chosenActions', level, selected);
              }}
              className="w-full border rounded px-3 py-2 mt-1"
              disabled={loading}
            >
              {actionOptions.map(opt => 
                <option key={opt.id} value={opt.id}>{opt.name?.en || opt.id}</option>
              )}
            </select>
          </div>
          : null}
    </div>
  );
}

function ClassSelector ({
  selectedClass,
  availableClasses,
  maxLevel,
  classes,
  onClassChange,
  onClassProgressionSelected,
  statConfigs,
  attributeConfigs,
  classIndex,
  gameSystemId,
  selectedClasses
}: {
  selectedClass: ClassRow;
  availableClasses: ClassConfig[];
  maxLevel: number;
  classes: ClassConfig[];
  onClassChange: StepChooseClassProps['onClassChange'];
  onClassProgressionSelected: StepChooseClassProps['onClassProgressionSelected'];
  statConfigs: StatConfig[];
  attributeConfigs: AnyAttributeConfig[];
  classIndex: number;
  gameSystemId: string;
  selectedClasses: ClassRow[];
}) {
  const progressions = useMemo(() => {
    if (!selectedClass) return [];
    return Array.from({ length: selectedClass.level }, (_, i) => classes.find(c => c.id === selectedClass.classId)?.progression[i + 1]);
  }, [ selectedClass, classes ]);

  // Calculate the sum of all class levels except this one
  const otherLevels = selectedClasses.reduce((sum, c, idx) => idx !== classIndex ? sum + (c.level || 0) : sum, 0);
  // The max level this class can be set to
  const maxAssignable = Math.max(1, maxLevel - otherLevels);

  return (
    <>
      <div>
        <label className="block font-medium mb-1">Class</label>
        <select
          value={selectedClass.classId}
          onChange={e => onClassChange(classIndex, { newClassId: e.target.value })}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Select a class</option>
          {availableClasses.map(c => 
            <option key={c.id} value={c.id}>{c.name.en}</option>
          )}
        </select>
      </div>
      {selectedClass.classId && 
        <>
          <div>
            <label className="block font-medium mb-1">Level</label>
            <select
              value={selectedClass.level}
              onChange={e => onClassChange(classIndex, { newLevel: Number(e.target.value) })}
              className="w-full border rounded px-3 py-2"
            >
              {Array.from({ length: maxLevel }, (_, i) => i + 1).map(lvl => 
                <option
                  key={lvl}
                  value={lvl}
                  disabled={lvl > maxAssignable}
                >
                  {lvl}
                </option>
              )}
            </select>
            {maxAssignable < maxLevel && 
              <div className="text-xs text-gray-500 mt-1">
                You can assign up to {maxAssignable} level{maxAssignable > 1 ? 's' : ''} to this class (total cannot exceed {maxLevel}).
              </div>
            }
          </div>
          {/* Show progression details for each level */}
          {progressions.map((progression, index) => {
            if (!progression) return null;
            const level = index + 1;
            const selectedStatIds = selectedClass.chosenStats?.find(cs => cs.level === level)?.statIds || [];
            const selectedAttributeIds = selectedClass.chosenAttributes?.find(ca => ca.level === level)?.attributeIds || [];
            const selectedSkillIds = selectedClass.chosenSkills?.find(cs => cs.level === level)?.skillIds || [];
            const selectedActionIds = selectedClass.chosenActions?.find(ca => ca.level === level)?.actionIds || [];
            return (
              <div key={level} className="border rounded p-4 mt-4">
                <div className="font-bold mb-2">Level {level} Progression</div>
                {/* Stat Modifier */}
                <StatModifierSelector 
                  progression={progression} 
                  onProgressionChange={onClassProgressionSelected} 
                  statConfigs={statConfigs}
                  selectedStatIds={selectedStatIds}
                  classIndex={classIndex}
                  level={level}
                />
                {/* Attribute Modifier */}
                <AttributeModifierSelector
                  progression={progression} 
                  attributeConfigs={attributeConfigs}
                  onProgressionChange={onClassProgressionSelected} 
                  selectedAttributeIds={selectedAttributeIds}
                  classIndex={classIndex}
                  level={level}
                />
                {/* Skill Gain */}
                <SkillGainSelector
                  progression={progression} 
                  onProgressionChange={onClassProgressionSelected} 
                  gameSystemId={gameSystemId}
                  level={level}
                  selectedSkillIds={selectedSkillIds}
                  classIndex={classIndex}
                />
                {/* Action Gain */}
                <ActionGainSelector
                  progression={progression}
                  onProgressionChange={onClassProgressionSelected}
                  gameSystemId={gameSystemId}
                  selectedActionIds={selectedActionIds}
                  classIndex={classIndex}
                  level={level}
                />
              </div>
            );
          })}
        </>
      }
    </>
  );
}

type ClassProgressionChoice = {
  level: number;
  statIds?: string[];
  attributeIds?: string[];
  skillIds?: string[];
  actionIds?: string[];
};

export interface ClassRow {
  classId: string;
  level: number;
  chosenStats?: ClassProgressionChoice[];
  chosenAttributes?: ClassProgressionChoice[];
  chosenSkills?: ClassProgressionChoice[];
  chosenActions?: ClassProgressionChoice[];
}

interface StepChooseClassProps {
  value: ClassRow[];
  onClassChange: (index: number, change: { newClassId?: string; newLevel?: number }) => void;
  onClassAdded: () => void;
  onClassRemoved: (index: number) => void;
  onClassProgressionSelected: (
    classIndex: number,
    type: 'chosenStats' | 'chosenAttributes' | 'chosenSkills' | 'chosenActions',
    level: number,
    ids: string[]
  ) => void;
  onNext: () => void;
  errors: string[];
  characterConfig: CharacterConfig;
  gameSystemId: string;
  statConfigs: StatConfig[];
  attributeConfigs: AnyAttributeConfig[];
}

export default function StepChooseClass ({
  value,
  onClassChange,
  onClassAdded,
  onClassRemoved,
  onClassProgressionSelected,
  onNext,
  errors,
  characterConfig,
  gameSystemId,
  statConfigs,
  attributeConfigs
}: StepChooseClassProps) {
  const allowedClasses = characterConfig?.startClassChoice || [];
  const { classes } = useClasses(gameSystemId, allowedClasses);
  const maxLevel = characterConfig.maxLevel;

  // Multiclass: allow multiple class rows
  const selectedClasses = value && value.length > 0
    ? value
    : [ { classId: '', level: 1, chosenStats: [], chosenAttributes: [], chosenSkills: [], chosenActions: [] } ];
  // Only allow classes not already selected (except for the current row)
  const getAvailableClasses = (currentIndex: number) =>
    classes.filter(c => !selectedClasses.some((v, i) => v.classId === c.id && i !== currentIndex));

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onNext();
      }}
      className="space-y-6"
    >
      {selectedClasses.map((classRow, idx) => 
        <div key={idx} className="mb-6 border rounded p-4 relative">
          <ClassSelector
            selectedClass={classRow}
            availableClasses={getAvailableClasses(idx)}
            maxLevel={maxLevel}
            classes={classes}
            onClassChange={onClassChange}
            onClassProgressionSelected={onClassProgressionSelected}
            statConfigs={statConfigs}
            attributeConfigs={attributeConfigs}
            classIndex={idx}
            gameSystemId={gameSystemId}
            selectedClasses={selectedClasses}
          />
          {selectedClasses.length > 1 && 
            <button
              type="button"
              className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => {
                onClassRemoved(idx);
              }}
              aria-label="Remove class"
            >
              Remove
            </button>
          }
        </div>
      )}
      {/* Add class button */}
      {selectedClasses.length < classes.length && 
        <button
          type="button"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => {
            onClassAdded();
          }}
        >
          + Add Class
        </button>
      }
      {/* TODO: Add button to add another class row and repeat UI for each class */}
      {errors.length > 0 && 
        <div className="bg-red-100 border border-red-300 text-red-700 rounded p-2 space-y-1">
          {errors.map((err, i) => <div key={i}>{err}</div>)}
        </div>
      }
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
} 