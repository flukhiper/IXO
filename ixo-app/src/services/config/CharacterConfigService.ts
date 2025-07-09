import { CharacterConfigRepository } from '@/repositories/CharacterConfigRepository';
import type { CharacterConfig } from '@/types/config/character';
import { BaseConfigService } from './BaseConfigService';

export class CharacterConfigService extends BaseConfigService<CharacterConfig & { id: string }, CharacterConfigRepository> {
  constructor () {
    super(new CharacterConfigRepository());
  }
} 