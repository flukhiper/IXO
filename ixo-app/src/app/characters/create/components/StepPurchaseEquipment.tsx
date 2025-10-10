'use client';

import { useState, useMemo, useCallback } from 'react';
import { useItems } from '../hooks/useItems';
import { useInventory } from '../hooks/useInventory';
import InventoryGrid from './inventory/InventoryGrid';
import ItemShop from './inventory/ItemShop';
import ItemDetailsModal from './inventory/ItemDetailsModal';
import type { ItemConfig } from '@/types/config/item';
import type { InventoryItem, InventoryPosition } from '@/types/runtime/inventory';
import type { CharacterConfig } from '@/types/config/gameSystem';

interface StepPurchaseEquipmentProps {
  gameSystemId: string;
  characterConfig: CharacterConfig;
  setPurchasedItems: (items: ItemConfig[]) => void;
  onNext: () => void;
  errors: string[];
}

export default function StepPurchaseEquipment ({
  gameSystemId,
  characterConfig,
  setPurchasedItems,
  onNext,
  errors
}: StepPurchaseEquipmentProps) {
  const { items, loading, error } = useItems(gameSystemId);
  const [ selectedItem, setSelectedItem ] = useState<InventoryItem | null>(null);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ dragPreview, setDragPreview ] = useState<{ item: ItemConfig; position: InventoryPosition } | null>(null);

  // Starting budget from character config
  const startingBudget = characterConfig?.startGold ?? 200;
  
  // Initialize inventory with 6x12 grid (changed from 12x6)
  const {
    items: inventoryItems,
    gridCells,
    canPlaceItem,
    addItem,
    removeItem,
    startDrag,
    endDrag,
    getHighlightCells
  } = useInventory({
    rows: 6,
    columns: 12,
    initialItems: []
  });

  // Calculate total spent
  const totalSpent = useMemo(() => {
    return inventoryItems.reduce((total, inventoryItem) => {
      return total + inventoryItem.item.cost;
    }, 0);
  }, [ inventoryItems ]);

  const remainingBudget = startingBudget - totalSpent;

  // Handle item purchase from shop
  const handlePurchase = useCallback((item: ItemConfig) => {
    if (remainingBudget < item.cost) {
      alert('Not enough budget!');
      return;
    }

    // Find first available position for the item
    let placed = false;
    for (let row = 0; row < 6 && !placed; row++) {
      for (let col = 0; col < 12 && !placed; col++) {
        const position = { row, column: col };
        if (canPlaceItem(item, position)) {
          addItem(item, position);
          placed = true;
        }
      }
    }

    if (!placed) {
      alert('No space available in inventory!');
    }
  }, [ remainingBudget, canPlaceItem, addItem ]);

  // Handle item click in inventory
  const handleItemClick = useCallback((inventoryItem: InventoryItem) => {
    setSelectedItem(inventoryItem);
    setIsModalOpen(true);
  }, []);

  // Handle item drag start
  const handleItemDragStart = useCallback((itemId: string) => {
    // console.log('StepPurchaseEquipment: Starting drag for item', itemId);
    startDrag(itemId);
  }, [ startDrag ]);

  // Handle item drag end
  const handleItemDragEnd = useCallback((itemId: string, dropPosition: InventoryPosition) => {
    // console.log('StepPurchaseEquipment: Ending drag for item', itemId, 'at', dropPosition);
    endDrag(itemId, dropPosition);
  }, [ endDrag ]);

  // Handle cell click for item placement preview
  const handleCellClick = useCallback((position: InventoryPosition) => {
    if (dragPreview) {
      if (canPlaceItem(dragPreview.item, position)) {
        addItem(dragPreview.item, position);
        setDragPreview(null);
      }
    }
  }, [ dragPreview, canPlaceItem, addItem ]);

  // Handle sell item
  const handleSellItem = useCallback((inventoryItem: InventoryItem) => {
    removeItem(inventoryItem.id);
    // Note: In a real implementation, you might want to add the sell value back to budget
  }, [ removeItem ]);

  // Get highlight cells for drag preview (shop items)
  const highlightCells = useMemo(() => {
    if (!dragPreview) return undefined;
    return getHighlightCells(dragPreview.item, dragPreview.position);
  }, [ dragPreview, getHighlightCells ]);

  // Handle next step
  const handleNext = () => {
    // Convert inventory items to purchased items format
    const itemsToPurchase: ItemConfig[] = inventoryItems.map(inventoryItem => inventoryItem.item);
    setPurchasedItems(itemsToPurchase);
    onNext();
  };

  if (loading) return <div>Loading equipment...</div>;
  if (error) return <div>Error loading equipment: {error}</div>;

  return (
    <div className="space-y-6">
      {/* Budget Display */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-lg mb-2 text-blue-900">Equipment Budget</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-sm text-blue-700">Starting Budget</div>
            <div className="text-xl font-bold text-blue-900">{startingBudget} gold</div>
          </div>
          <div>
            <div className="text-sm text-blue-700">Total Spent</div>
            <div className="text-xl font-bold text-blue-900">{totalSpent} gold</div>
          </div>
          <div>
            <div className="text-sm text-blue-700">Remaining</div>
            <div className={`text-xl font-bold ${remainingBudget < 0 ? 'text-red-600' : 'text-green-600'}`}>
              {remainingBudget} gold
            </div>
          </div>
        </div>
      </div>

      {errors.length > 0 && 
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {errors.map((error, index) => 
            <div key={index}>{error}</div>
          )}
        </div>
      }

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Inventory Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Character Inventory</h3>
            <div className="text-sm text-gray-600">
              {inventoryItems.length} items • {totalSpent} gold spent
            </div>
          </div>
          
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <InventoryGrid
              rows={6}
              columns={12}
              items={inventoryItems}
              gridCells={gridCells}
              onItemClick={handleItemClick}
              onItemDragStart={handleItemDragStart}
              onItemDragEnd={handleItemDragEnd}
              onCellClick={handleCellClick}
              highlightCells={highlightCells}
            />
          </div>

          {/* Inventory Stats */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 p-3 rounded">
              <div className="font-medium text-gray-700">Total Weight</div>
              <div className="text-lg font-bold text-gray-900">
                {inventoryItems.reduce((total, item) => total + item.item.weight, 0)} lbs
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="font-medium text-gray-700">Space Used</div>
              <div className="text-lg font-bold text-gray-900">
                {inventoryItems.reduce((total, item) => total + item.item.space.rows * item.item.space.columns, 0)} / 72
              </div>
            </div>
          </div>
        </div>

        {/* Shop Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Item Shop</h3>
          <ItemShop
            items={items}
            gameSystemId={gameSystemId}
            onPurchase={handlePurchase}
            remainingBudget={remainingBudget}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          {inventoryItems.length === 0 && 'Purchase at least one item to continue'}
        </div>
        <button
          onClick={handleNext}
          disabled={inventoryItems.length === 0 || remainingBudget < 0}
          className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Complete Equipment Setup
        </button>
      </div>

      {/* Item Details Modal */}
      <ItemDetailsModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItem(null);
        }}
        onSell={handleSellItem}
      />
    </div>
  );
} 