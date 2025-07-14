import mongoose from 'mongoose';
import type { CharacterSkill } from '@/types/runtime/character/CharacterSkill';

const characterSkillSchema = new mongoose.Schema<CharacterSkill>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  characterId: {
    type: String,
    required: true
  },
  skillId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Create index for efficient queries
characterSkillSchema.index({ characterId: 1 });
characterSkillSchema.index({ skillId: 1 });

export const CharacterSkillModel = mongoose.model<CharacterSkill>('CharacterSkill', characterSkillSchema); 