import mongoose from 'mongoose';
import type { CharacterClass } from '@/types/runtime/character/CharacterClass';

const characterClassSchema = new mongoose.Schema<CharacterClass>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  characterId: {
    type: String,
    required: true
  },
  classId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Create index for efficient queries
characterClassSchema.index({ characterId: 1 });
characterClassSchema.index({ classId: 1 });

export const CharacterClassModel = mongoose.model<CharacterClass>('CharacterClass', characterClassSchema); 