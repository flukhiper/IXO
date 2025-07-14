import mongoose from 'mongoose';
import type { CharacterProficiency } from '@/types/runtime/character/CharacterProficiency';

const characterProficiencySchema = new mongoose.Schema<CharacterProficiency>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  characterId: {
    type: String,
    required: true
  },
  proficiencyId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Create index for efficient queries
characterProficiencySchema.index({ characterId: 1 });
characterProficiencySchema.index({ proficiencyId: 1 });

export const CharacterProficiencyModel = mongoose.model<CharacterProficiency>('CharacterProficiency', characterProficiencySchema); 