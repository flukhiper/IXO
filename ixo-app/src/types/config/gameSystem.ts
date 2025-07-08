import type { BaseModel } from './base';

export interface GameSystem extends BaseModel {
  tags?: string[];
  isPublic: boolean;
}