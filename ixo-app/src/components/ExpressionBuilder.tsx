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

const ExpressionBuilder: React.FC = () => {
  const [ expr, setExpr ] = useState<Expression>({ type: 'constant', value: 0 });

  const renderEditor = (expr: Expression, update: (e: Expression) => void) => {
    switch (expr.type) {
      case 'constant':
        return (
          <input
            type="number"
            className="border px-2 py-1 rounded w-24"
            value={Number(expr.value)}
            onChange={(e) => update({ type: 'constant', value: Number(e.target.value) })}
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
          <div className="space-y-2">
            {expr.operands.map((op, i) => 
              <div key={i} className="ml-4">
                {renderEditor(op, (newOp) => {
                  const newOperands = [ ...expr.operands ];
                  newOperands[i] = newOp;
                  update({ ...expr, operands: newOperands });
                })}
              </div>
            )}
            <button
              onClick={() => update({ ...expr, operands: [ ...expr.operands, { type: 'constant', value: 0 } ] })}
              className="text-sm text-blue-500"
            >
              + Add operand
            </button>
          </div>
        );
      case 'not':
        return renderEditor(expr.operand, (operand) => update({ type: 'not', operand }));
      case 'eq':
      case 'neq':
      case 'gt':
      case 'lt':
      case 'gte':
      case 'lte':
        return (
          <div className="space-y-2 ml-4">
            <div>{renderEditor(expr.operands[0], (left) => update({ ...expr, operands: [ left, expr.operands[1] ] }))}</div>
            <div>{renderEditor(expr.operands[1], (right) => update({ ...expr, operands: [ expr.operands[0], right ] }))}</div>
          </div>
        );
      case 'if':
        return (
          <div className="space-y-2 ml-4">
            <div>Condition: {renderEditor(expr.condition, (condition) => update({ ...expr, condition }))}</div>
            <div>Then: {renderEditor(expr.then, (then) => update({ ...expr, then }))}</div>
            <div>Else: {renderEditor(expr.else, (elseExpr) => update({ ...expr, else: elseExpr }))}</div>
          </div>
        );
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as ExpressionType;
    switch (newType) {
      case 'constant':
        setExpr({ type: 'constant', value: 0 }); break;
      case 'variable':
        setExpr({ type: 'variable', name: 'x' }); break;
      case 'not':
        setExpr({ type: 'not', operand: { type: 'constant', value: true } }); break;
      case 'if':
        setExpr({ type: 'if', condition: { type: 'constant', value: true }, then: { type: 'constant', value: 1 }, else: { type: 'constant', value: 0 } }); break;
      case 'eq':
      case 'neq':
      case 'gt':
      case 'lt':
      case 'gte':
      case 'lte':
        setExpr({ type: newType, operands: [ { type: 'variable', name: 'a' }, { type: 'constant', value: 1 } ] }); break;
      default:
        setExpr({ type: newType, operands: [ { type: 'constant', value: 1 }, { type: 'constant', value: 2 } ] }); break;
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        <label className="text-sm font-medium">Expression Type:</label>
        <select value={expr.type} onChange={handleTypeChange} className="ml-2 border px-2 py-1 rounded">
          {operators.map((op) => 
            <option key={op} value={op}>{op}</option>
          )}
        </select>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-semibold">Editor:</div>
        {renderEditor(expr, setExpr)}
      </div>
      <div className="text-sm font-semibold">Output:</div>
      <div className="border p-2 rounded font-mono">{expressionToString(expr)}</div>
    </div>
  );
};

export default ExpressionBuilder;