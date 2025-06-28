import { create, all } from 'mathjs';

const math = create(all, {});

interface FormulaContext {
  base: number;
  level: number;
  stats: Record<string, number>; // e.g. { strength: 15, dexterity: 12 }
}
export function evaluateScalingFormula (
  formula: string, 
  {
    base,
    level,
    stats
  }: FormulaContext
): number {
  // Define custom stat() function to lookup stats in context
  const customScope = {
    base: base,
    level: level,
    stat: (statName: string) => {
      const val = stats[statName.toLowerCase()];
      if (val === undefined) {
        throw new Error(`Stat "${statName}" not found in context`);
      }
      return val;
    }
  };

  // Evaluate with mathjs, injecting customScope
  const result = math.evaluate(formula, customScope);

  if (typeof result !== 'number') {
    throw new Error('Formula did not evaluate to a number');
  }

  return result;
}