import type { BaseConfig } from './base';

export interface StatConfig extends BaseConfig {
  tags?: string[]; // e.g., ["offense", "tank", "precise"]

  abbreviation: string; // e.g. "STR"
}