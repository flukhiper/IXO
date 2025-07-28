import mongoose from 'mongoose';
import type { LocalizeText } from '@/types/config/common';
import { CLASS_ROLE_TYPE } from '@/constants/config/class';
import { MAX_SKILL_TIER } from '@/constants/config/skill';

// Schema for localized text that allows any locale key with string value
export const LocalizeTextSchema = new mongoose.Schema<LocalizeText>({
  en: { type: String, required: true },
  th: { type: String, required: true }
}, {
  _id: false
});

export const EffectConfigSchema = new mongoose.Schema({
  name: { type: LocalizeTextSchema },
  description: { type: LocalizeTextSchema },
  type: { type: String, required: true }
  // Allow additional effect-specific fields
}, { _id: false, strict: false }); 

// Sub-schema for ActionSelectionRule
export const ActionSelectionRuleSchema = new mongoose.Schema({
  actionIds: { type: [ String ], default: undefined },
  proficiencyIds: { type: [ String ], default: undefined },
  commandLevels: { type: [ Number ], default: undefined },
  numberOfSelections: { type: Number, required: true }
}, { _id: false });

// SkillSelectionRule sub-schema
export const SkillSelectionRuleSchema = new mongoose.Schema({
  skillIds: { type: [ String ], default: undefined },
  filterOptions: {
    classIds: { type: [ String ], default: undefined },
    roles: { type: [ String ], enum: Object.keys(CLASS_ROLE_TYPE), default: undefined },
    tiers: { type: [ Number ], enum: Array.from({ length: MAX_SKILL_TIER }, (_, i) => i + 1), default: undefined },
    isGeneral: { type: Boolean, default: undefined },
    includeTags: { type: [ String ], default: undefined },
    excludeTags: { type: [ String ], default: undefined }
  },
  numberOfSelections: { type: Number, required: true }
}, { _id: false });

// Sub-schema for DowntimeSelectionRule
export const DowntimeSelectionRuleSchema = new mongoose.Schema({
  downtimeIds: { type: [ String ], default: undefined },
  numberOfSelections: { type: Number, required: true }
}, { _id: false });