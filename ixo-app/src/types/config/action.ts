import { ACTION_CONDITION_APPLY_TO_TYPE, ACTION_HIT_TYPE, ACTION_REQUIREMENT, ACTION_TARGET_AREA_TYPE, ACTION_TARGET_TYPE, ACTION_TYPE } from '@/constants/action';
import type { MultiLangText } from '../common';
import type { AttributeRefValue, DiceValue, EquipmentRefValue, FixValue } from '../value';

export type ActionApplyConditionApplyToType = typeof ACTION_CONDITION_APPLY_TO_TYPE[keyof typeof ACTION_CONDITION_APPLY_TO_TYPE];

export interface ActionApplyConditionConfig {
  applyTo: ActionApplyConditionApplyToType;
  conditionId: string;
  concentrateId?: string; // optional
}

export interface ActionDamageConfig {
  type: string; // DamageTypeConfig.id or special like 'main-weapon'
  value: AttributeRefValue | EquipmentRefValue | DiceValue | FixValue;
  modifierFormula?: string;
}

export interface ActionHitAlways {
  type: typeof ACTION_HIT_TYPE.ALWAYS;
}

export interface ActionHitRoll {
  type: typeof ACTION_HIT_TYPE.ATTACK_ROLL | typeof ACTION_HIT_TYPE.DIFFICULTY_CLASS;
  value: AttributeRefValue | EquipmentRefValue | DiceValue | FixValue;
  modifierFormula?: string; // optional
}

export type ActionHitConfig = ActionHitRoll | ActionHitAlways;

export type ActionTargetType = typeof ACTION_TARGET_TYPE[keyof typeof ACTION_TARGET_TYPE];

export interface ActionTargetConfigBase {
  type: ActionTargetType;
}

export type ActionTargetRange = FixValue | EquipmentRefValue;

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

export interface ActionCost {
  attribute: string; // Attribute ID
  value: FixValue | DiceValue;
}

export interface ActionLevelConfig {
  costs: ActionCost[];
  target: ActionTargetConfig;
  hit: ActionHitConfig;
  damage?: ActionDamageConfig;
  condition?: ActionApplyConditionConfig[];
  entity?: string; // entity ID
}

export type ActionType = typeof ACTION_TYPE[keyof typeof ACTION_TYPE];
export type ActionRequirement = typeof ACTION_REQUIREMENT[keyof typeof ACTION_REQUIREMENT];

export interface ActionConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  tags?: string[];
  type: ActionType; // 'common' | 'attack' | 'support' | 'debuff' | 'summon'
  level: Record<number, ActionLevelConfig>;
  attributes: string[]; // referenced attribute IDs
  requirements: ActionRequirement[]; // e.g., ['advantage']
}