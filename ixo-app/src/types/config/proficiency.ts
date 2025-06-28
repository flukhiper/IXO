import { BaseConfig } from './base';

export interface ProficiencyGainConfig {
  modifierFormula?: string;      // e.g., "1 + (stat(dexterity) / 4) + (attr(mechanical) / 2)"
  gainedActionIds?: string[];  // Actions unlocked at this level
  gainedSkillIds?: string[];   // Skills unlocked at this level
}

export interface ProficiencyConfig extends BaseConfig {
  tags?: string[]; // Optional grouping, e.g., ["weapon", "ranged", "tool"]
  icon?: string; // Optional icon URL or key for UI

  gainPerLevel: Record<number, ProficiencyGainConfig>; // e.g., { 2: {...}, 3: {...} }
}