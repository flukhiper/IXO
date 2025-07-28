import mongoose from 'mongoose';
import type { DamageScaleConfig } from '@/types/config/damageScale';
import { LocalizeTextSchema } from './common';

const DamageScaleConfigSchema = new mongoose.Schema<DamageScaleConfig>({
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
  multiplier: { type: Number, required: true },
  isSystem: { type: Boolean, required: true }
}, { versionKey: false, timestamps: true });

DamageScaleConfigSchema.index({ id: 1 }, { unique: true });
DamageScaleConfigSchema.index({ gameSystemId: 1 });
DamageScaleConfigSchema.index({ ownerId: 1 }); 

export const DamageScaleConfigModel = mongoose.models.DamageScaleConfig || mongoose.model<DamageScaleConfig>('DamageScaleConfig', DamageScaleConfigSchema);
