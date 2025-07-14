import { CharacterConfigRepository } from '@/repositories/config/CharacterConfigRepository';
import type { CharacterConfig } from '@/types/config/character';
import { BaseService } from '../BaseService';
 
export class CharacterConfigService extends BaseService<CharacterConfig, CharacterConfigRepository> {
  constructor () {
    super(new CharacterConfigRepository());
  }

  async getByGameSystemId (gameSystemId: string) {
    const configs = await this.repository.getAllByFilter({ gameSystemId });
    return configs[0] || null;
  }
} 