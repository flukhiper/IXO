import mongoose from 'mongoose';
import type { OriginConfig } from '@/types/config/origin';
import { ActionSelectionRuleSchema, baseConfigFields, DowntimeSelectionRuleSchema, EffectSelectionRuleSchema } from './common';

const OriginConfigSchema = new mongoose.Schema<OriginConfig>({
  ...baseConfigFields,
  effectSelectionRule: { type: [ EffectSelectionRuleSchema ] },
  actionSelectionRule: { type: [ ActionSelectionRuleSchema ] },
  downtimeSelectionRule: { type: [ DowntimeSelectionRuleSchema ] }
}, { versionKey: false, timestamps: true });

OriginConfigSchema.index({ gameSystemId: 1 });
OriginConfigSchema.index({ ownerId: 1 });

export const OriginConfigModel = mongoose.models.OriginConfig || mongoose.model<OriginConfig>('OriginConfig', OriginConfigSchema);
