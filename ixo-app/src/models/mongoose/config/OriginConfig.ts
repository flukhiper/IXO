import mongoose from 'mongoose';
import type { OriginConfig } from '@/types/config/origin';
import { EffectConfigSchema, LocalizeTextSchema } from './common';

const SpecialtySchema = new mongoose.Schema({
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema, required: true }
}, { _id: false });

const OriginConfigSchema = new mongoose.Schema<OriginConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ] },
  icon: { type: String },
  specialty: { type: SpecialtySchema },
  effects: { type: [ EffectConfigSchema ] },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date }
}, { versionKey: false, timestamps: true });

export const OriginConfigModel = mongoose.models.OriginConfig || mongoose.model<OriginConfig>('OriginConfig', OriginConfigSchema);
