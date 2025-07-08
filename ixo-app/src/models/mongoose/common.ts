import mongoose from 'mongoose';
import type { LocalizeText } from '@/types/config/base';

// Schema for localized text that allows any locale key with string value
export const LocalizeTextSchema = new mongoose.Schema<LocalizeText>({}, {
  _id: false,
  strict: false, // Allow any locale key
  minimize: false // Keep empty objects
}); 