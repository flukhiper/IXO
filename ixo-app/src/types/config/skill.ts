import { SKILL_EFFECT_TYPE } from '@/constants/config/skill';
import type { BaseConfig } from './base';
import type { StackConfig, StatThresholdRequirement } from './common';

export type SkillEffectType = typeof SKILL_EFFECT_TYPE[keyof typeof SKILL_EFFECT_TYPE];
export type SkillEffectConfig =
| SkillEffectStatModifyConfig
| SkillEffectAttributeModifyConfig
| SkillEffectRestrictActionConfig
| SkillEffectRestrictEquipmentConfig
| SkillEffectActionConfig
| SkillEffectResistenceConfig
| SkillEffectAdvantageAttributeConfig;
// Passive stat adjustment (possible to be possitive and negetive)
export interface SkillEffectStatModifyConfig {
  type: typeof SKILL_EFFECT_TYPE.STAT_MODIFY;
  statId: string;
  formula: string; // e.g., "-2", "stat(strength) * 0.5"
}
// Passive attribute adjustment (possible to be possitive and negetive)
export interface SkillEffectAttributeModifyConfig {
  type: typeof SKILL_EFFECT_TYPE.ATTRIBUTE_MODIFY;
  attributeId: string;
  formula: string; // e.g., "-2", "stat(strength) * 0.5"
}
// Prevent usage of specific actions or action tags
export interface SkillEffectRestrictActionConfig {
  type: typeof SKILL_EFFECT_TYPE.RESTRICT_ACTION;
  tags?: string[]; // e.g., "melee", "magic"
}
// Prevent equipment slot usage
export interface SkillEffectRestrictEquipmentConfig {
  type: typeof SKILL_EFFECT_TYPE.RESTRICT_EQUIPMENT;
  tags?: string[]; // e.g., "main-hand", "off-hand"
}
// Action available to use when have skill
export interface SkillEffectActionConfig {
  type: typeof SKILL_EFFECT_TYPE.ACTION;
  actionIds?: string[];
}
// Chanage character resistance
export interface SkillEffectResistenceConfig {
  type: typeof SKILL_EFFECT_TYPE.RESISTENCE;
  damageTypeId: string;    // Reference to DamageTypeConfig id (e.g., 'fire', 'piercing')
  damageScaleId: string;   // Reference to DamageScaleConfig id (e.g., 'resistant', 'vulnerable')
}
export interface SkillEffectAdvantageAttributeConfig {
  type: typeof SKILL_EFFECT_TYPE.ADVANTAGE_ATTRIBUTE;
  attributeIds: string[]; // Only valid for attributes of type 'ability' or 'saving'
  isDisadvantage?: boolean; // false (default) means advantage, true means disadvantage
}

export interface SkillConfig extends BaseConfig {
  icon?: string;
  tags?: string[];

  stack: StackConfig;

  pathId: string; // e.g., 'warrior', 'mage', or 'any' for no filter
  requiredCharacterLevel?: number; // Needed level to see this skill in pool
  requiredStatThresholds?: StatThresholdRequirement[];  // Used for pool filtering

  effects?: SkillEffectConfig[];
}
