import mongoose from 'mongoose';
import type { DamageScaleConfig } from '@/types/config/damageScale';
import { LocalizeTextSchema } from './common';

const DamageScaleConfigSchema = new mongoose.Schema<DamageScaleConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  multiplier: { type: Number, required: true },
  tags: { type: [ String ] },
  icon: { type: String },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true }
}, { versionKey: false, timestamps: true });

export const DamageScaleConfigModel = mongoose.models.DamageScaleConfig || mongoose.model<DamageScaleConfig>('DamageScaleConfig', DamageScaleConfigSchema);
