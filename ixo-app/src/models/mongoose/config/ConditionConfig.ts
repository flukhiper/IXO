import mongoose from 'mongoose';
import type { ConditionConfig } from '@/types/config/condition';
import { baseConfigFields, EffectSchema } from './common';
import { CONDITION_STACK_TYPE } from '@/constants/config/condition';

const ConditionStackSchema = new mongoose.Schema({
  type: { type: String, enum: Object.values(CONDITION_STACK_TYPE), required: true },
  id: { type: String, required: true },
  priority: { type: Number }
}, { _id: false });

const ConditionDamageSchema = new mongoose.Schema({
  damageTypeId: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modifierFormula: { type: String }
}, { _id: false });

const ConditionRestoreSchema = new mongoose.Schema({
  attributeId: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modifierFormula: { type: String }
}, { _id: false });

const ConditionConfigSchema = new mongoose.Schema<ConditionConfig>({
  ...baseConfigFields,
  stack: { type: ConditionStackSchema, required: true },
  duration: { type: Number },
  damage: { type: [ ConditionDamageSchema ] },
  restore: { type: [ ConditionRestoreSchema ] },
  effects: { type: [ EffectSchema ] }
}, { versionKey: false, timestamps: true });

ConditionConfigSchema.index({ gameSystemId: 1 });
ConditionConfigSchema.index({ ownerId: 1 }); 

export const ConditionConfigModel = mongoose.models.ConditionConfig || mongoose.model<ConditionConfig>('ConditionConfig', ConditionConfigSchema);
