import type { ArchetypeConfig } from '@/types/config/archetype';
import { ArchetypeConfigModel } from '@/models/mongoose/ArchetypeConfig';
import { BaseRepository } from './BaseRepository';

export class ArchetypeConfigRepository extends BaseRepository<ArchetypeConfig> {
  constructor () {
    super(ArchetypeConfigModel);
  }
  // Add any ArchetypeConfig-specific methods here if needed
} 