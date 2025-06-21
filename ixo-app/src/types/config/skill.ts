import { SKILL_EFFECT_CONDITION_WHEN, SKILL_EFFECT_TYPE, SKILL_REQUIREMENT_TYPE, SKILL_STACK_TYPE } from '@/constants/skill';
import type { MultiLangText } from '@/types/common';
import type { ConditionValue, ModifierValue } from '@/types/value';

export type SkillStackType = typeof SKILL_STACK_TYPE[keyof typeof SKILL_STACK_TYPE];

export interface SkillStackConfig {
  id: string;
  type: SkillStackType;
  priority?: number;
}

export type SkillRequirementType = typeof SKILL_REQUIREMENT_TYPE[keyof typeof SKILL_REQUIREMENT_TYPE];

export interface SkillRequirementPath {
  type: typeof SKILL_REQUIREMENT_TYPE.PATH;
  path: string; // path id
}
export interface SkillRequirementSkill {
  type: typeof SKILL_REQUIREMENT_TYPE.SKILL;
  skill: string; // skill id
}
export interface SkillRequirementAttribute {
  type: typeof SKILL_REQUIREMENT_TYPE.ATTRIBUTE;
  attribute: string;
  value: ConditionValue;
}
export interface SkillRequirementStat {
  type: typeof SKILL_REQUIREMENT_TYPE.STAT;
  stat: string;
  value: ConditionValue;
}
export interface SkillRequirementLevel {
  type: typeof SKILL_REQUIREMENT_TYPE.LEVEL;
  level: ConditionValue;
}
export interface SkillRequirementAcquire {
  type: typeof SKILL_REQUIREMENT_TYPE.ACQUIRE;
}

export type SkillRequirement =
  | SkillRequirementPath
  | SkillRequirementSkill
  | SkillRequirementAttribute
  | SkillRequirementStat
  | SkillRequirementLevel
  | SkillRequirementAcquire;

export type SkillEffectType = typeof SKILL_EFFECT_TYPE[keyof typeof SKILL_EFFECT_TYPE];
export type SkillEffectConditionWhen = typeof SKILL_EFFECT_CONDITION_WHEN[keyof typeof SKILL_EFFECT_CONDITION_WHEN];

export interface SkillEffectModifier {
  type: typeof SKILL_EFFECT_TYPE.MODIFIER;
  modifier: ModifierValue;
}
export interface SkillEffectAction {
  type: typeof SKILL_EFFECT_TYPE.ACTION;
  action: string; // action id
}
export interface SkillEffectCondition {
  type: typeof SKILL_EFFECT_TYPE.CONDITION;
  condition: string; // condition id
  when?: SkillEffectConditionWhen; // undefined mean get condition immediately when skill acquire
}
export interface SkillEffectProficiency {
  type: typeof SKILL_EFFECT_TYPE.PROFICIENCY;
  proficiency: string; // proficiency id
  value: number;
}

export type SkillEffect =
  | SkillEffectModifier
  | SkillEffectAction
  | SkillEffectCondition
  | SkillEffectProficiency;

export interface SkillConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  tags?: string[];
  stack?: SkillStackConfig;
  requirement: SkillRequirement[];
  effects: SkillEffect[];
}
