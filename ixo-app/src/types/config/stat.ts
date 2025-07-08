import { STAT_TYPE } from '@/constants/config/stat';
import type { BaseConfig } from './base';

export interface StatConfig extends BaseConfig {

  /** Short code for the stat, e.g., "STR" */
  abbreviation: string;

  /** Optional tags for grouping, e.g., ["offense", "core", "custom"] */
  tags?: string[];

  /** Optional icon URL or key for UI */
  icon?: string;

  /** Type of stat, e.g., "core", "custom" */
  type: typeof STAT_TYPE[keyof typeof STAT_TYPE];

  /** True if this stat is a system stat (not user-defined) */
  isSystem: boolean;
}