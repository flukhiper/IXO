import mongoose from 'mongoose';
import type { SkillConfig } from '@/types/config/skill';
import { SKILL_TYPE, SKILL_STACK_TYPE } from '@/constants/config/skill';
import { EffectConfigSchema, LocalizeTextSchema } from './common';

const StackSchema = new mongoose.Schema({
  id: { type: String, required: true },
  type: { type: String, enum: Object.values(SKILL_STACK_TYPE), required: true },
  priority: { type: Number }
}, { _id: false });

const RequiredStatSchema = new mongoose.Schema({
  statId: { type: String, required: true },
  conditionFormulas: mongoose.Schema.Types.Mixed
}, { _id: false });

const SkillConfigSchema = new mongoose.Schema<SkillConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  type: { type: String, enum: Object.values(SKILL_TYPE), required: true },
  icon: { type: String },
  tags: { type: [ String ] },
  stack: { type: StackSchema, required: true },
  tier: { type: Number, required: true },
  requiredCharacterLevel: { type: Number, required: true },
  requiredStats: { type: [ RequiredStatSchema ], default: [] },
  requiredClassRole: { type: [ String ], default: [] },
  requiredClassType: { type: [ String ], default: [] },
  requiredClassIds: { type: [ String ], default: [] },
  requiredSkillIds: { type: [ String ], default: [] },
  requiredTraitIds: { type: [ String ], default: [] },
  effects: { type: [ EffectConfigSchema ], default: [] },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true }
}, { versionKey: false, timestamps: true });

export const SkillConfigModel = mongoose.models.SkillConfig || mongoose.model<SkillConfig>('SkillConfig', SkillConfigSchema);
