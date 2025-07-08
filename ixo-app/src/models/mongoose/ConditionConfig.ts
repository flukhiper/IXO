import mongoose from 'mongoose';
import type { ConditionConfig } from '@/types/config/condition';
import { LocalizeTextSchema } from './common';

const ConditionConfigSchema = new mongoose.Schema<ConditionConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

export const ConditionConfigModel = mongoose.models.ConditionConfig || mongoose.model<ConditionConfig>('ConditionConfig', ConditionConfigSchema);
