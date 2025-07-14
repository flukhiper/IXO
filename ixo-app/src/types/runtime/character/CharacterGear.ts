import { EquipmentSlotType } from '@/types/config/character';

// Gear slot mapping for non-weapon equipment (e.g., apparel, accessory, backpack, utility)
export type GearSlotType = Exclude<EquipmentSlotType, 'main-hand' | 'off-hand'>;

export interface CharacterGearSlot {
  id: string; // crypto.randomUUID() generated
  characterId: string; // Reference to character
  slotType: GearSlotType;
  itemConfigId: string; // Reference to equipped item config
}

// Weapon slot mapping for weapon sets (e.g., main-hand, off-hand)
export type WeaponSlotType = Exclude<EquipmentSlotType, 'apparel' | 'accessory' | 'backpack' | 'utility'>;

export interface CharacterWeaponSet {
  id: string; // crypto.randomUUID() generated
  characterId: string; // Reference to character
  setName: string; // e.g., "Primary", "Secondary"
  mainHandItemId?: string; // Reference to main-hand weapon
  offHandItemId?: string; // Reference to off-hand weapon
  isActive: boolean; // Is this the currently active weapon set?
} 