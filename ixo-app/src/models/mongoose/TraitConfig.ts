import mongoose from 'mongoose';
import type { TraitConfig } from '@/types/config/trait';
import { LocalizeTextSchema } from './common';

const TraitConfigSchema = new mongoose.Schema<TraitConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

export const TraitConfigModel = mongoose.models.TraitConfig || mongoose.model<TraitConfig>('TraitConfig', TraitConfigSchema);
