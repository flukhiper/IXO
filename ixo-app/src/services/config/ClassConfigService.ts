import { ClassConfigRepository } from '@/repositories/ClassConfigRepository';
import type { ClassConfig } from '@/types/config/class';
import { BaseConfigService } from './BaseConfigService';

export class ClassConfigService extends BaseConfigService<ClassConfig, ClassConfigRepository> {
  constructor () {
    super(new ClassConfigRepository());
  }
} 