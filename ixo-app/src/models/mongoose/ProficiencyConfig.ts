import mongoose from 'mongoose';
import type { ProficiencyConfig } from '@/types/config/proficiency';
import { LocalizeTextSchema } from './common';

const ProficiencyConfigSchema = new mongoose.Schema<ProficiencyConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

export const ProficiencyConfigModel = mongoose.models.ProficiencyConfig || mongoose.model<ProficiencyConfig>('ProficiencyConfig', ProficiencyConfigSchema);
