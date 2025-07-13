'use client';

import { useState, useMemo } from 'react';
import type { ItemConfig } from '@/types/config/item';

interface ItemShopProps {
  items: ItemConfig[];
  gameSystemId: string;
  onPurchase: (item: ItemConfig) => void;
  remainingBudget: number;
}

export default function ItemShop ({
  items,
  gameSystemId,
  onPurchase,
  remainingBudget
}: ItemShopProps) {
  const [ selectedCategory, setSelectedCategory ] = useState<string>('all');
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ sortBy, setSortBy ] = useState<'name' | 'cost' | 'type'>('name');

  // Filter items by game system, category, and search term
  const filteredItems = useMemo(() => {
    // Early return if no items
    if (!items.length) return [];
    
    return items
      .filter(item => 
        item.gameSystemId === gameSystemId &&
        (selectedCategory === 'all' || item.type === selectedCategory) &&
        (searchTerm === '' || item.name.en.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .sort((a, b) => {
        switch (sortBy) {
          case 'name':
            return a.name.en.localeCompare(b.name.en);
          case 'cost':
            return a.cost - b.cost;
          case 'type':
            return a.type.localeCompare(b.type);
          default:
            return 0;
        }
      });
  }, [ items, gameSystemId, selectedCategory, searchTerm, sortBy ]);

  // Get unique categories from items
  const categories = useMemo(() => {
    const cats = [ ...new Set(items.map(item => item.type)) ];
    return [ 'all', ...cats ];
  }, [ items ]);

  const getItemDetails = (item: ItemConfig) => {
    const details = [];
    
    details.push(`Weight: ${item.weight} lbs`);
    details.push(`Space: ${item.space.rows}×${item.space.columns}`);
    
    if (item.type === 'weapon' && item.weapon) {
      const damage = item.weapon.damage.type === 'dice' 
        ? item.weapon.damage.formula 
        : item.weapon.damage.value;
      details.push(`Damage: ${damage}`);
      
      if (item.weapon.property.finesse) details.push('Finesse');
      if (item.weapon.property.light) details.push('Light');
      if (item.weapon.property.twoHanded) details.push('Two-Handed');
    }
    
    if (item.type === 'armor' && item.armor) {
      const bonus = item.armor.armoreBonus.type === 'dice' 
        ? item.armor.armoreBonus.formula 
        : item.armor.armoreBonus.value;
      details.push(`Armor Bonus: ${bonus}`);
      
      if (item.armor.property.light) details.push('Light');
      if (item.armor.property.medium) details.push('Medium');
      if (item.armor.property.heavy) details.push('Heavy');
    }
    
    if (item.type === 'shield' && item.shield) {
      const bonus = item.shield.armoreBonus.type === 'dice' 
        ? item.shield.armoreBonus.formula 
        : item.shield.armoreBonus.value;
      details.push(`Shield Bonus: ${bonus}`);
    }
    
    return details;
  };

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          {categories.map(category => 
            <option key={category} value={category}>
              {category === 'all' ? 'All Items' : category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          )}
        </select>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'name' | 'cost' | 'type')}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="name">Sort by Name</option>
          <option value="cost">Sort by Cost</option>
          <option value="type">Sort by Type</option>
        </select>
      </div>

      {/* Budget Display */}
      <div className="bg-blue-50 p-3 rounded-lg">
        <div className="text-sm font-medium text-blue-900">
          Remaining Budget: <span className="font-bold">{remainingBudget} gold</span>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {filteredItems.map(item => {
          const canAfford = remainingBudget >= item.cost;
          const details = getItemDetails(item);
          
          return (
            <div 
              key={item.id} 
              className={`border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors ${
                !canAfford ? 'opacity-50' : ''
              }`}
            >
              {/* Item Header */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{item.name.en}</h4>
                  <p className="text-sm text-gray-600 capitalize">{item.type}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-gray-900">{item.cost}</div>
                  <div className="text-xs text-gray-500">gold</div>
                </div>
              </div>

              {/* Item Details */}
              <div className="space-y-1 mb-4">
                {details.map((detail, index) => 
                  <div key={index} className="text-xs text-gray-600">
                    {detail}
                  </div>
                )}
              </div>

              {/* Requirements */}
              {item.requiredProficiencies.length > 0 && 
                <div className="mb-3">
                  <div className="text-xs font-medium text-gray-700 mb-1">Requirements:</div>
                  <div className="text-xs text-gray-600">
                    {item.requiredProficiencies.map(req => 
                      `${req.proficiencyId} (${req.level})`
                    ).join(', ')}
                  </div>
                </div>
              }

              {/* Purchase Button */}
              <button
                onClick={() => onPurchase(item)}
                disabled={!canAfford}
                className={`w-full py-2 px-4 rounded font-medium transition-colors ${
                  canAfford
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {canAfford ? 'Purchase' : 'Cannot Afford'}
              </button>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && 
        <div className="text-center py-8 text-gray-500">
          No items found matching your criteria.
        </div>
      }
    </div>
  );
} 