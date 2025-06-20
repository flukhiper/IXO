import type { MultiLangText } from './common';
import type { FixValue } from './value';

export interface DamageScaleConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  value: FixValue;
}

export interface DamageTypeConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
}