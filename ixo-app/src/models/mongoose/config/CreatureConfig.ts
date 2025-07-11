import mongoose from 'mongoose';
import type { CreatureConfig } from '@/types/config/creature';
import { LocalizeTextSchema } from './common';

const AttributeOverrideSchema = new mongoose.Schema({
  attributeId: { type: String, required: true },
  baseValue: mongoose.Schema.Types.Mixed
}, { _id: false });

const CreatureConfigSchema = new mongoose.Schema<CreatureConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: { type: String },
  thumbnail: { type: String },
  tags: { type: [ String ] },
  threatLevel: { type: Number, required: true },
  originId: { type: String, required: true },
  statOverrides: { type: Map, of: Number },
  attributeOverrides: { type: [ AttributeOverrideSchema ] },
  resistances: { type: Map, of: String },
  actionIds: { type: [ String ] },
  skillIds: { type: [ String ] },
  conditionIds: { type: [ String ] },
  equipments: { type: Map, of: String },
  holdItems: { type: [ String ] },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true }
}, { versionKey: false, timestamps: true });

export const CreatureConfigModel = mongoose.models.CreatureConfig || mongoose.model<CreatureConfig>('CreatureConfig', CreatureConfigSchema);
