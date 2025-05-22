type ModifierSource = string;

interface Modifier {
  source: ModifierSource;
  getValue: () => number;
  duration?: number; // number of turns remaining
  active: boolean; // if the modifier is active (e.g. for tags)
  persistent?: boolean; // true if it should never expire
}

export default class Attribute {
  private base: number;

  private modifiers: Map<ModifierSource, Modifier> = new Map();

  private min?: number;

  private max?: number;

  private overrideValue?: number;
  
  constructor (base: number, options?: { min?: number; max?: number }) {
    this.base = base;
    this.min = options?.min;
    this.max = options?.max;
  }
  
  setBase (value: number) {
    this.base = value;
  }
  
  getBase (): number {
    return this.base;
  }
  
  addModifier (source: ModifierSource, modifier: Modifier) {
    this.modifiers.set(source, modifier);
  }
  
  removeModifier (source: ModifierSource) {
    this.modifiers.delete(source);
  }
  
  setOverride (value: number | undefined) {
    this.overrideValue = value;
  }

  tick (): void {
    for (const [ source, mod ] of this.modifiers.entries()) {
      if (!mod.persistent && mod.duration !== undefined) {
        mod.duration -= 1;
        if (mod.duration <= 0) {
          this.removeModifier(source);
        }
      }
    }
  }
  
  toggleModifier (source: string, enabled: boolean) {
    const mod = this.modifiers.get(source);
    if (mod) mod.active = enabled;
  }
  
  getTotal (): number {
    if (this.overrideValue !== undefined) return this.applyBounds(this.overrideValue);
  
    const modifierSum = Array.from(this.modifiers.values())
      .filter(mod => mod.active)
      .reduce((sum, mod) => sum + mod.getValue(), 0);
  
    return this.applyBounds(this.base + modifierSum);
  }
  
  private applyBounds (value: number): number {
    if (this.min !== undefined && value < this.min) return this.min;
    if (this.max !== undefined && value > this.max) return this.max;
    return value;
  }
  
  debugInfo () {
    return {
      base: this.base,
      modifiers: Array.from(this.modifiers.entries()).map(([ k, mod ]) => [ k, mod.getValue() ]),
      override: this.overrideValue,
      total: this.getTotal()
    };
  }
}