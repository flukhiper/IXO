import mongoose from 'mongoose';
import type { ClassConfig } from '@/types/config/class';
import { EffectConfigSchema, LocalizeTextSchema } from './common';
import { CLASS_TYPE, ARCHETYPE_ROLE_TYPE } from '@/constants/config/class';

// Reuse sub-schemas from ProficiencyConfig
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
  tier: { type: Number },
  skillType: { type: String },
  classId: { type: String },
  roleId: { type: String },
  includedSkillTags: { type: [ String ] },
  excludedSkillTags: { type: [ String ] },
  numberOfSkill: { type: Number, required: true }
}, { _id: false });

const ActionGainSchema = new mongoose.Schema({
  includedActionTags: { type: [ String ] },
  excludedActionTags: { type: [ String ] },
  numberOfAction: { type: Number, required: true }
}, { _id: false });

const ClassGainConfigSchema = new mongoose.Schema({
  statModifier: { type: [ StatModifierSchema ], default: [] },
  attributeModifier: { type: [ AttributeModifierSchema ], default: [] },
  effects: { type: [ EffectConfigSchema ], default: [] },
  proficiencyPoint: { type: Number, default: 0 },
  skillGain: { type: [ SkillGainSchema ], default: [] },
  actionGain: { type: [ ActionGainSchema ], default: [] }
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