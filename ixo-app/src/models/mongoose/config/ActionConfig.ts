import mongoose from 'mongoose';
import { baseConfigFields, EffectSchema } from './common';
import { ACTION_ARCHETYPE, ACTION_COST_TYPE, ACTION_OPTION, ACTION_RANGE_TYPE, ACTION_REQUIRED_ITEM_TYPE, ACTION_STACK_TYPE, ACTION_TYPE, ACTION_USAGE_TYPE, MAX_ACTION_LEVEL } from '@/constants/config/action';
import { ActionConfig, CombatArtActionConfig, CommandActionConfig } from '@/types/config/action';

const ActionRestoreSchema = new mongoose.Schema({
  attributeId: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modifierFormula: { type: String }
}, { _id: false });

const ActionDamageSchema = new mongoose.Schema({
  type: { type: String, enum: [ ACTION_OPTION.ACTION_DAMAGE, ACTION_OPTION.ITEM_DAMAGE, ACTION_OPTION.ITEM_DAMAGE_VALUE_ONLY ] },
  damageTypeId: { type: String },
  value: { type: mongoose.Schema.Types.Mixed },
  modifierFormula: { type: String }
}, { _id: false });

const ActionArmorClassSchema = new mongoose.Schema({
  type: { type: String, enum: [ ACTION_OPTION.ACTION_ARMOR_CLASS, ACTION_OPTION.ITEM_ARMOR_CLASS, ACTION_OPTION.ITEM_ARMOR_CLASS_VALUE_ONLY ] },
  value: { type: Number },
  modifierFormula: { type: String }
}, { _id: false });

const ActionRangeSchema = new mongoose.Schema({
  type: { type: String, enum: [ ...Object.values(ACTION_RANGE_TYPE), ACTION_OPTION.ITEM_RANGE ] },
  value: { type: Number }
}, { _id: false });

const BaseActionDetailSchema = new mongoose.Schema({
  focusPointsCost: { type: Number },
  movementSpeedCost: { type: Number },
  durabilityPointsCost: { type: Number },
  range: { type: ActionRangeSchema },
  hit: { type: mongoose.Schema.Types.Mixed, required: true },
  armorClass: { type: ActionArmorClassSchema },
  damage: { type: [ ActionDamageSchema ] },
  restore: { type: [ ActionRestoreSchema ] },
  effects: { type: [ EffectSchema ] }
}, { _id: false });

const levelShape = Object.fromEntries(MAX_ACTION_LEVEL.map(key => [ key, { type: BaseActionDetailSchema } ]));

const ActionStackSchema = new mongoose.Schema({
  type: { type: String, enum: Object.values(ACTION_STACK_TYPE), required: true },
  id: { type: String, required: true },
  priority: { type: Number }
}, { _id: false });

// Base fields for all actions
const baseActionFields = {
  ...baseConfigFields,
  archetype: { type: String, enum: Object.values(ACTION_ARCHETYPE), required: true },
  stack: { type: ActionStackSchema, required: true },

  usedSlots: { type: Number },

  requiredItem: {
    type: { type: String, enum: Object.values(ACTION_REQUIRED_ITEM_TYPE) },
    id: { type: String },
    proficiency: { type: Boolean }
  },

  usage: {
    type: { type: String, enum: Object.values(ACTION_USAGE_TYPE) },
    maxNumberOfUse: { type: Number }
  },

  proficiencyId: { type: String },

  actionCost: { type: String, enum: Object.values(ACTION_COST_TYPE) },
  requiredConcentration: { type: Boolean },

  level: { type: levelShape, required: true }
};

// Discriminator schemas for each action type
const CombatArtActionConfigSchema = new mongoose.Schema({
  ...baseActionFields,
  usedSlots: { type: Number, required: true }
});

const CommandActionConfigSchema = new mongoose.Schema({
  ...baseActionFields,
  usedSlots: { type: Number, required: true },
  commandLevel: { type: Number, required: true }
});

// Main ActionConfig schema using discriminators
const ActionConfigSchema = new mongoose.Schema<ActionConfig>(baseActionFields, { versionKey: false, timestamps: true, discriminatorKey: 'type' });

ActionConfigSchema.index({ gameSystemId: 1 });
ActionConfigSchema.index({ ownerId: 1 }); 

export const ActionConfigModel = mongoose.models.ActionConfig || mongoose.model<ActionConfig>('ActionConfig', ActionConfigSchema);

// Attach and export discriminators
export const ItemActionModel = ActionConfigModel.discriminator<CombatArtActionConfig>(ACTION_TYPE.COMBAT_ART, CombatArtActionConfigSchema);
export const CommandActionModel = ActionConfigModel.discriminator<CommandActionConfig>(ACTION_TYPE.COMMAND, CommandActionConfigSchema); 