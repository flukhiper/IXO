import { createConditionValue, createFixValue, createModifierValue, createReferenceValue } from '@/utils/config/helper';
import { SKILL_REQUIREMENT_TYPE, SKILL_EFFECT_TYPE, SKILL_REF_ID } from '@/constants/skill';
import { PATH_REF_ID } from '@/constants/path';
import { ATTRIBUTE_REF_ID } from '@/constants/attribute';
import { STAT_REF_ID } from '@/constants/stat';
import { ACTION_REF_ID } from '@/constants/action';
import { CONDITION_REF_ID } from '@/constants/condition';
import { PROFICIENCY_REF_ID } from '@/constants/proficiency';

import type {
  SkillStackConfig,
  SkillStackType,
  SkillRequirementConfig,
  SkillEffectConfig,
  SkillEffectConditionWhen
} from '@/types/config/skill';
import type { ConditionComparator } from '@/types/config/value';

// Stack helper
export function createSkillStackConfig (id: string, type: SkillStackType, priority?: number): SkillStackConfig {
  return priority !== undefined ? { id, type, priority } : { id, type };
}

// Requirement helpers
export function createSkillRequirementPathConfig (pathId: string): SkillRequirementConfig {
  return { type: SKILL_REQUIREMENT_TYPE.PATH, path: createReferenceValue(PATH_REF_ID, pathId) };
}
export function createSkillRequirementSkillConfig (skillId: string): SkillRequirementConfig {
  return { type: SKILL_REQUIREMENT_TYPE.SKILL, skill: createReferenceValue(SKILL_REF_ID, skillId) };
}
export function createSkillRequirementAttributeConfig (attributeId: string, comparator: ConditionComparator, condition: string): SkillRequirementConfig {
  return { type: SKILL_REQUIREMENT_TYPE.ATTRIBUTE, attribute: createReferenceValue(ATTRIBUTE_REF_ID, attributeId), value: createConditionValue(comparator, condition) };
}
export function createSkillRequirementStatConfig (statId: string, comparator: ConditionComparator, condition: string): SkillRequirementConfig {
  return { type: SKILL_REQUIREMENT_TYPE.STAT, stat: createReferenceValue(STAT_REF_ID, statId), value: createConditionValue(comparator, condition) };
}
export function createSkillRequirementLevelConfig (comparator: ConditionComparator, condition: string): SkillRequirementConfig {
  return { type: SKILL_REQUIREMENT_TYPE.LEVEL, level: createConditionValue(comparator, condition) };
}

// Effect helpers
export function createSkillEffectAttributeModifierConfig (attributeId: string, modifier: string): SkillEffectConfig {
  return { type: SKILL_EFFECT_TYPE.MODIFIER, reference: createReferenceValue(ATTRIBUTE_REF_ID, attributeId), modifier: createModifierValue(modifier) };
}
export function createSkillEffectStatModifierConfig (statId: string, modifier: string): SkillEffectConfig {
  return { type: SKILL_EFFECT_TYPE.MODIFIER, reference: createReferenceValue(STAT_REF_ID, statId), modifier: createModifierValue(modifier) };
}
export function createSkillEffectActionConfig (actionId: string): SkillEffectConfig {
  return { type: SKILL_EFFECT_TYPE.ACTION, action: createReferenceValue(ACTION_REF_ID, actionId) };
}
export function createSkillEffectConditionConfig (conditionId: string, when?: SkillEffectConditionWhen): SkillEffectConfig {
  const rawWhen = when && { when };
  return { 
    type: SKILL_EFFECT_TYPE.CONDITION, 
    condition: createReferenceValue(CONDITION_REF_ID, conditionId), 
    ...rawWhen
  };
}
export function createSkillEffectProficiencyConfig (proficiencyId: string, value: number): SkillEffectConfig {
  return { type: SKILL_EFFECT_TYPE.PROFICIENCY, proficiency: createReferenceValue(PROFICIENCY_REF_ID, proficiencyId), value: createFixValue(value) };
}
