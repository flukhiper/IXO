import mongoose from 'mongoose';
import type { StatConfig } from '@/types/config/stat';
import { baseConfigFields } from './common';

const StatConfigSchema = new mongoose.Schema<StatConfig>({
  ...baseConfigFields,
  abbreviation: { type: String, required: true }
}, { versionKey: false, timestamps: true });

StatConfigSchema.index({ gameSystemId: 1 });
StatConfigSchema.index({ ownerId: 1 });

export const StatConfigModel = mongoose.models.StatConfig || mongoose.model<StatConfig>('StatConfig', StatConfigSchema);
