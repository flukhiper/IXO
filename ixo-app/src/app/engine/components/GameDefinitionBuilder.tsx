// GameDefinitionBuilder.tsx
'use client';
import { useState } from 'react';

import { AttributeDefinition, GameDefinition, StatDefinition } from '@/types/engine';

const GameDefinitionBuilder = () => {
  const [ stats, setStats ] = useState<StatDefinition[]>([]);
  const [ attributes, setAttributes ] = useState<AttributeDefinition[]>([]);

  const addStat = () => {
    setStats([ ...stats, { id: '', name: '' } ]);
  };

  const addAttribute = () => {
    setAttributes([
      ...attributes,
      { id: '', name: '', base: 0, modifiers: [] }
    ]);
  };

  const updateStat = (index: number, field: keyof StatDefinition, value: string) => {
    const updated = [ ...stats ];
    updated[index][field] = value;
    setStats(updated);
  };

  const updateAttribute = (index: number, field: keyof AttributeDefinition, value: string | number) => {
    const updated = [ ...attributes ];
    if (field === 'base') {
      updated[index][field] = value as number;
    } else if (field !== 'modifiers') {
      updated[index][field] = value as string;
    }
    setAttributes(updated);
  };

  const addModifier = (attrIndex: number) => {
    const updated = [ ...attributes ];
    updated[attrIndex].modifiers.push({
      id: `${Date.now()}`,
      source: 'custom',
      formula: {
        type: 'add',
        operands: [
          { type: 'constant', value: 0 },
          { type: 'stat', statId: stats[0]?.id || '' }
        ]
      }
    });
    setAttributes(updated);
  };

  const exportGameDefinition = (): GameDefinition => ({
    id: '1',
    statDefs: stats,
    attrDefs: attributes
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>Stats</h2>
      {stats.map((s, i) => 
        <div key={i}>
          <input
            placeholder="ID"
            value={s.id}
            onChange={e => updateStat(i, 'id', e.target.value)}
          />
          <input
            placeholder="Name"
            value={s.name}
            onChange={e => updateStat(i, 'name', e.target.value)}
          />
        </div>
      )}
      <button onClick={addStat}>Add Stat</button>

      <h2>Attributes</h2>
      {attributes.map((a, i) => 
        <div key={i} style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
          <input
            placeholder="ID"
            value={a.id}
            onChange={e => updateAttribute(i, 'id', e.target.value)}
          />
          <input
            placeholder="Name"
            value={a.name}
            onChange={e => updateAttribute(i, 'name', e.target.value)}
          />
          <input
            type="number"
            placeholder="Base"
            value={a.base}
            onChange={e => updateAttribute(i, 'base', parseInt(e.target.value))}
          />
          <h4>Modifiers</h4>
          {a.modifiers.map((mod, mIndex) => 
            <div key={mIndex}>
              <strong>{mod.source}</strong> - Formula: {mod.formula.type}
            </div>
          )}
          <button onClick={() => addModifier(i)}>Add Modifier</button>
        </div>
      )}
      <button onClick={addAttribute}>Add Attribute</button>

      <hr />
      <button
        onClick={() => {
          const data = exportGameDefinition();
          console.log('GameDefinition', data);
          alert('GameDefinition exported to console');
        }}
      >
        Export Game Definition
      </button>
    </div>
  );
};

export default GameDefinitionBuilder;