import mongoose from 'mongoose';
import type { StatConfig } from '@/types/config/stat';
import { LocalizeTextSchema } from './common';

const StatConfigSchema = new mongoose.Schema<StatConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

export const StatConfigModel = mongoose.models.StatConfig || mongoose.model<StatConfig>('StatConfig', StatConfigSchema);
