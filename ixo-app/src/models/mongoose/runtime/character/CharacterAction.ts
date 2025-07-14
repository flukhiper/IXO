import mongoose from 'mongoose';
import type { CharacterAction } from '@/types/runtime/character/CharacterAction';

const characterActionSchema = new mongoose.Schema<CharacterAction>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  characterId: {
    type: String,
    required: true
  },
  actionId: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true,
    enum: [ 'class', 'origin', 'trait', 'item', 'other' ]
  },
  sourceId: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  }
}, {
  timestamps: true
});

// Create index for efficient queries
characterActionSchema.index({ characterId: 1 });
characterActionSchema.index({ actionId: 1 });
characterActionSchema.index({ characterId: 1, actionId: 1 });
characterActionSchema.index({ source: 1, sourceId: 1 });

export const CharacterActionModel = mongoose.model<CharacterAction>('CharacterAction', characterActionSchema); 