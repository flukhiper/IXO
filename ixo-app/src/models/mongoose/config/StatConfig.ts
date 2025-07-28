import mongoose from 'mongoose';
import type { StatConfig } from '@/types/config/stat';
import { LocalizeTextSchema } from './common';

const StatConfigSchema = new mongoose.Schema<StatConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: { type: String },
  thumbnail: { type: String },
  tags: { type: [ String ], default: [] },
  ownerId: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  gameSystemId: { type: String, required: true },
  abbreviation: { type: String, required: true },
  isSystem: { type: Boolean, required: true }
}, { versionKey: false, timestamps: true });

StatConfigSchema.index({ id: 1 }, { unique: true });
StatConfigSchema.index({ gameSystemId: 1 });
StatConfigSchema.index({ ownerId: 1 });

export const StatConfigModel = mongoose.models.StatConfig || mongoose.model<StatConfig>('StatConfig', StatConfigSchema);
