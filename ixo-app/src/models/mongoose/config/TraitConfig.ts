import mongoose from 'mongoose';
import type { TraitConfig } from '@/types/config/trait';
import { ActionSelectionRuleSchema, baseConfigFields, DowntimeSelectionRuleSchema, EffectSelectionRuleSchema } from './common';
import { MAX_TRAIT_VALUE } from '@/constants/config/trait';

const TraitConfigSchema = new mongoose.Schema<TraitConfig>({
  ...baseConfigFields,
  value: { type: Number, enum: MAX_TRAIT_VALUE, required: true },
  effectSelectionRule: { type: [ EffectSelectionRuleSchema ] },
  actionSelectionRule: { type: [ ActionSelectionRuleSchema ] },
  downtimeSelectionRule: { type: [ DowntimeSelectionRuleSchema ] }
}, { versionKey: false, timestamps: true });

TraitConfigSchema.index({ gameSystemId: 1 });
TraitConfigSchema.index({ ownerId: 1 });

export const TraitConfigModel = mongoose.models.TraitConfig || mongoose.model<TraitConfig>('TraitConfig', TraitConfigSchema);
