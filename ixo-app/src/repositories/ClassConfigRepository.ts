import { BaseRepository } from './BaseRepository';
import { ClassConfigModel } from '@/models/mongoose/ClassConfig';
import type { ClassConfig } from '@/types/config/class';

export class ClassConfigRepository extends BaseRepository<ClassConfig> {
  constructor () {
    super(ClassConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
} 