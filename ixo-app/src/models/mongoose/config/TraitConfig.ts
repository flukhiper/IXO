import mongoose from 'mongoose';
import type { TraitConfig } from '@/types/config/trait';
import { EffectConfigSchema, LocalizeTextSchema } from './common';

const TraitConfigSchema = new mongoose.Schema<TraitConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: { type: String },
  tags: { type: [ String ] },
  isFullTrait: { type: Boolean, required: true },
  effects: { type: [ EffectConfigSchema ], required: true },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true }
}, { versionKey: false, timestamps: true });

export const TraitConfigModel = mongoose.models.TraitConfig || mongoose.model<TraitConfig>('TraitConfig', TraitConfigSchema);
