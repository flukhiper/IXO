import mongoose from 'mongoose';
import type { OriginConfig } from '@/types/config/origin';
import { EffectConfigSchema, LocalizeTextSchema } from './common';

const OriginConfigSchema = new mongoose.Schema<OriginConfig>({
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
  effectSelectionRule: { type: [ EffectConfigSchema ], default: undefined }
}, { versionKey: false, timestamps: true });

OriginConfigSchema.index({ id: 1 }, { unique: true });
OriginConfigSchema.index({ gameSystemId: 1 });
OriginConfigSchema.index({ ownerId: 1 });

export const OriginConfigModel = mongoose.models.OriginConfig || mongoose.model<OriginConfig>('OriginConfig', OriginConfigSchema);
