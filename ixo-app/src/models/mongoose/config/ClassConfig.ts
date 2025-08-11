import mongoose from 'mongoose';
import type { ClassConfig } from '@/types/config/class';
import { MAX_CLASS_GAIN_LEVEL } from '@/constants/config/class';
import { ActionSelectionRuleSchema, baseConfigFields, DowntimeSelectionRuleSchema, EffectSelectionRuleSchema, SkillSelectionRuleSchema } from './common';

// ClassGain sub-schema
const ClassGainSchema = new mongoose.Schema({
  proficiencyPoints: { type: Number },
  statModifierChoice: {
    statIds: { type: [ String ] },
    numberOfSelections: { type: Number, required: true }
  },
  skillSelectionRule: { type: [ SkillSelectionRuleSchema ] },
  actionSelectionRule: { type: [ ActionSelectionRuleSchema ] },
  downtimeSelectionRule: { type: [ DowntimeSelectionRuleSchema ] },
  effectSelectionRule: { type: [ EffectSelectionRuleSchema ] }
}, { _id: false });

// ClassGainLevel: "1" to "12" as string keys
const gainShape = Object.fromEntries(MAX_CLASS_GAIN_LEVEL.map(key => [ key, { type: ClassGainSchema } ]));

const ClassConfigSchema = new mongoose.Schema<ClassConfig>({
  ...baseConfigFields,
  gain: { type: gainShape, required: true }
}, { versionKey: false, timestamps: true });

ClassConfigSchema.index({ gameSystemId: 1 });
ClassConfigSchema.index({ ownerId: 1 }); 

export const ClassConfigModel = mongoose.models.ClassConfig || mongoose.model<ClassConfig>('ClassConfig', ClassConfigSchema); 