import mongoose from 'mongoose';
import type { DamageTypeConfig } from '@/types/config/damageType';
import { baseConfigFields } from './common';

const DamageTypeConfigSchema = new mongoose.Schema<DamageTypeConfig>({
  ...baseConfigFields,
  isPhysical: { type: Boolean, required: true }
}, { versionKey: false, timestamps: true });

export const DamageTypeConfigModel = mongoose.models.DamageTypeConfig || mongoose.model<DamageTypeConfig>('DamageTypeConfig', DamageTypeConfigSchema); 