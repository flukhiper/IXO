import { ACTION_HIT_TYPE, ACTION_TARGET_TYPE, ACTION_TYPE, ACTION_USAGE_RESET } from '@/constants/config/action';
import type { BaseConfig, DiceValue, FixedValue, RefValue } from './base';
import type { StatThresholdRequirement } from './common';

export interface ActionRestrictions {
  requiredWeaponTags?: string[]; // e.g. ["melee", "two-handed"]
  requiredStatThresholds?: StatThresholdRequirement[]; // e.g. [{ statId: "strength", min: 14 }]
}
export type ActionUsageReset = typeof ACTION_USAGE_RESET[keyof typeof ACTION_USAGE_RESET];

export interface ActionUsageLimit {
  isTemporary?: boolean; // True if granted temporarily (e.g. from a Trait)
  maxUses?: number;      // How many times it can be used before reset
  resetOn?: ActionUsageReset; // Reset condition
  cooldownRounds?: number; // Rounds before action can be used again after one use
}

export type ActionTargetType = typeof ACTION_TARGET_TYPE[keyof typeof ACTION_TARGET_TYPE];
export type ActionTargetConfig =
  | SelfTargetConfig
  | SelectTargetConfig
  | AreaTargetConfig
  | ConeTargetConfig
  | LineTargetConfig;
export interface SelfTargetConfig {
  type: typeof ACTION_TARGET_TYPE.SELF;
}
export interface SelectTargetConfig {
  type: typeof ACTION_TARGET_TYPE.SELECT;
  range?: FixedValue | DiceValue | RefValue;
  targetCount?: number;
}
export interface AreaTargetConfig {
  type: typeof ACTION_TARGET_TYPE.AREA;
  range: FixedValue | DiceValue | RefValue;
  radius: number;
  targetCount?: number;
}

export interface ConeTargetConfig {
  type: typeof ACTION_TARGET_TYPE.CONE;
  range: FixedValue | DiceValue | RefValue;
  radius: number;
  targetCount?: number;
}

export interface LineTargetConfig {
  type: typeof ACTION_TARGET_TYPE.LINE;
  range: FixedValue | DiceValue | RefValue;
  radius: number;
  targetCount?: number;
}
export interface SummonConfig {
  summonId: string;         // reference to summon entity
  duration: string;         // e.g. "3 rounds", "until destroyed"
}
export interface RestoreConfig {
  attributeId: string;         // e.g. 'hit-point', 'energy-point'
  formula: string;             // e.g. "1d8 + stat(charisma)"
  conditionIds?: string[];     // optional conditions that may apply when restored (e.g. 'inspired', 'regenerating')
}
export interface DamageConfig {
  damageTypeId: string;    // e.g. 'fire', 'piercing'
  baseValue: FixedValue | DiceValue;
  scalingFormula?: string; // optional scaling
  conditionIds?: string[]; // references to ConditionConfig that will apply to target when hit
}

export type ActionHitType = typeof ACTION_HIT_TYPE[keyof typeof ACTION_HIT_TYPE];

export type HitCheckConfig =
  | HitAttackRollConfig
  | HitDifficultyClassConfig
  | HitAlwaysConfig;

export interface HitAttackRollConfig {
  type: typeof ACTION_HIT_TYPE.ATTACK_ROLL;
  baseValue: FixedValue | DiceValue | RefValue;
  scalingFormula?: string; // optional scaling
}
export interface HitDifficultyClassConfig {
  type: typeof ACTION_HIT_TYPE.DIFFICULTY_CLASS;
  baseValue: FixedValue;
  versusSaving: string; // attributeId of saving throw
  scalingFormula?: string;
}
export interface HitAlwaysConfig {
  type: typeof ACTION_HIT_TYPE.ALWAYS_HIT; // signifies this action automatically succeeds
}

export interface ActionCost {
  attributeId: string;         // e.g. 'energy-point'
  usageValue: FixedValue;      // how much to spend
}

export interface ActionLevelConfig {
  cost?: ActionCost[]; // multiple attribute-based costs
  hit?: HitCheckConfig;
  damage?: DamageConfig[];
  selfConditionIds?: string[]; // references to ConditionConfig that will apply self when use
  summon?: SummonConfig[]; // multiple summons allowed
  target?: ActionTargetConfig;
  usageLimit?: ActionUsageLimit;
  restrictions?: ActionRestrictions;
}

export type ActionType = typeof ACTION_TYPE[keyof typeof ACTION_TYPE];

export interface ActionConfig extends BaseConfig {
  type: ActionType;
  isCrucial: boolean;
  icon?: string;
  tags?: string[];

  levelConfigs: Record<number, ActionLevelConfig>; // each level defines cost, hit, damage, etc.
}