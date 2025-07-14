import mongoose from 'mongoose';
import type { CharacterGearSlot, CharacterWeaponSet } from '@/types/runtime/character/CharacterGear';

const characterGearSlotSchema = new mongoose.Schema<CharacterGearSlot>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  characterId: {
    type: String,
    required: true
  },
  slotType: {
    type: String,
    required: true,
    enum: [ 'apparel', 'accessory', 'backpack', 'utility' ]
  },
  itemConfigId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const characterWeaponSetSchema = new mongoose.Schema<CharacterWeaponSet>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  characterId: {
    type: String,
    required: true
  },
  setName: {
    type: String,
    required: true
  },
  mainHandItemId: {
    type: String,
    required: false
  },
  offHandItemId: {
    type: String,
    required: false
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

// Create indexes for efficient queries
characterGearSlotSchema.index({ characterId: 1 });
characterGearSlotSchema.index({ slotType: 1 });
characterGearSlotSchema.index({ characterId: 1, slotType: 1 });

characterWeaponSetSchema.index({ characterId: 1 });
characterWeaponSetSchema.index({ isActive: 1 });
characterWeaponSetSchema.index({ characterId: 1, isActive: 1 });

export const CharacterGearSlotModel = mongoose.model<CharacterGearSlot>('CharacterGearSlot', characterGearSlotSchema);
export const CharacterWeaponSetModel = mongoose.model<CharacterWeaponSet>('CharacterWeaponSet', characterWeaponSetSchema); 