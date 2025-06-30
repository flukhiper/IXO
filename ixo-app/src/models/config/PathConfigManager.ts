import type { PathConfig } from '@/types/config/path';
import { mockPaths } from '@/mocks/config/path';
import { BaseConfigManager } from './BaseConfigManager';

export class PathConfigManager extends BaseConfigManager<PathConfig> {
  constructor () {
    super(mockPaths);
  }
} 