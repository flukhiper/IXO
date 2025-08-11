import mongoose from 'mongoose';
import type { DamageScaleConfig } from '@/types/config/damageScale';
import { baseConfigFields } from './common';

const DamageScaleConfigSchema = new mongoose.Schema<DamageScaleConfig>({
  ...baseConfigFields,
  multiplier: { type: Number, required: true }
}, { versionKey: false, timestamps: true });

DamageScaleConfigSchema.index({ gameSystemId: 1 });
DamageScaleConfigSchema.index({ ownerId: 1 }); 

export const DamageScaleConfigModel = mongoose.models.DamageScaleConfig || mongoose.model<DamageScaleConfig>('DamageScaleConfig', DamageScaleConfigSchema);
