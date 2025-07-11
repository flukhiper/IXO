import mongoose from 'mongoose';
import type { LocalizeText } from '@/types/config/base';

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
  keywords: { type: mongoose.Schema.Types.Mixed }
}, { _id: false });