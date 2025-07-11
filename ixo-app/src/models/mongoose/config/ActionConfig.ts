import mongoose from 'mongoose';
import type { ActionConfig } from '@/types/config/action';
import { ACTION_TYPE } from '@/constants/config/action';
import { EffectConfigSchema, LocalizeTextSchema } from './common';

const ActionConfigSchema = new mongoose.Schema<ActionConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  type: { type: String, enum: Object.values(ACTION_TYPE), required: true },
  icon: { type: String },
  tags: { type: [ String ], default: [] },
  levelConfigs: { type: Map, of: [ EffectConfigSchema ] },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true }
}, { versionKey: false, timestamps: true });

export const ActionConfigModel = mongoose.models.ActionConfig || mongoose.model<ActionConfig>('ActionConfig', ActionConfigSchema); 