import mongoose from 'mongoose';
import type { ProficiencyConfig } from '@/types/config/proficiency';
import { LocalizeTextSchema } from './common';

const StatModifierSchema = new mongoose.Schema({
  statId: { type: String, required: true },
  value: { type: Number, required: true }
}, { _id: false });

const AttributeModifierSchema = new mongoose.Schema({
  attributeId: { type: String, required: true },
  baseValue: mongoose.Schema.Types.Mixed, // FixedValue | DiceValue
  formula: { type: String }
}, { _id: false });

const SkillGainSchema = new mongoose.Schema({
  includedSkillTags: { type: [ String ] },
  excludedSkillTags: { type: [ String ] },
  numberOfSkill: { type: Number, required: true }
}, { _id: false });

const ActionGainSchema = new mongoose.Schema({
  includedActionTags: { type: [ String ] },
  excludedActionTags: { type: [ String ] },
  numberOfAction: { type: Number, required: true }
}, { _id: false });

const ProficiencyGainConfigSchema = new mongoose.Schema({
  statModifier: { type: [ StatModifierSchema ], default: [] },
  attributeModifier: { type: [ AttributeModifierSchema ], default: [] },
  skillGain: { type: [ SkillGainSchema ], default: [] },
  actionGain: { type: [ ActionGainSchema ], default: [] }
}, { _id: false });

const ProficiencyConfigSchema = new mongoose.Schema<ProficiencyConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ] },
  icon: { type: String },
  progression: { type: Map, of: ProficiencyGainConfigSchema, required: true },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true }
}, { versionKey: false, timestamps: true });

export const ProficiencyConfigModel = mongoose.models.ProficiencyConfig || mongoose.model<ProficiencyConfig>('ProficiencyConfig', ProficiencyConfigSchema);
