import { STACK_TYPE } from '@/constants/config/common';

export interface StatThresholdRequirement {
  statId: string;
  min?: number;
  max?: number;
}

export type StackType = typeof STACK_TYPE[keyof typeof STACK_TYPE];
export interface StackConfig {
  id: string;
  type: StackType;
  priority?: number; // only used with 'overwrite'
}

export interface InventorySpace {
  rows: number;      // e.g., 6
  columns: number;   // e.g., 12
}