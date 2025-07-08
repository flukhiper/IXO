import { ARCHETYPE_ROLE_TYPE, CLASS_TYPE } from '@/constants/config/class';
import type { BaseConfig, EffectConfig } from './base';

export type ArchetypeRoleType = typeof ARCHETYPE_ROLE_TYPE[keyof typeof ARCHETYPE_ROLE_TYPE];
export type ClassType = (typeof CLASS_TYPE)[keyof typeof CLASS_TYPE];

/**
 * ClassConfig represents a character's class/profession/occupation.
 * It grants features, abilities, and advancement options.
 */
export interface ClassConfig extends BaseConfig {

  /** Tags for grouping, e.g., ["martial", "arcane", "divine", "hybrid"] */
  tags?: string[];

  /** Optional icon for UI */
  icon?: string;

  /** Base stat reference */
  class: ClassType; 

  /** Archetype role */
  role: ArchetypeRoleType; 

  /** Effects granted by this class */
  effects: EffectConfig[];
}