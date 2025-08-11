import mongoose from 'mongoose';
import type { LocalizeText } from '@/types/config/common';
import type { Effect } from '@/types/config/effect';
import type { ConstantValue, DiceValue } from '@/types/config/base';
import { ACTION_TYPE, MAX_ACTION_LEVEL, ACTION_ARCHETYPE } from '@/constants/config/action';
import { EFFECT_TYPE } from '@/constants/config/effect';
import { VALUE_TYPE } from '@/constants/config/base';
import { MAX_SKILL_TIER, SKILL_ARCHETYPE, SKILL_TYPE } from '@/constants/config/skill';

export const EffectSchema = new mongoose.Schema<Effect>({
  type: { type: String, enum: Object.values(EFFECT_TYPE) }
}, { _id: false });

// Sub-schema for DowntimeSelectionRule
export const DowntimeSelectionRuleSchema = new mongoose.Schema({
  downtimeIds: { type: [ String ] },
  numberOfSelections: { type: Number, required: true }
}, { _id: false });

// Sub-schema for ActionSelectionRule
export const ActionSelectionRuleSchema = new mongoose.Schema({
  actionIds: { type: [ String ] },
  filterOptions: {
    types: { type: [ String ], enum: Object.values(ACTION_TYPE) },
    archetypes: { type: [ String ], enum: Object.values(ACTION_ARCHETYPE) },
    commandLevels: { type: [ Number ], enum: MAX_ACTION_LEVEL },
    proficiencyIds: { type: [ String ] },
    includeTags: { type: [ String ] },
    excludeTags: { type: [ String ] }
  },
  numberOfSelections: { type: Number, required: true }
}, { _id: false });

// Sub-schema for SkillSelectionRule
export const SkillSelectionRuleSchema = new mongoose.Schema({
  skillIds: { type: [ String ] },
  filterOptions: {
    types: { type: [ String ], enum: Object.values(SKILL_TYPE) },
    archetypes: { type: [ String ], enum: Object.values(SKILL_ARCHETYPE) },
    tiers: { type: [ Number ], enum: MAX_SKILL_TIER },
    classIds: { type: [ String ] },
    includeTags: { type: [ String ] },
    excludeTags: { type: [ String ] }
  },
  numberOfSelections: { type: Number, required: true }
}, { _id: false });

// Sub-schema for EffectSelectionRule
export const EffectSelectionRuleSchema = new mongoose.Schema({
  effects: { type: [ EffectSchema ], required: true },
  numberOfSelections: { type: Number, required: true }
}, { _id: false });

export const DiceValueSchema = new mongoose.Schema<DiceValue>({
  type: { type: String, enum: [ VALUE_TYPE.DICE ] },
  formula: { type: String, required: true }
}, { _id: false });

export const ConstantValueSchema = new mongoose.Schema<ConstantValue>({
  type: { type: String, enum: [ VALUE_TYPE.CONSTANT ] },
  value: { type: Number, required: true }
}, { _id: false });

export const LocalizeTextSchema = new mongoose.Schema<LocalizeText>({
  en: { type: String, required: true },
  th: { type: String, required: true }
}, {
  _id: false
});

export const baseConfigFields = {
  id: { type: String, required: true, unique: true },

  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },

  icon: { type: String },
  thumbnail: { type: String },

  tags: { type: [ String ], default: [] },

  ownerId: { type: String, required: true },
  gameSystemId: { type: String, required: true },
  isSystem: { type: Boolean, required: true },

  createdAt: { type: Date },
  updatedAt: { type: Date }
};