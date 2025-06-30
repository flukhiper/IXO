import { GameConfigSystemRepository, GameConfigSystemDTO } from '@/repositories/GameConfigSystemRepository';

export class GameConfigSystemService {
  private readonly repository = new GameConfigSystemRepository();

  async create (system: GameConfigSystemDTO) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(system);
  }

  async getById (id: string): Promise<GameConfigSystemDTO | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<GameConfigSystemDTO[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<GameConfigSystemDTO>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 