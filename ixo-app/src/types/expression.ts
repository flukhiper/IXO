type ConstantType = 'constant';
type VariableType = 'variable';
type ArithmeticOperatorType = 'add' | 'subtract' | 'multiply' | 'divide';
type LogicalOperatorType = 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'and' | 'or';
type NotOperatorType = 'not';
type ConditionalOperatorType = 'if';

export type Expression =
  | { type: ConstantType; value: number | boolean }
  | { type: VariableType; name: string }
  | { type: ArithmeticOperatorType; operands: Expression[] }
  | { type: NotOperatorType; operand: Expression }
  | { type: LogicalOperatorType; operands: Expression[] }
  | { type: ConditionalOperatorType; condition: Expression; then: Expression; else: Expression };

export type ExpressionType = 
    | ConstantType
    | VariableType
    | ArithmeticOperatorType
    | LogicalOperatorType
    | NotOperatorType
    | ConditionalOperatorType;

export type ExpressionContext = Record<string, number | boolean>;