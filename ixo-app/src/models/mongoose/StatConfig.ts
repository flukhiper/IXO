import mongoose from 'mongoose';
import type { StatConfig } from '@/types/config/stat';
import { STAT_TYPE } from '@/constants/config/stat';
import { LocalizeTextSchema } from './common';

const StatConfigSchema = new mongoose.Schema<StatConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  abbreviation: { type: String, required: true },
  tags: { type: [ String ] },
  icon: { type: String },
  type: { type: String, enum: Object.values(STAT_TYPE), required: true },
  isSystem: { type: Boolean, required: true },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true }
}, { versionKey: false, timestamps: true });

export const StatConfigModel = mongoose.models.StatConfig || mongoose.model<StatConfig>('StatConfig', StatConfigSchema);
