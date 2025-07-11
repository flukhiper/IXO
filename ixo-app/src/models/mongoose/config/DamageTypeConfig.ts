import mongoose from 'mongoose';
import type { DamageTypeConfig } from '@/types/config/damageType';
import { LocalizeTextSchema } from './common';

const DamageTypeConfigSchema = new mongoose.Schema<DamageTypeConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  isPhysical: { type: Boolean, required: true },
  tags: { type: [ String ] },
  icon: { type: String },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true }
}, { versionKey: false, timestamps: true });

export const DamageTypeConfigModel = mongoose.models.DamageTypeConfig || mongoose.model<DamageTypeConfig>('DamageTypeConfig', DamageTypeConfigSchema); 