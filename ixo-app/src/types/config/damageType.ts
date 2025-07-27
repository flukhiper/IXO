import type { BaseConfig } from './base'; // assuming you have these base types

export interface DamageTypeConfig extends BaseConfig {
  isPhysical: boolean;
  
  isSystem: boolean;
}