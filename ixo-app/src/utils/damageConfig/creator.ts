import type { DamageScaleConfig, DamageTypeConfig } from '@/types/damage';

export interface CreateDamageScaleConfigParams {
  id: string;
  name: string;
  value: number;
  description?: string;
}
export function createDamageScaleConfig (params: CreateDamageScaleConfigParams): DamageScaleConfig {
  return {
    id: params.id,
    name: params.name,
    value: params.value,
    description: params.description
  };
}

export interface CreateDamageTypeConfigParams {
  id: string;
  name: string;
  description?: string;
}
export function createDamageTypeConfig (params: CreateDamageTypeConfigParams): DamageTypeConfig {
  return {
    id: params.id,
    name: params.name,
    description: params.description
  };
}
