import mongoose from 'mongoose';
import type { ClassConfig } from '@/types/config/class';
import { EffectConfigSchema, LocalizeTextSchema } from './common';
import { CLASS_TYPE, ARCHETYPE_ROLE_TYPE } from '@/constants/config/class';

// New sub-schemas for choices and gain config
const StatModifierChoiceSchema = new mongoose.Schema({
  statId: { type: String },
  includeTags: { type: [ String ], default: [] },
  excludeTags: { type: [ String ], default: [] }
}, { _id: false });
const AttributeModifierChoiceSchema = new mongoose.Schema({
  attributeId: { type: String },
  includeTags: { type: [ String ], default: [] },
  excludeTags: { type: [ String ], default: [] }
}, { _id: false });
const SkillGainChoiceSchema = new mongoose.Schema({
  skillId: { type: String },
  tier: { type: Number },
  skillType: { type: String },
  classId: { type: String },
  roleId: { type: String },
  includedTags: { type: [ String ], default: [] },
  excludedTags: { type: [ String ], default: [] }
}, { _id: false });
const ActionGainChoiceSchema = new mongoose.Schema({
  actionId: { type: String },
  includedTags: { type: [ String ], default: [] },
  excludedTags: { type: [ String ], default: [] }
}, { _id: false });

const ClassGainConfigSchema = new mongoose.Schema({
  statModifier: {
    choices: { type: [ StatModifierChoiceSchema ], default: [] },
    choice: { type: Number },
    value: { type: Number }
  },
  attributeModifier: {
    choices: { type: [ AttributeModifierChoiceSchema ], default: [] },
    choice: { type: Number },
    baseValue: mongoose.Schema.Types.Mixed,
    formula: { type: String }
  },
  skillGain: {
    choices: { type: [ SkillGainChoiceSchema ], default: [] },
    choice: { type: Number }
  },
  actionGain: {
    choices: { type: [ ActionGainChoiceSchema ], default: [] },
    choice: { type: Number }
  },
  effects: { type: [ EffectConfigSchema ], default: [] },
  proficiencyPoint: { type: Number, default: 0 }
}, { _id: false });

const ClassConfigSchema = new mongoose.Schema<ClassConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] },
  icon: { type: String },
  class: { type: String, enum: Object.values(CLASS_TYPE), required: true },
  role: { type: String, enum: Object.values(ARCHETYPE_ROLE_TYPE), required: true },
  progression: { type: Map, of: ClassGainConfigSchema, required: true },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date }
}, { versionKey: false, timestamps: true });

export const ClassConfigModel = mongoose.models.ClassConfig || mongoose.model<ClassConfig>('ClassConfig', ClassConfigSchema); 