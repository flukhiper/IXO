import mongoose from 'mongoose';
import type { ClassConfig } from '@/types/config/class';
import { CLASS_ROLE_TYPE, MAX_CLASS_GAIN_LEVEL } from '@/constants/config/class';
import { LocalizeTextSchema, SkillSelectionRuleSchema } from './common';

// ClassGain sub-schema
const ClassGainSchema = new mongoose.Schema({
  proficiencyPoints: { type: Number, default: undefined },
  statModifierChoice: {
    statIds: { type: [ String ], default: undefined },
    numberOfSelections: { type: Number, required: true }
  },
  skillSelectionRule: { type: [ SkillSelectionRuleSchema ], default: undefined }
}, { _id: false });

// ClassGainLevel: "1" to "12" as string keys
const gainShape = Object.fromEntries(MAX_CLASS_GAIN_LEVEL.map(key => [ key, { type: ClassGainSchema, default: undefined } ]));

const ClassConfigSchema = new mongoose.Schema<ClassConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] },
  icon: { type: String },
  thumbnail: { type: String },
  roles: { type: [ String ], enum: Object.keys(CLASS_ROLE_TYPE), required: true, default: [] },
  gain: { type: gainShape, required: true },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date }
}, { versionKey: false, timestamps: true });

ClassConfigSchema.index({ id: 1 }, { unique: true });
ClassConfigSchema.index({ gameSystemId: 1 });
ClassConfigSchema.index({ ownerId: 1 }); 

export const ClassConfigModel = mongoose.models.ClassConfig || mongoose.model<ClassConfig>('ClassConfig', ClassConfigSchema); 