import type { MultiLangText } from './common';
import type { FixValue, ModifierValue } from './value';

export interface StatConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  value: FixValue;
  modifiers: Array<ModifierValue>;
}