import { ATTRIBUTE_TYPE } from '@/constants/config/attribute';
import type { BaseConfig, DiceValue, FixedValue, RestorePhase } from './base';

export type AttributeType = typeof ATTRIBUTE_TYPE[keyof typeof ATTRIBUTE_TYPE];

// Base interface for all attribute configs
export interface BaseAttributeConfig extends BaseConfig {
  type: AttributeType;
  isSystem: boolean; // true = system attribute, false = player attribute
  tags?: string[];
}

// 1. ResourceAttributeConfig: must be restorable (restores required), value can be FixedValue or DiceValue
export interface ResourceAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.RESOURCE;
  baseValue: FixedValue | DiceValue;
  restores: {
    phase: RestorePhase;
    baseValue: FixedValue | DiceValue;
    formula?: string;
  }[];
  formula?: string;
}

// 2. TurnOrderAttributeConfig: must use die
export interface TurnOrderAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.TURN_ORDER;
  baseValue: DiceValue;
  formula?: string;
}

// 3. AbilityAttributeConfig: must use die
export interface AbilityAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.ABILITY;
  baseValue: DiceValue;
  formula?: string;
}

// 4. SavingThrowAttributeConfig: must use die
export interface SavingThrowAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.SAVING_THROW;
  baseValue: DiceValue;
  formula?: string;
}

// 5. ModifierAttributeConfig: must be fixed number
export interface ModifierAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.MODIFIER;
  baseValue: FixedValue;
  formula?: string;
}

// 6. CombatAttributeConfig: can be die or fixed number
export interface CombatAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.COMBAT;
  baseValue: FixedValue | DiceValue;
  formula?: string;
}

// Union type for all attribute configs
export type AnyAttributeConfig =
  | ResourceAttributeConfig
  | TurnOrderAttributeConfig
  | AbilityAttributeConfig
  | SavingThrowAttributeConfig
  | ModifierAttributeConfig
  | CombatAttributeConfig;