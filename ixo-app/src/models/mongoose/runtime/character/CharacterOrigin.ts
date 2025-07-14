import mongoose from 'mongoose';
import type { CharacterOrigin } from '@/types/runtime/character/CharacterOrigin';

const characterOriginSchema = new mongoose.Schema<CharacterOrigin>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  characterId: {
    type: String,
    required: true
  },
  originId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Create index for efficient queries
characterOriginSchema.index({ characterId: 1 });
characterOriginSchema.index({ originId: 1 });

export const CharacterOriginModel = mongoose.model<CharacterOrigin>('CharacterOrigin', characterOriginSchema); 