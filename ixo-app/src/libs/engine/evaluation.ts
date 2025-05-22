import type { Expression, ExpressionContext } from '@/types/expression';

export function evaluate (expr: Expression, context: ExpressionContext = {}): number | boolean {
  switch (expr.type) {
    case 'constant':
      return expr.value;

    case 'variable':
      if (!(expr.name in context)) {
        throw new Error(`Undefined variable: ${expr.name}`);
      }
      return context[expr.name];

    case 'add':
      return expr.operands.reduce((sum, op) => (evaluate(op, context) as number) + sum, 0);

    case 'subtract':
      return expr.operands.slice(1).reduce(
        (res, op) => res - (evaluate(op, context) as number),
        evaluate(expr.operands[0], context) as number
      );

    case 'multiply':
      return expr.operands.reduce((prod, op) => (evaluate(op, context) as number) * prod, 1);

    case 'divide':
      return expr.operands.slice(1).reduce(
        (res, op) => res / (evaluate(op, context) as number),
        evaluate(expr.operands[0], context) as number
      );

    case 'and':
      return expr.operands.every(op => Boolean(evaluate(op, context)));

    case 'or':
      return expr.operands.some(op => Boolean(evaluate(op, context)));

    case 'not':
      return !Boolean(evaluate(expr.operand, context));

    case 'eq':
      return evaluate(expr.operands[0], context) === evaluate(expr.operands[1], context);

    case 'neq':
      return evaluate(expr.operands[0], context) !== evaluate(expr.operands[1], context);

    case 'gt':
      return (evaluate(expr.operands[0], context) as number) > (evaluate(expr.operands[1], context) as number);

    case 'lt':
      return (evaluate(expr.operands[0], context) as number) < (evaluate(expr.operands[1], context) as number);

    case 'gte':
      return (evaluate(expr.operands[0], context) as number) >= (evaluate(expr.operands[1], context) as number);

    case 'lte':
      return (evaluate(expr.operands[0], context) as number) <= (evaluate(expr.operands[1], context) as number);

    case 'if':
      return evaluate(expr.condition, context)
        ? evaluate(expr.then, context)
        : evaluate(expr.else, context);

    default:
      throw new Error(`Unsupported expression type: ${(expr as Expression).type}`);
  }
}

export function expressionToString (expr: Expression): string {
  switch (expr.type) {
    case 'constant':
      return typeof expr.value === 'boolean' ? String(expr.value) : expr.value.toString();

    case 'variable':
      return expr.name;

    case 'add':
      return joinOperands(expr.operands, '+');

    case 'subtract':
      return joinOperands(expr.operands, '-');

    case 'multiply':
      return joinOperands(expr.operands, '*');

    case 'divide':
      return joinOperands(expr.operands, '/');

    case 'and':
      return joinOperands(expr.operands, '&&');

    case 'or':
      return joinOperands(expr.operands, '||');

    case 'not':
      return `!${expressionToString(expr.operand)}`;

    case 'eq':
      return `(${expressionToString(expr.operands[0])} == ${expressionToString(expr.operands[1])})`;

    case 'neq':
      return `(${expressionToString(expr.operands[0])} != ${expressionToString(expr.operands[1])})`;

    case 'gt':
      return `(${expressionToString(expr.operands[0])} > ${expressionToString(expr.operands[1])})`;

    case 'lt':
      return `(${expressionToString(expr.operands[0])} < ${expressionToString(expr.operands[1])})`;

    case 'gte':
      return `(${expressionToString(expr.operands[0])} >= ${expressionToString(expr.operands[1])})`;

    case 'lte':
      return `(${expressionToString(expr.operands[0])} <= ${expressionToString(expr.operands[1])})`;

    case 'if':
      return `(${expressionToString(expr.condition)} ? ${expressionToString(expr.then)} : ${expressionToString(expr.else)})`;

    default:
      return '/* unknown expr */';
  }
}

function joinOperands (operands: Expression[], op: string): string {
  return `(${operands.map(e => `${expressionToString(e)}`).join(` ${op} `)})`;
}