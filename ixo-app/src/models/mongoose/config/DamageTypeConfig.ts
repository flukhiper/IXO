import mongoose from 'mongoose';
import type { DamageTypeConfig } from '@/types/config/damageType';
import { LocalizeTextSchema } from './common';

const DamageTypeConfigSchema = new mongoose.Schema<DamageTypeConfig>({
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
  isPhysical: { type: Boolean, required: true },
  isSystem: { type: Boolean, required: true }
}, { versionKey: false, timestamps: true });

DamageTypeConfigSchema.index({ id: 1 }, { unique: true });
DamageTypeConfigSchema.index({ gameSystemId: 1 });
DamageTypeConfigSchema.index({ ownerId: 1 }); 

export const DamageTypeConfigModel = mongoose.models.DamageTypeConfig || mongoose.model<DamageTypeConfig>('DamageTypeConfig', DamageTypeConfigSchema); 