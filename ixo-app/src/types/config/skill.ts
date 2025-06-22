import { SKILL_EFFECT_CONDITION_WHEN, SKILL_EFFECT_TYPE, SKILL_REQUIREMENT_TYPE, SKILL_STACK_TYPE } from '@/constants/skill';
import type { MultiLangText } from '@/types/common';
import type { ConditionValue, FixValue, ModifierValue, ReferenceValue } from '@/types/config/value';

export type SkillStackType = typeof SKILL_STACK_TYPE[keyof typeof SKILL_STACK_TYPE];

export interface SkillStackConfig {
  id: string;
  type: SkillStackType;
  priority?: number;
}

export type SkillRequirementType = typeof SKILL_REQUIREMENT_TYPE[keyof typeof SKILL_REQUIREMENT_TYPE];

export interface SkillRequirementPathConfig {
  type: typeof SKILL_REQUIREMENT_TYPE.PATH;
  path: ReferenceValue;
}
export interface SkillRequirementSkillConfig {
  type: typeof SKILL_REQUIREMENT_TYPE.SKILL;
  skill: ReferenceValue;
}
export interface SkillRequirementAttributeConfig {
  type: typeof SKILL_REQUIREMENT_TYPE.ATTRIBUTE;
  attribute: ReferenceValue;
  value: ConditionValue;
}
export interface SkillRequirementStatConfig {
  type: typeof SKILL_REQUIREMENT_TYPE.STAT;
  stat: ReferenceValue;
  value: ConditionValue;
}
export interface SkillRequirementLevelConfig {
  type: typeof SKILL_REQUIREMENT_TYPE.LEVEL;
  level: ConditionValue;
}

export type SkillRequirementConfig =
  | SkillRequirementPathConfig
  | SkillRequirementSkillConfig
  | SkillRequirementAttributeConfig
  | SkillRequirementStatConfig
  | SkillRequirementLevelConfig;

export type SkillEffectType = typeof SKILL_EFFECT_TYPE[keyof typeof SKILL_EFFECT_TYPE];
export type SkillEffectConditionWhen = typeof SKILL_EFFECT_CONDITION_WHEN[keyof typeof SKILL_EFFECT_CONDITION_WHEN];

export interface SkillEffectModifierConfig {
  type: typeof SKILL_EFFECT_TYPE.MODIFIER;
  reference: ReferenceValue;
  modifier: ModifierValue;
}
export interface SkillEffectActionConfig {
  type: typeof SKILL_EFFECT_TYPE.ACTION;
  action: ReferenceValue; // action id
}
export interface SkillEffectConditionConfig {
  type: typeof SKILL_EFFECT_TYPE.CONDITION;
  condition: ReferenceValue; // condition id
  when?: SkillEffectConditionWhen; // undefined mean get condition immediately when skill acquire
}
export interface SkillEffectProficiencyConfig {
  type: typeof SKILL_EFFECT_TYPE.PROFICIENCY;
  proficiency: ReferenceValue; // proficiency id
  value: FixValue;
}

export type SkillEffectConfig =
  | SkillEffectModifierConfig
  | SkillEffectActionConfig
  | SkillEffectConditionConfig
  | SkillEffectProficiencyConfig;

export interface SkillConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  tags?: string[];
  stack?: SkillStackConfig;
  requirement: SkillRequirementConfig[];
  effects: SkillEffectConfig[];
}
