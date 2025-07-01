import { SKILL_EFFECT_TYPE, SKILL_STACK_TYPE } from '@/constants/config/skill';
import type { BaseConfig, ConditionFormula, DiceValue, FixedValue, LocalizeText, OnEventActionConfig, OnEventAdvantageConfig, OnEventAttributeConfig, OnEventConditionConfig, OnEventDisadvantageConfig, OnEventEquipmentSlotConfig, OnEventGotDamageConfig, OnEventGotHitConfig, OnEventResistenceConfig, OnEventStatConfig } from './base';

export type SkillEffectGainOn = 
| OnEventActionConfig
| OnEventConditionConfig
| OnEventAdvantageConfig
| OnEventDisadvantageConfig
| OnEventResistenceConfig
| OnEventAttributeConfig
| OnEventStatConfig
| OnEventGotDamageConfig
| OnEventGotHitConfig
| OnEventEquipmentSlotConfig;

export type SkillEffectType = typeof SKILL_EFFECT_TYPE[keyof typeof SKILL_EFFECT_TYPE];
export type SkillEffectConfig =
| SkillEffectModifyStatConfig
| SkillEffectModifyAttributeConfig
| SkillEffectRestrictActionConfig
| SkillEffectRestrictEquipmentConfig
| SkillEffectBlockConditionConfig
| SkillEffectGainConditionConfig
| SkillEffectGainActionConfig
| SkillEffectGainAdvantageConfig
| SkillEffectGainResistenceConfig
| SkillEffectAddDowntimeConfig
| SkillEffectAddProficiencyPointsConfig
| SkillEffectAddProficiencyLevelConfig
| SkillEffectAddEquipmentSlotConfig
| SkillEffectReduceDamageConfig
| SkillEffectShowFlavorTextConfig
| SkillEffectSelectEffectConfig;
// Passive stat adjustment (possible to be possitive and negetive)
export interface SkillEffectModifyStatConfig {
  type: typeof SKILL_EFFECT_TYPE.MODIFY_STAT;
  statId: string;
  formula: string; // e.g., "-2", "stat(strength) * 0.5"
}
// Passive attribute adjustment (possible to be possitive and negetive)
export interface SkillEffectModifyAttributeConfig {
  type: typeof SKILL_EFFECT_TYPE.MODIFY_ATTRIBUTE;
  attributeId: string;
  formula: string; // e.g., "-2", "stat(strength) * 0.5"
}
// Prevent usage of specific actions or action tags
export interface SkillEffectRestrictActionConfig {
  type: typeof SKILL_EFFECT_TYPE.RESTRICT_ACTION;
  tags: string[]; // e.g., "melee", "magic"
}
// Prevent equipment slot usage
export interface SkillEffectRestrictEquipmentConfig {
  type: typeof SKILL_EFFECT_TYPE.RESTRICT_EQUIPMENT;
  equipmentSlotId: string; // e.g., "main-hand", "off-hand"
  tags: string[]; // e.g., "melee", "magic"
}
// Prevent condition
export interface SkillEffectBlockConditionConfig {
  type: typeof SKILL_EFFECT_TYPE.BLOCK_CONDITION;
  tags: string[]; // e.g., ["frightened", "fatigue"]
}
export interface SkillEffectGainConditionConfig {
  type: typeof SKILL_EFFECT_TYPE.GAIN_CONDITION;
  conditionIds: string[];
  ons: SkillEffectGainOn[]; // e.g., ["attr(hit-point).current < attr(hit-point).max / 2"]
}
// Action available to use when have skill
export interface SkillEffectGainActionConfig {
  type: typeof SKILL_EFFECT_TYPE.GAIN_ACTION;
  actionIds: string[];
  ons: SkillEffectGainOn[];
}
export interface SkillEffectGainAdvantageConfig {
  type: typeof SKILL_EFFECT_TYPE.GAIN_ADVANTAGE;
  attributeIds: string[]; // Only valid for attributes of type 'ability' or 'saving'
  ons: SkillEffectGainOn[];
  isDisadvantage?: boolean; // false (default) means advantage, true means disadvantage
}
// Chanage character resistance
export interface SkillEffectGainResistenceConfig {
  type: typeof SKILL_EFFECT_TYPE.GAIN_RESISTENCE;
  damageTypeId: string;    // Reference to DamageTypeConfig id (e.g., 'fire', 'piercing')
  damageScaleId: string;   // Reference to DamageScaleConfig id (e.g., 'resistant', 'vulnerable')
  ons: SkillEffectGainOn[];
}
export interface SkillEffectAddDowntimeConfig {
  type: typeof SKILL_EFFECT_TYPE.ADD_DOWNTIME;
  downtimeId: string;   // e.g., 'repair', 'meditate'
}
export interface SkillEffectAddProficiencyPointsConfig {
  type: typeof SKILL_EFFECT_TYPE.ADD_PROFICIENCY_POINTS;
  points: number; // typically 1
}
export interface SkillEffectAddProficiencyLevelConfig {
  type: typeof SKILL_EFFECT_TYPE.ADD_PROFICIENCY_LEVEL;
  proficiencyId: string;
  points: number; // typically 1
}
export interface SkillEffectAddEquipmentSlotConfig {
  type: typeof SKILL_EFFECT_TYPE.ADD_EQUIPMENT_SLOT;
  equipmentSlotId: string;     // e.g., 'utility' or 'weapon'
  bonus: number;    // e.g., 1
}
// Reducing damage
export interface SkillEffectReduceDamageConfig {
  type: typeof SKILL_EFFECT_TYPE.REDUCE_DAMAGE;
  damageTypeId: string;
  baseValue: FixedValue | DiceValue;
  formula?: string;
}
export interface SkillEffectShowFlavorTextConfig {
  type: typeof SKILL_EFFECT_TYPE.SHOW_FLAVOR_TEXT;
  name: LocalizeText;
  description?: LocalizeText;
}
export interface SkillEffectSelectEffectConfig {
  type: typeof SKILL_EFFECT_TYPE.SELECT_EFFECT;
  effects: SkillEffectConfig[];
}

export type SkillStackType = typeof SKILL_STACK_TYPE[keyof typeof SKILL_STACK_TYPE];
export interface SkillConfig extends BaseConfig {
  icon?: string;
  tags?: string[];

  stack: {
    id: string;
    type: SkillStackType;
    priority?: number; // only used with 'overwrite'
  };

  pathId: string; // e.g., 'warrior', 'mage'
  requiredCharacterLevel: number; // Needed level to see this skill in pool
  requiredStats: {
    statId: string;
    conditionFormulas: ConditionFormula;
  }[];  // Used for pool filtering
  requiredSkillIds: string[];  // Used for pool filtering
  requiredTraitIds: string[];  // Used for pool filtering

  effects?: SkillEffectConfig[];
}
