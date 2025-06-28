import { ATTRIBUTE_TYPE } from '@/constants/config/attribute';
import type { BaseConfig, DiceValue, FixedValue, FractionValue, RestorePhase, RestoreValue } from './base';

export type AttributeType = typeof ATTRIBUTE_TYPE[keyof typeof ATTRIBUTE_TYPE];

export type AttributeValue =
  | FixedValue
  | DiceValue
  | FractionValue;

export interface AttributeConfig extends BaseConfig {
  type: AttributeType;
  baseValue: AttributeValue;
  restoreOns?: RestorePhase[];
  restoreValue?: RestoreValue;
  tags?: string[]; // optional for grouping/filtering
  scalingFormula?: string; // e.g. "base + (level * 2) + (stat(strength) / 3)"
}