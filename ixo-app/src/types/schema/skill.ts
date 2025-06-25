import { SKILL_EFFECT_TYPE, SKILL_REQUIREMENT_TYPE } from '@/constants/skill';
import type { BaseMapSchema } from './base';
import type { ReferenceValueSchema } from './value';
import { SkillStackType } from '../config/skill';

export interface SkillStackSchema {
  id: string;
  type: SkillStackType;
  priority?: number;
}

export interface SkillRequirementPathSchema {
  type: typeof SKILL_REQUIREMENT_TYPE.PATH;
  path: ReferenceValueSchema;
}
export interface SkillRequirementSkillSchema {
  type: typeof SKILL_REQUIREMENT_TYPE.SKILL;
  skill: ReferenceValueSchema;
}
export interface SkillRequirementAttributeSchema {
  type: typeof SKILL_REQUIREMENT_TYPE.ATTRIBUTE;
  attribute: ReferenceValueSchema;
  value: string | number;
}
export interface SkillRequirementStatSchema {
  type: typeof SKILL_REQUIREMENT_TYPE.STAT;
  stat: ReferenceValueSchema;
  value: string | number;
}
export interface SkillRequirementLevelSchema {
  type: typeof SKILL_REQUIREMENT_TYPE.LEVEL;
  level: string | number;
}
export type SkillRequirementSchema =
  | SkillRequirementPathSchema
  | SkillRequirementSkillSchema
  | SkillRequirementAttributeSchema
  | SkillRequirementStatSchema
  | SkillRequirementLevelSchema;

export interface SkillEffectModifierSchema {
  type: typeof SKILL_EFFECT_TYPE.MODIFIER;
  reference: ReferenceValueSchema;
  modifier: string;
}
export interface SkillEffectActionSchema {
  type: typeof SKILL_EFFECT_TYPE.ACTION;
  action: ReferenceValueSchema;
}
export interface SkillEffectConditionSchema {
  type: typeof SKILL_EFFECT_TYPE.CONDITION;
  condition: ReferenceValueSchema;
  when?: string;
}
export interface SkillEffectProficiencySchema {
  type: typeof SKILL_EFFECT_TYPE.PROFICIENCY;
  proficiency: ReferenceValueSchema;
  value: number;
}
export type SkillEffectSchema =
  | SkillEffectModifierSchema
  | SkillEffectActionSchema
  | SkillEffectConditionSchema
  | SkillEffectProficiencySchema;

export interface SkillConfigSchema extends BaseMapSchema {
  tags?: string[];
  stack?: SkillStackSchema;
  requirement: SkillRequirementSchema[];
  effects: SkillEffectSchema[];
}
