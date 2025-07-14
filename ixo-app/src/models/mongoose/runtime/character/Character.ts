import mongoose from 'mongoose';
import type { Character } from '@/types/runtime/character/Character';

const characterSchema = new mongoose.Schema<Character>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  playerID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gameSystemId: {
    type: String,
    required: true
  },
  portrait: {
    type: String,
    required: false
  },
  isPublic: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

// Create index for efficient queries
characterSchema.index({ playerID: 1 });
characterSchema.index({ gameSystemId: 1 });
characterSchema.index({ playerID: 1, gameSystemId: 1 });

export const CharacterModel = mongoose.model<Character>('Character', characterSchema); 