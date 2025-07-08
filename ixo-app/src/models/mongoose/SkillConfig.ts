import mongoose from 'mongoose';
import type { SkillConfig } from '@/types/config/skill';
import { LocalizeTextSchema } from './common';

const SkillConfigSchema = new mongoose.Schema<SkillConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

export const SkillConfigModel = mongoose.models.SkillConfig || mongoose.model<SkillConfig>('SkillConfig', SkillConfigSchema);
