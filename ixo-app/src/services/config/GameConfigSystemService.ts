import { GameSystemConfigRepository } from '@/repositories/config/GameSystemConfigRepository';
import type { GameSystem } from '@/types/config/gameSystem';
import { BaseService } from '../BaseService';

export class GameConfigSystemService extends BaseService<GameSystem, GameSystemConfigRepository> {
  constructor () {
    super(new GameSystemConfigRepository());
  }
} 