import type { BaseConfig, DiceValue, FixedValue } from './base';

/**
 * Defines a configuration for a creature, which can be a monster or a summoned entity.
 * It includes base attributes, actions, skills, equipment, and damage resistances/immunities.
 */
export interface CreatureConfig extends BaseConfig {
  icon?: string;
  thumbnail?: string;  // UI thumbnail (larger, for overview or preview)
  tags?: string[]; // e.g., ["humanoid", "beast", "elemental", "minion", "summon"]
  
  threatLevel: number; // The creature's threat level, influencing its overall power and stats.
  originId: string; // The creature's origin, influencing its overall power and stats.

  statOverrides?: Record<string, number>; // e.g., { "strength": 10, "dexterity": 10, "constitution": 10, "intelligence": 10, "wisdom": 10, "charisma": 10 }

  // Allows overriding base attribute values for this specific creature.
  attributeOverrides?: {
    attributeId: string; // Reference to an AttributeConfig ID (e.g., 'hit-point', 'strength-ability')
    baseValue: FixedValue | DiceValue; // Fixed value for the attribute
  }[];

  resistances?: Record<string, string>; // e.g., { "fire": "immunity", "piercing": "resistant", "bludgeoning": "resistant", "slashing": "resistant" }
  actionIds?: string[]; // References to ActionConfig IDs that this creature can perform.
  skillIds?: string[]; // References to SkillConfig IDs that this creature possesses.

  conditionIds?: string[]; // References to ConditionConfig IDs that this creature starts with.
  
  equipments?: Record<string, string>; // e.g., { "main-hand": "sword", "off-hand": "shield", "armor": "chainmail", "accessory": "ring", "backpack": "backpack", "utility": "potion" }
  holdItems?: string[]; // e.g., ["ring", "potion"]
}
