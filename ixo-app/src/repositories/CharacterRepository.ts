import type { Character } from '@/types/character';
import CharacterModel from '@/models/mongoose/Character';
import { BaseRepository } from './BaseRepository';

export class CharacterRepository extends BaseRepository<Character> {
  constructor () {
    super(CharacterModel);
  }

  // --- Data Access Methods ---

  /**
   * Find all characters by player ID
   */
  async findByPlayer (playerID: string): Promise<Character[]> {
    return this.model.find({ playerID }).sort({ createdAt: -1 }).exec();
  }

  /**
   * Find public characters, optionally filtered by game system
   */
  async findPublic (gameSystemId?: string): Promise<Character[]> {
    const query: { isPublic: boolean; gameSystemId?: string } = { isPublic: true };
    if (gameSystemId) query.gameSystemId = gameSystemId;
    return this.model.find(query).sort({ createdAt: -1 }).exec();
  }

  /**
   * Find characters by game system
   */
  async findByGameSystem (gameSystemId: string): Promise<Character[]> {
    return this.model.find({ gameSystemId }).sort({ createdAt: -1 }).exec();
  }

  /**
   * Find character by ID with populated references
   */
  async findByIdWithDetails (id: string): Promise<Character | null> {
    return this.model.findById(id).exec();
  }

  /**
   * Find characters with pagination
   */
  async findWithPagination (
    filter: Partial<Character> = {},
    page: number = 1,
    limit: number = 20
  ): Promise<{ characters: Character[]; total: number; page: number; totalPages: number }> {
    const skip = (page - 1) * limit;
    const [ characters, total ] = await Promise.all([
      this.model.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 }).exec(),
      this.model.countDocuments(filter).exec()
    ]);

    return {
      characters,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    };
  }

  /**
   * Check if character name is unique for a player
   */
  async isNameUnique (playerID: string, name: string, excludeId?: string): Promise<boolean> {
    const query: { playerID: string; name: string; _id?: { $ne: string } } = { playerID, name };
    if (excludeId) query._id = { $ne: excludeId };
    
    const count = await this.model.countDocuments(query).exec();
    return count === 0;
  }

  /**
   * Get character statistics
   */
  async getCharacterStats (playerID?: string): Promise<{
    total: number;
    public: number;
    byGameSystem: Record<string, number>;
  }> {
    const matchStage = playerID ? { $match: { playerID } } : { $match: {} };
    
    const stats = await this.model.aggregate([
      matchStage,
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          public: { $sum: { $cond: [ '$isPublic', 1, 0 ] } },
          byGameSystem: { $push: '$gameSystemId' }
        }
      },
      {
        $project: {
          _id: 0,
          total: 1,
          public: 1,
          byGameSystem: {
            $arrayToObject: {
              $map: {
                input: { $setUnion: '$byGameSystem' },
                as: 'system',
                in: {
                  k: '$$system',
                  v: {
                    $size: {
                      $filter: {
                        input: '$byGameSystem',
                        cond: { $eq: [ '$$this', '$$system' ] }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    ]).exec();

    return stats[0] || { total: 0, public: 0, byGameSystem: {} };
  }
}