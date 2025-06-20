import type { ModifierValue } from './value';

export interface StatConfig {
  id: string;
  name: string;
  description?: string;
  value: number;
  modifiers: Array<ModifierValue>;
}