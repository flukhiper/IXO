import { ITEM_REF_ID } from '@/constants/item';
import type {
  ItemConfig,
  ItemConfigWeapon,
  ItemConfigShield,
  ItemConfigArmor,
  ItemConfigAccessory,
  ItemConfigConsumable,
  ItemConfigUtility
} from '@/types/config/item';

export class ItemConfigManager {
  readonly refId = ITEM_REF_ID;

  private map = new Map<string, ItemConfig>();

  constructor (initial: ItemConfig[] = []) {
    for (const config of initial) {
      this.add(config);
    }
  }

  add (config: ItemConfig): void {
    this.map.set(config.id, config);
  }

  get (id: string): ItemConfig | undefined {
    return this.map.get(id);
  }

  has (id: string): boolean {
    return this.map.has(id);
  }

  list (): ItemConfig[] {
    return Array.from(this.map.values());
  }

  listIds (): string[] {
    return Array.from(this.map.keys());
  }

  clear (): void {
    this.map.clear();
  }

  hasRefId (id: string): boolean {
    return this.refId === id;
  }

  // Optional helpers for narrowing down item types

  getWeapon (id: string): ItemConfigWeapon | undefined {
    const item = this.get(id);
    return item && item.type === 'weapon' ? item as ItemConfigWeapon : undefined;
  }

  getShield (id: string): ItemConfigShield | undefined {
    const item = this.get(id);
    return item && item.type === 'shield' ? item as ItemConfigShield : undefined;
  }

  getArmor (id: string): ItemConfigArmor | undefined {
    const item = this.get(id);
    return item && item.type === 'armor' ? item as ItemConfigArmor : undefined;
  }

  getAccessory (id: string): ItemConfigAccessory | undefined {
    const item = this.get(id);
    return item && item.type === 'accessory' ? item as ItemConfigAccessory : undefined;
  }

  getConsumable (id: string): ItemConfigConsumable | undefined {
    const item = this.get(id);
    return item && item.type === 'consumable' ? item as ItemConfigConsumable : undefined;
  }

  getUtility (id: string): ItemConfigUtility | undefined {
    const item = this.get(id);
    return item && item.type === 'utility' ? item as ItemConfigUtility : undefined;
  }
}
