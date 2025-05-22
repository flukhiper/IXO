'use client';
import { useState } from 'react';

import { expressionToString } from '@/libs/engine/evaluation';
import type { Expression, ExpressionType } from '@/types/expression';

const operators: ExpressionType[] = [
  'constant',
  'variable',
  'add',
  'subtract',
  'multiply',
  'divide',
  'and',
  'or',
  'not',
  'eq',
  'neq',
  'gt',
  'lt',
  'gte',
  'lte',
  'if'
] as const;

function expressionTypeSelector (expr: Expression, onChange: (newExpr: Expression) => void) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as ExpressionType;
    switch (newType) {
      case 'constant': onChange({ type: 'constant', value: 0 }); break;
      case 'variable': onChange({ type: 'variable', name: 'x' }); break;
      case 'not': onChange({ type: 'not', operand: { type: 'constant', value: true } }); break;
      case 'if':
        onChange({
          type: 'if',
          condition: { type: 'constant', value: true },
          then: { type: 'constant', value: 1 },
          else: { type: 'constant', value: 0 }
        });
        break;
      case 'eq': case 'neq': case 'gt': case 'lt': case 'gte': case 'lte':
        onChange({ type: newType, operands: [
          { type: 'variable', name: 'a' },
          { type: 'constant', value: 1 }
        ] });
        break;
      default:
        onChange({ type: newType, operands: [
          { type: 'constant', value: 1 },
          { type: 'constant', value: 2 }
        ] });
    }
  };

  return (
    <select value={expr.type} onChange={handleChange} className="border rounded px-1 py-0.5 text-sm mr-2">
      {operators.map(op => 
        <option key={op} value={op}>{op}</option>
      )}
    </select>
  );
}

const ExpressionBuilder: React.FC = () => {
  const [ expr, setExpr ] = useState<Expression>({ type: 'constant', value: 0 });

  const renderEditor = (expr: Expression, update: (e: Expression) => void) => {
    switch (expr.type) {
      case 'constant':
        return (
          <input
            type="text"
            className="border px-2 py-1 rounded w-24"
            value={String(expr.value)}
            onChange={(e) => {
              const input = e.target.value;
              if (input === 'true' || input === 'false') {
                update({ type: 'constant', value: input === 'true' });
              } else {
                const num = parseFloat(input);
                update({ type: 'constant', value: isNaN(num) ? 0 : num });
              }
            }}
          />
        );
      case 'variable':
        return (
          <input
            type="text"
            className="border px-2 py-1 rounded w-24"
            value={expr.name}
            onChange={(e) => update({ type: 'variable', name: e.target.value })}
          />
        );
      case 'add':
      case 'subtract':
      case 'multiply':
      case 'divide':
      case 'and':
      case 'or':
        return (
          <div className="space-y-2 ml-4">
            {expr.operands.map((op, i) => 
              <div key={i} className="ml-4 flex items-center gap-2">
                {expressionTypeSelector(op, (newExpr) => {
                  const newOperands = [ ...expr.operands ];
                  newOperands[i] = newExpr;
                  update({ ...expr, operands: newOperands });
                })}
                {renderEditor(op, (newOp) => {
                  const newOperands = [ ...expr.operands ];
                  newOperands[i] = newOp;
                  update({ ...expr, operands: newOperands });
                })}
              </div>
            )}
            <button
              onClick={() =>
                update({ ...expr, operands: [ ...expr.operands, { type: 'constant', value: 0 } ] })
              }
              className="text-blue-500 text-sm"
            >
              + Add operand
            </button>
          </div>
        );
      case 'not':
        return (
          <div className="ml-4 space-y-1">
            <div className="flex items-center">
              <span className="mr-2">Operand:</span>
              {expressionTypeSelector(expr.operand, (newOperand) =>
                update({ type: 'not', operand: newOperand })
              )}
            </div>
            <div className="ml-4">
              {renderEditor(expr.operand, (newOperand) =>
                update({ type: 'not', operand: newOperand })
              )}
            </div>
          </div>
        );
      case 'eq':
      case 'neq':
      case 'gt':
      case 'lt':
      case 'gte':
      case 'lte':
        return (
          <div className="ml-4 flex flex-col gap-2">
            {[ 'Left', 'Right' ].map((label, i) => 
              <div key={i} className="flex items-center gap-2">
                <span className="w-12 text-sm">{label}:</span>
                {expressionTypeSelector(expr.operands[i], (newExpr) => {
                  const newOperands: [Expression, Expression] = [ expr.operands[0], expr.operands[1] ];
                  newOperands[i] = newExpr;
                  update({ ...expr, operands: newOperands });
                })}
                {renderEditor(expr.operands[i], (newOp) => {
                  const newOperands: [Expression, Expression] = [ expr.operands[0], expr.operands[1] ];
                  newOperands[i] = newOp;
                  update({ ...expr, operands: newOperands });
                })}
              </div>
            )}
          </div>
        );
      case 'if':
        return (
          <div className="space-y-2 ml-4">
            {[ 'Condition', 'Then', 'Else' ].map((label, i) => {
              const keys = [ 'condition', 'then', 'else' ] as const;
              const key = keys[i];
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-16 text-sm">{label}:</span>
                  {expressionTypeSelector(expr[key], (newExpr) =>
                    update({ ...expr, [key]: newExpr })
                  )}
                  {renderEditor(expr[key], (newExpr) =>
                    update({ ...expr, [key]: newExpr })
                  )}
                </div>
              );
            })}
          </div>
        );
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as ExpressionType;
    switch (newType) {
      case 'constant':
        setExpr({ type: 'constant', value: 0 });
        break;
      case 'variable':
        setExpr({ type: 'variable', name: 'x' });
        break;
      case 'not':
        setExpr({ type: 'not', operand: { type: 'constant', value: true } });
        break;
      case 'if':
        setExpr({
          type: 'if',
          condition: { type: 'constant', value: true },
          then: { type: 'constant', value: 1 },
          else: { type: 'constant', value: 0 }
        });
        break;
      case 'eq':
      case 'neq':
      case 'gt':
      case 'lt':
      case 'gte':
      case 'lte':
        setExpr({
          type: newType,
          operands: [
            { type: 'constant', value: 1 },
            { type: 'constant', value: 2 }
          ]
        });
        break;
      default:
        setExpr({
          type: newType,
          operands: [
            { type: 'constant', value: 1 },
            { type: 'constant', value: 2 }
          ]
        });
        break;
    }
  };

  return (
    <div className="p-4 space-y-4 font-sans">
      <div>
        <label className="text-sm font-medium">Expression Type:</label>
        <select
          value={expr.type}
          onChange={handleTypeChange}
          className="ml-2 border px-2 py-1 rounded"
        >
          {operators.map((op) => 
            <option key={op} value={op}>
              {op}
            </option>
          )}
        </select>
      </div>

      <div>
        <div className="text-sm font-semibold">Editor:</div>
        {renderEditor(expr, setExpr)}
      </div>

      <div>
        <div className="text-sm font-semibold">Output:</div>
        <div className="border p-2 rounded font-mono whitespace-pre-wrap">
          {expressionToString(expr)}
        </div>
      </div>
    </div>
  );
};

export default ExpressionBuilder;