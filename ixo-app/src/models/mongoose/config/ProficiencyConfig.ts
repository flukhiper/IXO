import mongoose from 'mongoose';
import type { ProficiencyConfig } from '@/types/config/proficiency';
import { MAX_PROFICIENCY_GAIN_LEVEL } from '@/constants/config/proficiency';
import { ActionSelectionRuleSchema, EffectConfigSchema, LocalizeTextSchema } from './common';

// ProficiencyGain sub-schema
const ProficiencyGainSchema = new mongoose.Schema({
  actionSelectionRule: { type: [ ActionSelectionRuleSchema ], default: undefined },
  effectSelectionRule: { type: [ EffectConfigSchema ], default: undefined }
}, { _id: false });

const gainShape = Object.fromEntries(MAX_PROFICIENCY_GAIN_LEVEL.map(key => [ key, { type: ProficiencyGainSchema, default: undefined } ]));

const ProficiencyConfigSchema = new mongoose.Schema<ProficiencyConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] },
  thumbnail: { type: String },
  icon: { type: String },
  gain: { type: gainShape, required: true },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date }
}, { versionKey: false, timestamps: true });

ProficiencyConfigSchema.index({ id: 1 }, { unique: true });
ProficiencyConfigSchema.index({ gameSystemId: 1 });
ProficiencyConfigSchema.index({ ownerId: 1 });

export const ProficiencyConfigModel = mongoose.models.ProficiencyConfig || mongoose.model<ProficiencyConfig>('ProficiencyConfig', ProficiencyConfigSchema);
