import mongoose from 'mongoose';
import type { ConditionConfig } from '@/types/config/condition';
import { LocalizeTextSchema } from './common';
import { CONDITION_STACK_TYPE } from '@/constants/config/condition';

const StackSchema = new mongoose.Schema({
  id: { type: String, required: true },
  type: { type: String, enum: Object.values(CONDITION_STACK_TYPE), required: true },
  priority: { type: Number }
}, { _id: false });

const ConditionConfigSchema = new mongoose.Schema<ConditionConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: { type: String },
  tags: { type: [ String ] },
  stack: { type: StackSchema, required: true },
  removeTicks: { type: mongoose.Schema.Types.Mixed },
  effects: { type: mongoose.Schema.Types.Mixed },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true }
}, { versionKey: false, timestamps: true });

export const ConditionConfigModel = mongoose.models.ConditionConfig || mongoose.model<ConditionConfig>('ConditionConfig', ConditionConfigSchema);
