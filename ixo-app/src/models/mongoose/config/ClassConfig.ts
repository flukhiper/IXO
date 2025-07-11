import mongoose from 'mongoose';
import type { ClassConfig } from '@/types/config/class';
import { LocalizeTextSchema, EffectConfigSchema } from './common';
import { CLASS_TYPE, ARCHETYPE_ROLE_TYPE } from '@/constants/config/class';

const ClassConfigSchema = new mongoose.Schema<ClassConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] },
  icon: { type: String },
  class: { type: String, enum: Object.values(CLASS_TYPE), required: true },
  role: { type: String, enum: Object.values(ARCHETYPE_ROLE_TYPE), required: true },
  effects: { type: [ EffectConfigSchema ], default: [] },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date }
}, { versionKey: false, timestamps: true });

export const ClassConfigModel = mongoose.models.ClassConfig || mongoose.model<ClassConfig>('ClassConfig', ClassConfigSchema); 