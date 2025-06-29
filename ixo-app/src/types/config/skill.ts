import { SKILL_EFFECT_TYPE } from '@/constants/config/skill';
import type { BaseConfig, DiceValue, FixedValue, LocalizeText } from './base';
import type { StackConfig, StatThresholdRequirement } from './common';

export type SkillEffectType = typeof SKILL_EFFECT_TYPE[keyof typeof SKILL_EFFECT_TYPE];
export type SkillEffectConfig =
| SkillEffectStatModifyConfig
| SkillEffectAttributeModifyConfig
| SkillEffectRestrictActionConfig
| SkillEffectRestrictEquipmentConfig
| SkillEffectBlockConditionConfig
| SkillEffectConditionalConditionConfig
| SkillEffectActionConfig
| SkillEffectResistenceConfig
| SkillEffectAdvantageAttributeConfig
| SkillEffectExtraDowntimeConfig
| SkillEffectDowntimeConfig
| SkillEffectExtraProficiencyConfig
| SkillEffectEquipmentSlotConfig
| SkillEffectReduceDamageConfig
| SkillEffectFlavorTextConfig
| SkillEffectSelectableConfig;
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
// Prevent condition
export interface SkillEffectBlockConditionConfig {
  type: typeof SKILL_EFFECT_TYPE.BLOCK_CONDITION;
  tags?: string[]; // e.g., ["frightened", "fatigue"]
}
export interface SkillEffectConditionalConditionConfig {
  type: typeof SKILL_EFFECT_TYPE.CONDITIONAL_CONDITION;
  conditionIds: string[];
  requirements: string[]; // e.g., ["attr(hit-point).current < attr(hit-point).max / 2"]
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
export interface SkillEffectExtraDowntimeConfig {
  type: typeof SKILL_EFFECT_TYPE.EXTRA_DOWNTIME;
  bonusActivities: number; // e.g., 1
}
export interface SkillEffectDowntimeConfig {
  type: typeof SKILL_EFFECT_TYPE.DOWNTIME;
  downtimeId: string;   // e.g., 'repair', 'meditate'
  intense?: string;  // e.g., 'full', 'half'
}
export interface SkillEffectExtraProficiencyConfig {
  type: typeof SKILL_EFFECT_TYPE.EXTRA_PROFICIENCY;
  points: number; // typically 1
}
export interface SkillEffectEquipmentSlotConfig {
  type: typeof SKILL_EFFECT_TYPE.EQUIPMENT_SLOT;
  slot: string;     // e.g., 'utility' or 'weapon'
  bonus: number;    // e.g., 1
}
// Reducing damage
export interface SkillEffectReduceDamageConfig {
  type: typeof SKILL_EFFECT_TYPE.REDUCE_DAMAGE;
  damageTypeId: string;
  value: FixedValue | DiceValue;
}
export interface SkillEffectFlavorTextConfig {
  type: typeof SKILL_EFFECT_TYPE.FLAVOR_TEXT;
  name: LocalizeText;
  description?: LocalizeText;
}
export interface SkillEffectSelectableConfig {
  type: typeof SKILL_EFFECT_TYPE.SELECTABLE;
  effects: Array<SkillEffectConfig & {
    name: LocalizeText;
    description?: LocalizeText;
  }>;
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
