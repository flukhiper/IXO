import mongoose from 'mongoose';
import type { FactionConfig } from '@/types/config/faction';
import { ActionSelectionRuleSchema, baseConfigFields, DowntimeSelectionRuleSchema, EffectSelectionRuleSchema } from './common';

const FactionConfigSchema = new mongoose.Schema<FactionConfig>({
  ...baseConfigFields,
  effectSelectionRule: { type: [ EffectSelectionRuleSchema ] },
  actionSelectionRule: { type: [ ActionSelectionRuleSchema ] },
  downtimeSelectionRule: { type: [ DowntimeSelectionRuleSchema ] }
}, { versionKey: false, timestamps: true });

FactionConfigSchema.index({ gameSystemId: 1 });
FactionConfigSchema.index({ ownerId: 1 });

export const FactionConfigModel = mongoose.models.FactionConfig || mongoose.model<FactionConfig>('FactionConfig', FactionConfigSchema);
