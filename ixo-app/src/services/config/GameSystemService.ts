// src/models/services/GameSystemService.ts
import { GameSystem } from '@/models/config/GameSystem';
import { ActionConfigRepository } from '@/repositories/config/ActionConfigRepository';

export class GameSystemService {
  constructor (
    private readonly actionRepo = new ActionConfigRepository()
  ) {}

  async save (gameSystem: GameSystem, ownerId: string) {
    const manager = gameSystem.actionManager;
    const schemas = manager.toSchemaAll();
    await this.actionRepo.saveMany(schemas, gameSystem.getId(), ownerId);
  }

  async load (gameSystem: GameSystem): Promise<void> {
    const actionSchemas = await this.actionRepo.loadMany(gameSystem.getId());

    gameSystem.actionManager.fromSchemaAll(actionSchemas);
  }
}
