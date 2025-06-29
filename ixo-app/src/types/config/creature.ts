import type { BaseConfig, DiceValue, FixedValue } from './base';

/**
 * Defines a configuration for a creature, which can be a monster or a summoned entity.
 * It includes base attributes, actions, skills, equipment, and damage resistances/immunities.
 */
export interface CreatureConfig extends BaseConfig {
  icon?: string;
  thumbnail?: string;  // UI thumbnail (larger, for overview or preview)
  tags?: string[]; // e.g., ["humanoid", "beast", "elemental", "minion", "summon"]
  level: number; // The creature's level, influencing its overall power and stats.

  // Allows overriding base attribute values for this specific creature.
  attributeOverrides?: {
    attributeId: string; // Reference to an AttributeConfig ID (e.g., 'hit-point', 'strength-ability')
    value: FixedValue | DiceValue; // Fixed value for the attribute
  }[];

  traitIds: string[];
  actionIds?: string[]; // References to ActionConfig IDs that this creature can perform.
  skillIds?: string[]; // References to SkillConfig IDs that this creature possesses.
  conditionIds?: string[]; // References to ConditionConfig IDs that this creature starts with.
  
  equipment?: Record<string, string[]>; // Map of equipment slot ID to an array of ItemConfig IDs for that slot.

  // Defines how the creature scales with different damage types by default.
  // This can be overridden by specific skills or conditions.
  defaultDamageScales: {
    [damageTypeId: string]: string; // e.g., { "fire": "immunity", "piercing": "resistant" }
  };
}
