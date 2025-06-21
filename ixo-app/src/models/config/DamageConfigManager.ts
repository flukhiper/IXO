import type { DamageScaleConfig, DamageTypeConfig } from '@/types/config/damage';

interface DamageConfigInitial { 
  scales?: DamageScaleConfig[]; 
  types?: DamageTypeConfig[]; 
}
export class DamageConfigManager {
  private scaleMap = new Map<string, DamageScaleConfig>();
  
  private typeMap = new Map<string, DamageTypeConfig>();

  constructor (initial: DamageConfigInitial = {}) {
    const { scales = [], types = [] } = initial;
    for (const config of scales) {
      this.addScale(config);
    }
    for (const config of types) {
      this.addType(config);
    }
  }

  addScale (config: DamageScaleConfig) {
    if (this.scaleMap.has(config.id)) {
      throw new Error(`Damage scale "${config.id}" already exists.`);
    }

    this.scaleMap.set(config.id, config);
  }

  getScale (id: string) {
    return this.scaleMap.get(id);
  }

  hasScale (id: string): boolean {
    return this.scaleMap.has(id);
  }


  listScales (): DamageScaleConfig[] {
    return Array.from(this.scaleMap.values());
  }

  deleteScale (id: string): boolean {
    return this.scaleMap.delete(id);
  }

  addType (config: DamageTypeConfig) {
    if (this.typeMap.has(config.id)) {
      throw new Error(`Damage type "${config.id}" already exists.`);
    }

    this.typeMap.set(config.id, config);
  }

  getType (id: string) {
    return this.typeMap.get(id);
  }

  hasType (id: string): boolean {
    return this.typeMap.has(id);
  }

  listTypes (): DamageTypeConfig[] {
    return Array.from(this.typeMap.values());
  }

  deleteType (id: string): boolean {
    return this.typeMap.delete(id);
  }
}
