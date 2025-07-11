import { ClassConfigRepository } from '@/repositories/config/ClassConfigRepository';
import type { ClassConfig } from '@/types/config/class';
import { BaseService } from '../BaseService';
 
export class ClassConfigService extends BaseService<ClassConfig, ClassConfigRepository> {
  constructor () {
    super(new ClassConfigRepository());
  }
} 