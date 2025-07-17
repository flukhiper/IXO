import mongoose from 'mongoose';
import type { CharacterClass } from '@/types/runtime/character/CharacterClass';

const ChoiceArraySchema = new mongoose.Schema({
  level: { type: Number, required: true },
  statIds: { type: [ String ], default: undefined },
  attributeIds: { type: [ String ], default: undefined },
  skillIds: { type: [ String ], default: undefined },
  actionIds: { type: [ String ], default: undefined }
}, { _id: false });

const characterClassSchema = new mongoose.Schema<CharacterClass>({
  id: { type: String, required: true, unique: true },
  characterId: { type: String, required: true },
  classId: { type: String, required: true },
  level: { type: Number, required: true },
  isActive: { type: Boolean },
  chosenStats: { type: [ { level: Number, statIds: [ String ] } ], default: undefined },
  chosenAttributes: { type: [ { level: Number, attributeIds: [ String ] } ], default: undefined },
  chosenSkills: { type: [ { level: Number, skillIds: [ String ] } ], default: undefined },
  chosenActions: { type: [ { level: Number, actionIds: [ String ] } ], default: undefined }
}, { timestamps: true });

// Indexes for efficient queries
characterClassSchema.index({ characterId: 1 });
characterClassSchema.index({ classId: 1 });

export const CharacterClassModel = mongoose.model<CharacterClass>('CharacterClass', characterClassSchema); 