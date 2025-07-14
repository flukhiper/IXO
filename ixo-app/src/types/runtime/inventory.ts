import type { ItemConfig } from '@/types/config/item';

export interface InventoryPosition {
  row: number;
  column: number;
}

export interface InventoryItem {
  id: string; // Unique identifier for this inventory item instance
  item: ItemConfig;
  position: InventoryPosition;
}

export interface InventoryGrid {
  rows: number;
  columns: number;
  items: InventoryItem[];
}

export interface DragItem {
  item: ItemConfig;
  originalPosition?: InventoryPosition;
  isDragging: boolean;
}

export interface GridCell {
  row: number;
  column: number;
  isOccupied: boolean;
  occupiedBy?: string; // inventory item ID
  isHighlighted: boolean;
  isDragOrigin?: boolean; // indicates if this cell is the origin of a dragged item
} 