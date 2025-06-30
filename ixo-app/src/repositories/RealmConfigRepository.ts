import { BaseRepository } from './BaseRepository';
import { RealmConfigModel } from '@/models/mongoose/RealmConfig';
import type { RealmConfig } from '@/types/config/realm';

export class RealmConfigRepository extends BaseRepository<RealmConfig> {
  constructor () {
    super(RealmConfigModel);
  }
  // Add any RealmConfig-specific methods here if needed
} 