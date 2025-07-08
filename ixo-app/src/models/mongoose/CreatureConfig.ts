import mongoose from 'mongoose';
import type { CreatureConfig } from '@/types/config/creature';
import { LocalizeTextSchema } from './common';

const CreatureConfigSchema = new mongoose.Schema<CreatureConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

export const CreatureConfigModel = mongoose.models.CreatureConfig || mongoose.model<CreatureConfig>('CreatureConfig', CreatureConfigSchema);
