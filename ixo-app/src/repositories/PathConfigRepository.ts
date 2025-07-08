import { BaseRepository } from './BaseRepository';
import { PathConfigModel } from '@/models/mongoose/PathConfig';
import type { PathConfig } from '@/types/config/path';

export class PathConfigRepository extends BaseRepository<PathConfig> {
  constructor () {
    super(PathConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
