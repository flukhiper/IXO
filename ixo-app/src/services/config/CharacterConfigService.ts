import { CharacterConfigRepository } from '@/repositories/config/CharacterConfigRepository';
import type { CharacterConfig } from '@/types/config/character';
import { BaseService } from '../BaseService';
 
export class CharacterConfigService extends BaseService<CharacterConfig & { id: string }, CharacterConfigRepository> {
  constructor () {
    super(new CharacterConfigRepository());
  }
} 