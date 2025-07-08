import { GameSystemConfigRepository } from '@/repositories/GameSystemConfigRepository';
import type { GameSystem } from '@/types/config/gameSystem';
import { BaseConfigService } from './BaseConfigService';

export class GameConfigSystemService extends BaseConfigService<GameSystem, GameSystemConfigRepository> {
  constructor () {
    super(new GameSystemConfigRepository());
  }
} 