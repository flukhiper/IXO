import { ACTION_HIT_TYPE, ACTION_TARGET_TYPE, ACTION_TYPE, ACTION_USAGE_RESET } from '@/constants/config/action';
import type { BaseConfig, ConditionFormula, DiceValue, FixedValue, OnEventPhaseConfig, RefValue } from './base';

export interface SummonConfig {
  creatureId: string;         // reference to summon creature
  duration: number;         // e.g. "3 rounds", "until destroyed"
}
export interface RestoreConfig {
  attributeId: string;         // e.g. 'hit-point', 'energy-point'
  baseValue: FixedValue | DiceValue;
  formula?: string;             // e.g. "1d8 + stat(charisma)"
}
export interface DamageConfig {
  damageTypeId: string;    // e.g. 'fire', 'piercing'
  baseValue: FixedValue | DiceValue | RefValue;
  formula?: string; // optional scaling
}

export type ActionUsageReset = typeof ACTION_USAGE_RESET[keyof typeof ACTION_USAGE_RESET];
export interface ActionUsageLimit {
  maxUse: number;
  cooldown: number;
  on?: OnEventPhaseConfig;
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
  range: FixedValue | DiceValue;
  maxRange?: FixedValue | DiceValue; // if out of range, gain disadvantage
  targetCount: number;
}
export interface AreaTargetConfig {
  type: typeof ACTION_TARGET_TYPE.AREA;
  range: FixedValue | DiceValue;
  radius: number;
  targetCount: number;
}
export interface ConeTargetConfig {
  type: typeof ACTION_TARGET_TYPE.CONE;
  range: FixedValue | DiceValue;
  radius: number;
  targetCount: number;
}
export interface LineTargetConfig {
  type: typeof ACTION_TARGET_TYPE.LINE;
  range: FixedValue | DiceValue;
  radius: number;
  targetCount: number;
}

export interface ActionRestrictions {
  requiredEquipments: {
    equipmentSlotId: string; // e.g., "main-hand", "off-hand"
    tags: string[]; // e.g., "melee", "magic"
  }[]; // e.g. ["melee", "two-handed"]
  requiredStats: {
    statId: string;
    conditionFormulas: ConditionFormula;
  }[];
}

export type ActionHitType = typeof ACTION_HIT_TYPE[keyof typeof ACTION_HIT_TYPE];
export type HitCheckConfig =
  | HitAttackRollConfig
  | HitDifficultyClassConfig
  | HitAlwaysConfig;
export interface HitAttackRollConfig {
  type: typeof ACTION_HIT_TYPE.ATTACK_ROLL;
  baseValue: FixedValue | DiceValue | RefValue;
  formula?: string; // optional scaling
}
export interface HitDifficultyClassConfig {
  type: typeof ACTION_HIT_TYPE.DIFFICULTY_CLASS;
  versusSaving: {
    attributeId: string;
    baseValue: FixedValue | DiceValue;
    formula?: string;
  };
}
export interface HitAlwaysConfig {
  type: typeof ACTION_HIT_TYPE.ALWAYS_HIT; // signifies this action automatically succeeds
}

export interface ActionCost {
  attributeId: string;         // e.g. 'energy-point'
  usageValue: FixedValue;      // how much to spend
}
export interface ActionLevelConfig {
  costs: ActionCost[]; // multiple attribute-based costs
  usageLimit?: ActionUsageLimit;

  restrictions?: ActionRestrictions;

  hit: HitCheckConfig;
  target: ActionTargetConfig;

  damages?: DamageConfig[];
  restores?: RestoreConfig[];
  summons?: SummonConfig[]; // multiple summons allowed
  conditionIds?: string[]; // Applies to target when hit

  selfEffect?: {
    damages?: DamageConfig[];
    restores?: RestoreConfig[];
    conditionIds?: string[];
  };
}
export interface ActionLevelAttackConfig {
  costs?: ActionCost[]; // multiple attribute-based costs
  hit?: HitCheckConfig;
  damages?: DamageConfig[];
  restores?: RestoreConfig[];

  // Condition effects moved here for better clarity
  conditionIds?: string[];         // Applies to target when hit
  removeConditionIds?: string[];   // Removes from target when hit
  
  summons?: SummonConfig[]; // multiple summons allowed
  target?: ActionTargetConfig;
  usageLimit?: ActionUsageLimit;
  restrictions?: ActionRestrictions;
  selfConditionIds?: string[]; // references to ConditionConfig that will apply self when use
}

export type ActionType = typeof ACTION_TYPE[keyof typeof ACTION_TYPE];
export interface ActionConfig extends BaseConfig {
  type: ActionType;
  icon?: string;
  tags?: string[];
  
  isCrucial: boolean;
  isConcentration: boolean;

  levelConfigs: Record<number, ActionLevelConfig>; // each level defines cost, hit, damage, etc.
}