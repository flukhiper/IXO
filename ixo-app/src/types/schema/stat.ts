import type { BaseMapSchema } from './base';
import type { ReferenceValueSchema } from './value';

export interface StatModifierSchema {
  attribute: ReferenceValueSchema;
  modifier: string; // ModifierValueSchema can be string (formula) or a more complex object if needed
}

export interface StatConfigSchema extends BaseMapSchema {
  value: number;
  modifiers: StatModifierSchema[];
}
