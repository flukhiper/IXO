import type { Character } from '@/types/character';
import CharacterModel from '@/models/mongoose/Character';
import { BaseRepository } from './BaseRepository';

export class CharacterRepository extends BaseRepository<Character> {
  constructor () {
    super(CharacterModel);
  }

  // You can add any custom methods here if needed
}