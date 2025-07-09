import { BaseRepository } from './BaseRepository';
import { CharacterConfigModel } from '@/models/mongoose/CharacterConfig';
import type { CharacterConfig } from '@/types/config/character';

export class CharacterConfigRepository extends BaseRepository<CharacterConfig & { id: string }> {
  constructor () {
    super(CharacterConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
} 