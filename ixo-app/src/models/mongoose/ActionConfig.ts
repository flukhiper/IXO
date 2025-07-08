import mongoose from 'mongoose';
import type { ActionConfig } from '@/types/config/action';
import { ACTION_TYPE } from '@/constants/config/action';
import { LocalizeTextSchema } from './common';

const ActionCostSchema = new mongoose.Schema({
  attributeId: { type: String, required: true },
  usageValue: mongoose.Schema.Types.Mixed
}, { _id: false });

const ActionLevelConfigSchema = new mongoose.Schema({
  costs: [ ActionCostSchema ],
  usageLimit: {
    maxUse: Number,
    cooldown: Number,
    resetOn: {
      phase: String,
      event: String
    }
  },
  restrictions: {
    requiredEquipments: [ {
      equipmentSlotId: String,
      tags: [ String ]
    } ],
    requiredStats: [ {
      statId: String,
      conditionFormulas: mongoose.Schema.Types.Mixed
    } ]
  },
  hit: mongoose.Schema.Types.Mixed,
  target: mongoose.Schema.Types.Mixed,
  damages: [ {
    damageTypeId: String,
    baseValue: mongoose.Schema.Types.Mixed,
    formula: String
  } ],
  restores: [ {
    attributeId: String,
    baseValue: mongoose.Schema.Types.Mixed,
    formula: String
  } ],
  summons: [ {
    creatureId: String,
    duration: Number
  } ],
  conditionIds: [ String ],
  removeConditionTags: [ String ],
  selfEffect: {
    damages: [ {
      damageTypeId: String,
      baseValue: mongoose.Schema.Types.Mixed,
      formula: String
    } ],
    restores: [ {
      attributeId: String,
      baseValue: mongoose.Schema.Types.Mixed,
      formula: String
    } ],
    conditionIds: [ String ]
  }
}, { _id: false });

const ActionConfigSchema = new mongoose.Schema<ActionConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  type: { type: String, enum: Object.values(ACTION_TYPE), required: true },
  icon: { type: String },
  tags: { type: [ String ], default: [] },
  isCrucial: { type: Boolean, required: true },
  isConcentration: { type: Boolean, required: true },
  levelConfigs: { type: Map, of: ActionLevelConfigSchema }
}, { versionKey: false, timestamps: true });

export const ActionConfigModel = mongoose.models.ActionConfig || mongoose.model<ActionConfig>('ActionConfig', ActionConfigSchema); 