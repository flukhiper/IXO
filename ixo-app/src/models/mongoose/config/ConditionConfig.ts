import mongoose from 'mongoose';
import type { ConditionConfig } from '@/types/config/condition';
import { LocalizeTextSchema } from './common';
import { CONDITION_STACK_TYPE } from '@/constants/config/condition';

const ConditionDamageSchema = new mongoose.Schema({
  type: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modifierFormula: { type: String }
}, { _id: false });

const ConditionRestoreSchema = new mongoose.Schema({
  attributeId: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modifierFormula: { type: String }
}, { _id: false });

const ConditionConfigSchema = new mongoose.Schema<ConditionConfig>({
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
  isSystem: { type: Boolean, required: true },
  stackId: { type: String, required: true },
  stackType: { type: String, enum: Object.values(CONDITION_STACK_TYPE), required: true },
  stackPriority: { type: Number },
  duration: { type: Number },
  damage: { type: [ ConditionDamageSchema ], default: [] },
  restore: { type: [ ConditionRestoreSchema ], default: [] },
  effects: { type: [ mongoose.Schema.Types.Mixed ], default: [] }
}, { versionKey: false, timestamps: true });

ConditionConfigSchema.index({ id: 1 }, { unique: true });
ConditionConfigSchema.index({ gameSystemId: 1 });
ConditionConfigSchema.index({ ownerId: 1 }); 

export const ConditionConfigModel = mongoose.models.ConditionConfig || mongoose.model<ConditionConfig>('ConditionConfig', ConditionConfigSchema);
