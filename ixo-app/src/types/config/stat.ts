import type { BaseConfig } from './base';

export interface StatConfig extends BaseConfig {
  abbreviation: string;

  isSystem: boolean;
}