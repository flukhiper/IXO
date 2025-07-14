'use client';


import type { InventoryItem } from '@/types/runtime/inventory';

interface ItemDetailsModalProps {
  item: InventoryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSell?: (item: InventoryItem) => void;
}

export default function ItemDetailsModal ({
  item,
  isOpen,
  onClose,
  onSell
}: ItemDetailsModalProps) {
  if (!isOpen || !item) return null;

  const { item: itemConfig, position } = item;

  const getItemStats = () => {
    const stats = [];
    
    stats.push({ label: 'Weight', value: `${itemConfig.weight} lbs` });
    stats.push({ label: 'Space', value: `${itemConfig.space.rows}×${itemConfig.space.columns}` });
    stats.push({ label: 'Cost', value: `${itemConfig.cost} gold` });
    
    if (itemConfig.type === 'weapon' && itemConfig.weapon) {
      const damage = itemConfig.weapon.damage.type === 'dice' 
        ? itemConfig.weapon.damage.formula 
        : itemConfig.weapon.damage.value;
      stats.push({ label: 'Damage', value: damage });
      
      if (itemConfig.weapon.property.finesse) stats.push({ label: 'Property', value: 'Finesse' });
      if (itemConfig.weapon.property.light) stats.push({ label: 'Property', value: 'Light' });
      if (itemConfig.weapon.property.twoHanded) stats.push({ label: 'Property', value: 'Two-Handed' });
    }
    
    if (itemConfig.type === 'armor' && itemConfig.armor) {
      const bonus = itemConfig.armor.armoreBonus.type === 'dice' 
        ? itemConfig.armor.armoreBonus.formula 
        : itemConfig.armor.armoreBonus.value;
      stats.push({ label: 'Armor Bonus', value: bonus });
      
      if (itemConfig.armor.property.light) stats.push({ label: 'Type', value: 'Light Armor' });
      if (itemConfig.armor.property.medium) stats.push({ label: 'Type', value: 'Medium Armor' });
      if (itemConfig.armor.property.heavy) stats.push({ label: 'Type', value: 'Heavy Armor' });
    }
    
    if (itemConfig.type === 'shield' && itemConfig.shield) {
      const bonus = itemConfig.shield.armoreBonus.type === 'dice' 
        ? itemConfig.shield.armoreBonus.formula 
        : itemConfig.shield.armoreBonus.value;
      stats.push({ label: 'Shield Bonus', value: bonus });
    }
    
    return stats;
  };

  const handleSell = () => {
    if (onSell) {
      onSell(item);
    }
    onClose();
  };

  const stats = getItemStats();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{itemConfig.name.en}</h2>
            <p className="text-sm text-gray-600 capitalize">{itemConfig.type}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Item Stats */}
        <div className="space-y-3 mb-6">
          {stats.map((stat, index) => 
            <div key={index} className="flex justify-between">
              <span className="text-sm font-medium text-gray-700">{stat.label}:</span>
              <span className="text-sm text-gray-900">{stat.value}</span>
            </div>
          )}
        </div>

        {/* Position Info */}
        <div className="mb-6 p-3 bg-gray-50 rounded">
          <div className="text-sm text-gray-600">
            <div>Position: Row {position.row + 1}, Column {position.column + 1}</div>
          </div>
        </div>

        {/* Requirements */}
        {itemConfig.requiredProficiencies.length > 0 && 
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Requirements:</h3>
            <div className="text-sm text-gray-600">
              {itemConfig.requiredProficiencies.map((req, index) => 
                <div key={index}>
                  {req.proficiencyId} (Level {req.level})
                </div>
              )}
            </div>
          </div>
        }

        {/* Actions */}
        <div className="space-y-3">
          {/* Sell Button */}
          {onSell && 
            <button
              onClick={handleSell}
              className="w-full py-2 px-4 bg-red-600 text-white rounded font-medium hover:bg-red-700"
            >
              Sell Item ({Math.floor(itemConfig.cost * 0.5)} gold)
            </button>
          }
        </div>
      </div>
    </div>
  );
} 