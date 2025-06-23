import type { FixValue, ModifierValue, ReferenceValue } from './value';
import type { BaseMapConfig } from './base';

export interface StatModifierConfig {
  attribute: ReferenceValue;
  modifier: ModifierValue;
}

export interface StatConfig extends BaseMapConfig {
  value: FixValue;
  modifiers: Array<StatModifierConfig>;
}