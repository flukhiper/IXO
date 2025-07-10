import mongoose from 'mongoose';
import type { CharacterConfig } from '@/types/config/character';

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
  includedSkillTags: { type: [ String ] },
  excludedSkillTags: { type: [ String ] },
  numberOfSkill: { type: Number, required: true }
}, { _id: false });

const ActionGainSchema = new mongoose.Schema({
  includedActionTags: { type: [ String ] },
  excludedActionTags: { type: [ String ] },
  numberOfAction: { type: Number, required: true }
}, { _id: false });

const CharacterGainConfigSchema = new mongoose.Schema({
  statModifier: { type: [ StatModifierSchema ], default: [] },
  attributeModifier: { type: [ AttributeModifierSchema ], default: [] },
  proficiencyPoint: { type: Number, required: true },
  skillGain: { type: [ SkillGainSchema ], default: [] },
  actionGain: { type: [ ActionGainSchema ], default: [] }
}, { _id: false });

const EquipmentRulesSchema = new mongoose.Schema({
  numberOfWeaponSet: { type: Number, required: true },
  numberOfMainHand: { type: mongoose.Schema.Types.Mixed, required: true },
  numberOfOffHand: { type: mongoose.Schema.Types.Mixed, required: true },
  numberOfApparel: { type: mongoose.Schema.Types.Mixed, required: true },
  numberOfAccessory: { type: mongoose.Schema.Types.Mixed, required: true },
  numberOfBackpack: { type: mongoose.Schema.Types.Mixed, required: true },
  numberOfUtility: { type: mongoose.Schema.Types.Mixed, required: true }
}, { _id: false });

const CharacterConfigSchema = new mongoose.Schema<CharacterConfig>({
  startStatPoint: { type: Number, required: true },
  startOriginChoice: { type: [ String ], required: true },
  startTraitChoice: { type: [ String ], required: true },
  startClassChoice: { type: [ String ], required: true },
  startGold: { type: Number, required: true },
  equipmentRules: { type: EquipmentRulesSchema, required: true },
  progression: { type: Map, of: CharacterGainConfigSchema, required: true },
  shortDowntimeActivitySlots: { type: Number, required: true },
  longDowntimeActivitySlots: { type: Number, required: true },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

export const CharacterConfigModel = mongoose.models.CharacterConfig || mongoose.model<CharacterConfig>('CharacterConfig', CharacterConfigSchema); 