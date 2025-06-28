import type { BaseConfig } from './base'; // assuming you have these base types

export interface DamageTypeConfig extends BaseConfig {
  isPhysical: boolean;
  // Optional tags for filtering or grouping damage types (e.g., elemental, physical)
  tags?: string[];
  // Optional icon url for UI to show the damage type visually
  icon?: string;
}