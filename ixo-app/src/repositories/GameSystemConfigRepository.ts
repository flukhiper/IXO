import { BaseRepository } from './BaseRepository';
import { GameSystemConfigModel } from '@/models/mongoose/GameSystemConfig';
import type { GameSystem } from '@/types/config/gameSystem';

export class GameSystemConfigRepository extends BaseRepository<GameSystem> {
  constructor () {
    super(GameSystemConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
