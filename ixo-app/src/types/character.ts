import type { ArchetypeRoleType } from './config/class';

// Skill type: class, general, or role
export type SkillType = 'class' | 'general' | 'role';

// Gear slot mapping for non-weapon equipment (e.g., apparel, accessory, backpack, utility)
export type GearSlotType = 'apparel' | 'accessory' | 'backpack' | 'utility';

export type CharacterGearSlots = {
  [K in GearSlotType]: string[];
};

// Weapon slot mapping for weapon sets (e.g., main-hand, off-hand)
export type WeaponSlotType = 'main-hand' | 'off-hand';

export type CharacterWeaponSet = {
  [K in WeaponSlotType]: string[];
};

// Grid-based inventory system
export interface InventoryGrid {
  rows: number;
  columns: number;
  items: InventoryGridItem[];
}

export interface InventoryGridItem {
  itemId: string;
  quantity: number;
  position: { row: number; column: number }; // top-left corner of the item in the grid
  // Optionally: size, rotation, etc.
}

export interface CharacterInventory {
  base: InventoryGrid; // The character's body inventory
  containers: {
    [containerItemId: string]: InventoryGrid; // e.g., backpack, pouch, etc.
  };
}

// Core Character interface
export interface Character {
  id: string;
  playerID: string;
  name: string;
  gameSystemId: string;
  portrait?: string;
  isPublic: boolean;
  level: number;
  originId: string;
  traits: CharacterTrait[];
  classes: CharacterClass[];
  skills: CharacterSkill[];
  proficiencies: CharacterProficiency[];
  attributes: CharacterAttribute[];
  stats: CharacterStat[];
  gearSlots: CharacterGearSlots;            // non-weapon equipment
  weaponSets: CharacterWeaponSet[];         // array of weapon sets
  inventory: CharacterInventory;            // grid-based inventory system
  createdAt: Date;
  updatedAt: Date;
}

// Character proficiency (e.g., weapons, domains, armors)
export interface CharacterProficiency {
  proficiencyId: string; // Reference to proficiency config
  level: number;         // Starts at 0, can be raised to 1 at creation
}

// Character class (supports multi-classing and class history)
export interface CharacterClass {
  classId: string;      // Reference to the class config
  isActive: boolean;    // Is this the current/main class?
  level: number;        // Level in this class
  acquiredAt: Date;     // When the class was acquired
}

// Character skill (learned from class, general, or role)
export interface CharacterSkill {
  skillId: string;           // Reference to the skill config
  type: SkillType;           // 'class' | 'general' | 'role'
  classId?: string;          // Set if type === 'class'
  role?: ArchetypeRoleType;  // Set if type === 'role'
  learnedAt: Date;           // When the skill was learned
  isActive: boolean;         // If the skill is currently usable
}

// Character trait (reference to trait config, can be toggled active/inactive)
export interface CharacterTrait {
  traitId: string;
  isActive: boolean;
}

// Character attributes (HP, AC, Initiative, etc.)
export interface CharacterAttribute {
  attributeId: string;
  baseValue: number | string;
  currentValue: number | string;
  modifiers: AttributeModifier[];
}

export interface AttributeModifier {
  id: string;
  source: string; // 'origin', 'class', 'item', 'trait', etc.
  sourceId?: string; // ID of the source (originId, classId, etc.), optional for player-choice
  value: number; // Flat value only
  isActive: boolean;
}

// Character stats (STR, DEX, CON, etc.)
export interface CharacterStat {
  statId: string;
  baseValue: number;      // Starts at 0, can be -1 to +3 at creation
  currentValue: number;
  modifiers: StatModifier[];
}

export interface StatModifier {
  id: string;
  source: string; // 'origin', 'class', 'item', 'trait', 'player-choice', etc.
  sourceId?: string; // ID of the source (originId, classId, etc.), optional for player-choice
  value: number; // Flat value only
  isActive: boolean;
} 