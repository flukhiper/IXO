'use client';
import ExpressionBuilder from '@/components/ExpressionBuilder';
import type { AttributeDefinition, Modifier } from '@/types/engine';
import type { Expression } from '@/types/expression';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { useEnginContext } from '@/contexts/EnginContext';

interface Props {
  value: AttributeDefinition;
  onChange: (value: AttributeDefinition) => void;
  availableVariables: string[];
}

function AttributeDefinitionBuilder ({
  value,
  onChange,
  availableVariables
}: Props) {
  const handleModifierChange = (index: number, updated: Modifier) => {
    const newModifiers = [ ...value.modifiers ];
    newModifiers[index] = updated;
    onChange({ ...value, modifiers: newModifiers });
  };

  const addModifier = () => {
    const newModifier: Modifier = {
      id: `mod-${Date.now()}`,
      source: '',
      formula: { type: 'constant', value: 0 } // Default expression
    };
    onChange({ ...value, modifiers: [ ...value.modifiers, newModifier ] });
  };

  const removeModifier = (index: number) => {
    const newModifiers = value.modifiers.filter((_, i) => i !== index);
    onChange({ ...value, modifiers: newModifiers });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block font-semibold">Attribute ID</label>
        <Input
          value={value.id}
          onChange={(e) => onChange({ ...value, id: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="block font-semibold">Attribute Name</label>
        <Input
          value={value.name}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="block font-semibold">Base Value</label>
        <Input
          type="number"
          value={value.base}
          onChange={(e) =>
            onChange({ ...value, base: Number(e.target.value) })
          }
        />
      </div>

      {/* <Separator /> */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">Modifiers</h4>
          <Button variant='add' onClick={addModifier}>Add Modifier</Button>
        </div>

        {value.modifiers.map((mod, index) => 
          <div key={mod.id} className="border rounded p-4 space-y-4 bg-gray-900 border-gray-700">
            <div className="flex gap-4 items-center">
              <label className="w-20">Source:</label>
              <Input
                value={mod.source}
                onChange={(e) =>
                  handleModifierChange(index, {
                    ...mod,
                    source: e.target.value
                  })
                }
              />
              <Button variant='remove' onClick={() => removeModifier(index)}>
                Remove
              </Button>
            </div>

            <div>
              <label className="font-semibold">Formula</label>
              <ExpressionBuilder
                value={mod.formula}
                onChange={(expr: Expression) =>
                  handleModifierChange(index, { ...mod, formula: expr })
                }
                availableVariables={availableVariables}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AttributeSection () {
  const { game: { attrDefs, statDefs }, setAttrDefs } = useEnginContext();

  const addAttribute = () => {
    const newAttribute: AttributeDefinition = {
      id: `attr-${Date.now()}`,
      name: '',
      base: 0,
      modifiers: []
    };
    setAttrDefs([ ...attrDefs, newAttribute ]);
  };

  const updateAttribute = (index: number, updated: AttributeDefinition) => {
    const newList = [ ...attrDefs ];
    newList[index] = updated;
    setAttrDefs(newList);
  };

  const removeAttribute = (index: number) => {
    const newList = attrDefs.filter((_, i) => i !== index);
    setAttrDefs(newList);
  };

  const availableVariables = statDefs.map((def)=> def.name);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 border-gray-700 text-gray-100 shadow-md">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold mr-4">Attributes</h3>
          <Button variant='add-attribute' onClick={addAttribute}>Add Attribute</Button>
        </div>

        {attrDefs.map((attr, index) => 
          <div key={attr.id} className="border rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">{attr.name || 'New Attribute'}</h4>
              <Button variant='remove'  onClick={() => removeAttribute(index)}>
                Remove
              </Button>
            </div>

            <AttributeDefinitionBuilder
              value={attr}
              onChange={(updated) => updateAttribute(index, updated)}
              availableVariables={availableVariables}
            />
          </div>
        )}
      </div>
    </div>
  );
}