import { useState, useMemo, useCallback } from 'react';
import type { ItemConfig } from '@/types/config/item';
import type { InventoryItem, InventoryPosition, GridCell } from '@/types/inventory';

interface UseInventoryProps {
  rows: number;
  columns: number;
  initialItems?: InventoryItem[];
}

export function useInventory ({ rows, columns, initialItems = [] }: UseInventoryProps) {
  const [ items, setItems ] = useState<InventoryItem[]>(initialItems);
  const [ draggedItem, setDraggedItem ] = useState<string | null>(null);
  const [ dragOrigin, setDragOrigin ] = useState<InventoryPosition | null>(null);

  // Generate unique ID for inventory items
  const generateItemId = useCallback(() => {
    return `inv_${crypto.randomUUID()}`;
  }, []);

  // Create grid cells for visualization
  const gridCells = useMemo((): GridCell[][] => {
    const cells: GridCell[][] = [];
    
    for (let row = 0; row < rows; row++) {
      cells[row] = [];
      for (let col = 0; col < columns; col++) {
        const itemAtPosition = items.find(item => 
          item.position.row <= row && 
          row < item.position.row + item.item.space.rows &&
          item.position.column <= col && 
          col < item.position.column + item.item.space.columns
        );
        
        // Check if this cell is the origin of a dragged item
        const isDragOrigin = dragOrigin && 
          row >= dragOrigin.row && 
          row < dragOrigin.row + (items.find(item => item.id === draggedItem)?.item.space.rows || 0) &&
          col >= dragOrigin.column && 
          col < dragOrigin.column + (items.find(item => item.id === draggedItem)?.item.space.columns || 0);
        
        cells[row][col] = {
          row,
          column: col,
          isOccupied: !!itemAtPosition,
          occupiedBy: itemAtPosition?.id,
          isHighlighted: false,
          isDragOrigin: !!isDragOrigin
        };
      }
    }
    
    return cells;
  }, [ items, rows, columns, draggedItem, dragOrigin ]);

  // Check if a position is valid for an item
  const canPlaceItem = useCallback((item: ItemConfig, position: InventoryPosition, excludeItemId?: string): boolean => {
    const { rows: itemRows, columns: itemCols } = item.space;
    
    // Check bounds
    if (position.row < 0 || position.column < 0 || 
        position.row + itemRows > rows || 
        position.column + itemCols > columns) {
      return false;
    }
    
    // Check if space is occupied (excluding the item being moved)
    for (let r = position.row; r < position.row + itemRows; r++) {
      for (let c = position.column; c < position.column + itemCols; c++) {
        const cell = gridCells[r]?.[c];
        if (cell?.isOccupied && cell.occupiedBy !== excludeItemId) {
          return false;
        }
      }
    }
    
    return true;
  }, [ gridCells, rows, columns ]);

  // Add item to inventory
  const addItem = useCallback((item: ItemConfig, position: InventoryPosition) => {
    if (!canPlaceItem(item, position)) {
      throw new Error('Cannot place item at this position');
    }
    
    const newInventoryItem: InventoryItem = {
      id: generateItemId(),
      item,
      position
    };
    
    setItems(prev => [ ...prev, newInventoryItem ]);
  }, [ canPlaceItem, generateItemId ]);

  // Remove item from inventory
  const removeItem = useCallback((itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  }, []);

  // Start drag operation
  const startDrag = useCallback((itemId: string) => {
    const item = items.find(item => item.id === itemId);
    if (item) {
      setDraggedItem(itemId);
      setDragOrigin(item.position);
    }
  }, [ items ]);

  // End drag operation and move item
  const endDrag = useCallback((itemId: string, dropPosition: InventoryPosition) => {
    // console.log('useInventory: Ending drag for item', itemId, 'at', dropPosition);
    
    setItems(prev => {
      const itemIndex = prev.findIndex(item => item.id === itemId);
      if (itemIndex === -1) {
        // console.log('useInventory: Item not found');
        return prev;
      }
      
      const item = prev[itemIndex];
      if (!canPlaceItem(item.item, dropPosition, itemId)) {
        // console.log('useInventory: Cannot place item at drop position');
        return prev;
      }
      
      const newItems = [ ...prev ];
      newItems[itemIndex] = { ...item, position: dropPosition };
      // console.log('useInventory: Item moved successfully');
      return newItems;
    });
    
    // Clear drag state
    setDraggedItem(null);
    setDragOrigin(null);
  }, [ canPlaceItem ]);

  // Get item at position
  const getItemAtPosition = useCallback((position: InventoryPosition): InventoryItem | null => {
    return items.find(item => 
      position.row >= item.position.row && 
      position.row < item.position.row + item.item.space.rows &&
      position.column >= item.position.column && 
      position.column < item.position.column + item.item.space.columns
    ) || null;
  }, [ items ]);

  // Get highlight cells for drag preview (for shop items)
  const getHighlightCells = useCallback((item: ItemConfig, position: InventoryPosition, excludeItemId?: string): GridCell[][] => {
    const { rows: itemRows, columns: itemCols } = item.space;
    const cells: GridCell[][] = [];
    
    for (let row = 0; row < rows; row++) {
      cells[row] = [];
      for (let col = 0; col < columns; col++) {
        const isInHighlightArea = 
          row >= position.row && 
          row < position.row + itemRows &&
          col >= position.column && 
          col < position.column + itemCols;
        
        const cell = gridCells[row]?.[col];
        const isOccupied = cell?.isOccupied && cell.occupiedBy !== excludeItemId;
        
        cells[row][col] = {
          row,
          column: col,
          isOccupied,
          occupiedBy: cell?.occupiedBy,
          isHighlighted: isInHighlightArea && !isOccupied,
          isDragOrigin: false
        };
      }
    }
    
    return cells;
  }, [ gridCells, rows, columns ]);

  return {
    items,
    gridCells,
    draggedItem,
    dragOrigin,
    canPlaceItem,
    addItem,
    removeItem,
    startDrag,
    endDrag,
    getItemAtPosition,
    getHighlightCells
  };
} 