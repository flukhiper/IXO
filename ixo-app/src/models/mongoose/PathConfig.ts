import mongoose from 'mongoose';
import type { PathConfig } from '@/types/config/path';
import { LocalizeTextSchema } from './common';

const PathConfigSchema = new mongoose.Schema<PathConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

export const PathConfigModel = mongoose.models.PathConfig || mongoose.model<PathConfig>('PathConfig', PathConfigSchema);
