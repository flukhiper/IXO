// src/models/services/GameSystemService.ts
import { GameSystem } from '@/models/config/GameSystem';
import { ActionConfigRepository } from '@/repositories/config/ActionConfigRepository';

export class GameSystemService {
  constructor (
    private readonly actionRepo = new ActionConfigRepository()
  ) {}

  async save (gameSystem: GameSystem, meta: { gameSystemId: string; ownerId: string }) {
    const manager = gameSystem.actionManager;
    const schemas = manager.toSchemaAll(meta);
    await this.actionRepo.saveMany(schemas, meta.gameSystemId);
  }

  async load (gameSystem: GameSystem, meta: { gameSystemId: string; ownerId: string }): Promise<void> {
    const actionSchemas = await this.actionRepo.loadMany(meta.gameSystemId);

    gameSystem.actionManager.fromSchemaAll(actionSchemas);
  }
}
