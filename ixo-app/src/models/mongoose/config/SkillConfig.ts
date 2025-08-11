import mongoose from 'mongoose';
import type { ClassSkillConfig, CombatSkillConfig, GeneralSkillConfig, SkillConfig } from '@/types/config/skill';
import { ActionSelectionRuleSchema, baseConfigFields, DowntimeSelectionRuleSchema, EffectSchema } from './common';
import { MAX_SKILL_TIER, SKILL_ARCHETYPE, SKILL_STACK_TYPE, SKILL_TYPE } from '@/constants/config/skill';

const SkillStackSchema = new mongoose.Schema({
  type: { type: String, enum: Object.values(SKILL_STACK_TYPE), required: true },
  id: { type: String, required: true },
  priority: { type: Number }
}, { _id: false });

// Base fields for all skills
const baseSkillFields = {
  ...baseConfigFields,
  archetype: { type: String, enum: Object.values(SKILL_ARCHETYPE), required: true },
  stack: { type: SkillStackSchema, required: true },

  usedSlots: { type: Number },

  actionSelectionRule: { type: [ ActionSelectionRuleSchema ] },
  downtimeSelectionRule: { type: [ DowntimeSelectionRuleSchema ] },
  effectSelectionRule: { type: [ EffectSchema ] }
};

// Discriminator schemas for each skill type
const GeneralSkillSchema = new mongoose.Schema({
  ...baseSkillFields,
  tier: { type: Number, enum: MAX_SKILL_TIER, required: true },
  usedSlots: { type: Number, required: true }
});

const ClassSkillSchema = new mongoose.Schema({
  ...baseSkillFields,
  classIds: { type: [ String ], required: true },
  tier: { type: Number, enum: MAX_SKILL_TIER, required: true },
  usedSlots: { type: Number, required: true }
});

const CombatSkillSchema = new mongoose.Schema({
  ...baseSkillFields,
  tier: { type: Number, enum: MAX_SKILL_TIER, required: true },
  usedSlots: { type: Number, required: true }
});

// Main SkillConfig schema using discriminators
const SkillConfigSchema = new mongoose.Schema<SkillConfig>(baseSkillFields, { versionKey: false, timestamps: true, discriminatorKey: 'type' });

SkillConfigSchema.index({ gameSystemId: 1 });
SkillConfigSchema.index({ ownerId: 1 });

export const SkillConfigModel = mongoose.models.SkillConfig || mongoose.model<SkillConfig>('SkillConfig', SkillConfigSchema);

// Attach and export discriminators
export const GeneralSkillModel = SkillConfigModel.discriminator<GeneralSkillConfig>(SKILL_TYPE.GENERAL, GeneralSkillSchema);
export const ClassSkillModel = SkillConfigModel.discriminator<ClassSkillConfig>(SKILL_TYPE.CLASS, ClassSkillSchema);
export const CombatSkillModel = SkillConfigModel.discriminator<CombatSkillConfig>(SKILL_TYPE.COMBAT, CombatSkillSchema);
