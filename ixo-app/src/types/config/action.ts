import { ACTION_CONDITION_APPLY_TO_TYPE, ACTION_HIT_TYPE, ACTION_REQUIREMENT, ACTION_TARGET_AREA_TYPE, ACTION_TARGET_TYPE, ACTION_TYPE } from '@/constants/action';

import type { ConditionValue, DiceValue, FixValue, ModifierValue, ReferenceValue } from './value';
import type { BaseMapConfig } from './base';

export type ActionApplyConditionApplyToType = typeof ACTION_CONDITION_APPLY_TO_TYPE[keyof typeof ACTION_CONDITION_APPLY_TO_TYPE];

export interface ActionApplyConditionConfig {
  applyTo: ActionApplyConditionApplyToType;
  condition: ReferenceValue;
  concentrateCondition?: ReferenceValue; // optional
}

export interface ActionDamageConfig {
  damageType: ReferenceValue;
  value: ReferenceValue | DiceValue | FixValue;
  modifier?: ModifierValue;
}

export interface ActionHitAlways {
  type: typeof ACTION_HIT_TYPE.ALWAYS;
}

export interface ActionHitRoll {
  type: typeof ACTION_HIT_TYPE.ATTACK_ROLL;
  value: ReferenceValue | DiceValue | FixValue;
  modifier?: ModifierValue;
}

export interface ActionHitDifficulty {
  type: typeof ACTION_HIT_TYPE.DIFFICULTY_CLASS;
  saving: ReferenceValue;
  difficultyClass: FixValue;
  modifier?: ModifierValue;
}

export type ActionHitConfig = ActionHitDifficulty | ActionHitRoll | ActionHitAlways;

export type ActionTargetType = typeof ACTION_TARGET_TYPE[keyof typeof ACTION_TARGET_TYPE];

export interface ActionTargetConfigBase {
  type: ActionTargetType;
}

export type ActionTargetRange = FixValue | ReferenceValue;

export interface ActionTargetWithRangeConfig extends ActionTargetConfigBase {
  range: ActionTargetRange;
}

export type ActionAreaType = typeof ACTION_TARGET_AREA_TYPE[keyof typeof ACTION_TARGET_AREA_TYPE];

export interface ActionAreaTargetConfig extends ActionTargetWithRangeConfig {
  type: typeof ACTION_TARGET_TYPE.AREA;
  areaType: ActionAreaType;
  radius: FixValue;
}

export type ActionTargetConfig =
  | ActionTargetConfigBase
  | ActionTargetWithRangeConfig
  | ActionAreaTargetConfig;

export interface ActionCostConfig {
  attribute: ReferenceValue; // Attribute ID
  value: FixValue | DiceValue;
}

export interface ActionLevelConfig {
  costs: ActionCostConfig[];
  target: ActionTargetConfig;
  hit: ActionHitConfig;
  damage?: ActionDamageConfig;
  condition?: ActionApplyConditionConfig[];
  entity?: ReferenceValue; // entity ID
}

export type ActionType = typeof ACTION_TYPE[keyof typeof ACTION_TYPE];
export interface ActionRequirementAdvantageConfig {
  type: typeof ACTION_REQUIREMENT.ADVANTAGE;
}

export interface ActionRequirementStatConfig {
  type: typeof ACTION_REQUIREMENT.STAT;
  stat: ReferenceValue;
  value: ConditionValue;
}

export type ActionRequirementConfig =
  | ActionRequirementAdvantageConfig
  | ActionRequirementStatConfig;

export interface ActionConfig extends BaseMapConfig {
  tags?: string[];
  type: ActionType; // 'common' | 'attack' | 'support' | 'debuff' | 'summon'
  level: Record<number, ActionLevelConfig>;
  references: ReferenceValue[]; // referenced attribute IDs
  requirements: ActionRequirementConfig[]; // e.g., ['advantage']
}