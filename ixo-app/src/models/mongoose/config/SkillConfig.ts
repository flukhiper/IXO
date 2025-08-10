import mongoose from 'mongoose';
import type { ClassSkillConfig, GeneralSkillConfig, RoleSkillConfig, SkillConfig } from '@/types/config/skill';
import { MAX_SKILL_TIER, SKILL_STACK_TYPE, SKILL_TYPE } from '@/constants/config/skill';
import { CLASS_ROLE_TYPE } from '@/constants/config/class';
import { ActionSelectionRuleSchema, DowntimeSelectionRuleSchema, EffectConfigSchema, LocalizeTextSchema } from './common';

// Base fields for all skills
const baseFields = {
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
  type: { type: String, enum: Object.values(SKILL_TYPE), required: true },
  usedSlots: { type: Number, required: true },
  stackId: { type: String, required: true },
  stackType: { type: String, enum: Object.values(SKILL_STACK_TYPE), required: true },
  stackPriority: { type: Number },
  actionSelectionRule: { type: [ ActionSelectionRuleSchema ], default: undefined },
  downtimeSelectionRule: { type: [ DowntimeSelectionRuleSchema ], default: undefined },
  effectSelectionRule: { type: [ EffectConfigSchema ], default: undefined }
};

// Discriminator schemas for each skill type
const GeneralSkillSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ SKILL_TYPE.GENERAL ], required: true },
  tier: { type: Number, enum: MAX_SKILL_TIER, required: true }
});

const ClassSkillSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ SKILL_TYPE.CLASS ], required: true },
  classIds: { type: [ String ], required: true },
  tier: { type: Number, enum: MAX_SKILL_TIER, required: true }
});

const RoleSkillSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ SKILL_TYPE.ROLE ], required: true },
  role: { type: String, enum: Object.keys(CLASS_ROLE_TYPE), required: true },
  tier: { type: Number, enum: MAX_SKILL_TIER, required: true }
});

// Main SkillConfig schema using discriminators
const SkillConfigSchema = new mongoose.Schema(baseFields, { versionKey: false, timestamps: true, discriminatorKey: 'type' });

SkillConfigSchema.index({ id: 1 }, { unique: true });
SkillConfigSchema.index({ gameSystemId: 1 });
SkillConfigSchema.index({ ownerId: 1 });

export const SkillConfigModel = mongoose.models.SkillConfig || mongoose.model<SkillConfig>('SkillConfig', SkillConfigSchema);

// Attach and export discriminators
export const GeneralSkillModel = SkillConfigModel.discriminator<GeneralSkillConfig>('general', GeneralSkillSchema);
export const ClassSkillModel = SkillConfigModel.discriminator<ClassSkillConfig>('class', ClassSkillSchema);
export const RoleSkillModel = SkillConfigModel.discriminator<RoleSkillConfig>('role', RoleSkillSchema);
