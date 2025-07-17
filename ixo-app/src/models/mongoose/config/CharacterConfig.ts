import mongoose from 'mongoose';
import type { CharacterConfig } from '@/types/config/character';
import { LocalizeTextSchema } from './common';

const EquipmentRulesSchema = new mongoose.Schema({
  numberOfWeaponSet: { type: Number, required: true },
  numberOfApparel: { type: mongoose.Schema.Types.Mixed, required: true },
  numberOfAccessory: { type: mongoose.Schema.Types.Mixed, required: true },
  numberOfBackpack: { type: mongoose.Schema.Types.Mixed, required: true },
  numberOfUtility: { type: mongoose.Schema.Types.Mixed, required: true }
}, { _id: false });

const CharacterConfigSchema = new mongoose.Schema<CharacterConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  startStatPoint: { type: Number, required: true },
  startOriginChoice: { type: [ String ], required: true },
  startTraitChoice: { type: [ String ], required: true },
  startNumberOfTraitChoice: { type: Number, required: true },
  startClassChoice: { type: [ String ], required: true },
  startProficiencyPoint: { type: Number, required: true },
  startGold: { type: Number, required: true },
  startInventorySpace: {
    rows: { type: Number, required: true },
    columns: { type: Number, required: true }
  },
  equipmentRules: { type: EquipmentRulesSchema, required: true },
  maxLevel: { type: Number, required: true },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

// Indexes for efficient queries
CharacterConfigSchema.index({ id: 1 }, { unique: true });
CharacterConfigSchema.index({ gameSystemId: 1 });
CharacterConfigSchema.index({ tags: 1 });

export const CharacterConfigModel = mongoose.models.CharacterConfig || mongoose.model<CharacterConfig>('CharacterConfig', CharacterConfigSchema); 