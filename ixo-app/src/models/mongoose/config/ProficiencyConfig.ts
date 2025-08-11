import mongoose from 'mongoose';
import type { ProficiencyConfig } from '@/types/config/proficiency';
import { MAX_PROFICIENCY_GAIN_LEVEL } from '@/constants/config/proficiency';
import { ActionSelectionRuleSchema, baseConfigFields, EffectSchema } from './common';

// ProficiencyGain sub-schema
const ProficiencyGainSchema = new mongoose.Schema({
  actionSelectionRule: { type: [ ActionSelectionRuleSchema ] },
  effectSelectionRule: { type: [ EffectSchema ] }
}, { _id: false });

const gainShape = Object.fromEntries(MAX_PROFICIENCY_GAIN_LEVEL.map(key => [ key, { type: ProficiencyGainSchema } ]));

const ProficiencyConfigSchema = new mongoose.Schema<ProficiencyConfig>({
  ...baseConfigFields,
  gain: { type: gainShape, required: true }
}, { versionKey: false, timestamps: true });

ProficiencyConfigSchema.index({ gameSystemId: 1 });
ProficiencyConfigSchema.index({ ownerId: 1 });

export const ProficiencyConfigModel = mongoose.models.ProficiencyConfig || mongoose.model<ProficiencyConfig>('ProficiencyConfig', ProficiencyConfigSchema);
