import mongoose from 'mongoose';
import type { DowntimeConfig } from '@/types/config/downtime';
import { LocalizeTextSchema } from './common';

const DowntimeConfigSchema = new mongoose.Schema<DowntimeConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

export const DowntimeConfigModel = mongoose.models.DowntimeConfig || mongoose.model<DowntimeConfig>('DowntimeConfig', DowntimeConfigSchema);
