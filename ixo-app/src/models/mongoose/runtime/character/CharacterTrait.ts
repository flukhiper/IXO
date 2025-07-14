import mongoose from 'mongoose';
import type { CharacterTrait } from '@/types/runtime/character/CharacterTrait';

const characterTraitSchema = new mongoose.Schema<CharacterTrait>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  characterId: {
    type: String,
    required: true
  },
  traitId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Create index for efficient queries
characterTraitSchema.index({ characterId: 1 });
characterTraitSchema.index({ traitId: 1 });

export const CharacterTraitModel = mongoose.model<CharacterTrait>('CharacterTrait', characterTraitSchema); 