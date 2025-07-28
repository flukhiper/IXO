import mongoose from 'mongoose';
import type { TraitConfig } from '@/types/config/trait';
import { ActionSelectionRuleSchema, DowntimeSelectionRuleSchema, EffectConfigSchema, LocalizeTextSchema } from './common';

const TraitConfigSchema = new mongoose.Schema<TraitConfig>({
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
  value: { type: Number, enum: [ 1, 2 ], required: true },
  actionSelectionRule: { type: ActionSelectionRuleSchema, default: undefined },
  downtimeSelectionRule: { type: DowntimeSelectionRuleSchema, default: undefined },
  effects: { type: [ EffectConfigSchema ], default: [] }
}, { versionKey: false, timestamps: true });

TraitConfigSchema.index({ id: 1 }, { unique: true });
TraitConfigSchema.index({ gameSystemId: 1 });
TraitConfigSchema.index({ ownerId: 1 });

export const TraitConfigModel = mongoose.models.TraitConfig || mongoose.model<TraitConfig>('TraitConfig', TraitConfigSchema);
