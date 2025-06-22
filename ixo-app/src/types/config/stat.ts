import type { MultiLangText } from '@/types/common';
import type { FixValue, ModifierValue, ReferenceValue } from './value';

export interface StatModifierConfig {
  attribute: ReferenceValue;
  modifier: ModifierValue;
}

export interface StatConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  value: FixValue;
  modifiers: Array<StatModifierConfig>;
}