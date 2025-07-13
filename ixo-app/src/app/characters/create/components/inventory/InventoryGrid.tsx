'use client';

import { useRef, useState } from 'react';
import { Stage, Layer, Rect, Text, Group } from 'react-konva';
import Konva from 'konva';
import type { InventoryItem, InventoryPosition, GridCell } from '@/types/inventory';

interface InventoryGridProps {
  rows: number;
  columns: number;
  items: InventoryItem[];
  gridCells: GridCell[][];
  cellSize?: number;
  onItemClick?: (item: InventoryItem) => void;
  onItemDragStart?: (itemId: string) => void;
  onItemDragEnd?: (itemId: string, dropPosition: InventoryPosition) => void;
  onCellClick?: (position: InventoryPosition) => void;
  highlightCells?: GridCell[][];
}

const CELL_SIZE = 40;
const GRID_COLOR = '#e5e7eb';
const OCCUPIED_COLOR = '#d1d5db';
const HIGHLIGHT_COLOR = '#3b82f6';
const HIGHLIGHT_OPACITY = 0.3;
const DRAG_ORIGIN_COLOR = '#dc2626';
const DRAG_ORIGIN_OPACITY = 0.4;

export default function InventoryGrid ({
  rows,
  columns,
  items,
  gridCells,
  cellSize = CELL_SIZE,
  onItemClick,
  onItemDragStart,
  onItemDragEnd,
  onCellClick,
  highlightCells
}: InventoryGridProps) {
  const stageRef = useRef<Konva.Stage>(null);
  const [ draggedItem, setDraggedItem ] = useState<string | null>(null);
  const [ dragOffset, setDragOffset ] = useState<InventoryPosition | null>(null);

  const width = columns * cellSize;
  const height = rows * cellSize;

  const handleItemDragStart = (itemId: string, e: Konva.KonvaEventObject<MouseEvent>) => {
    setDraggedItem(itemId);
    
    // Calculate offset from mouse to item top-left corner in grid coordinates
    const item = items.find(item => item.id === itemId);
    if (item) {
      const pointerPosition = e.target.getStage()?.getPointerPosition();
      
      if (pointerPosition) {
        // Convert mouse position to grid coordinates
        const mouseCol = Math.floor(pointerPosition.x / cellSize);
        const mouseRow = Math.floor(pointerPosition.y / cellSize);
        
        // Calculate offset in grid coordinates
        const gridOffset = {
          row: mouseRow - item.position.row,
          column: mouseCol - item.position.column
        };
        
        setDragOffset(gridOffset);
        // console.log('Started dragging item:', itemId, item.position, { mouseRow, mouseCol }, gridOffset, pointerPosition);
      }
    }
    
    onItemDragStart?.(itemId);
  };

  const handleItemDragEnd = (itemId: string, e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = e.target.getStage();
    if (!stage || !onItemDragEnd || !dragOffset) return;

    const pointerPosition = stage.getPointerPosition();
    if (!pointerPosition) return;

    // Convert mouse position to grid coordinates
    const mouseCol = Math.floor(pointerPosition.x / cellSize);
    const mouseRow = Math.floor(pointerPosition.y / cellSize);
    
    // Calculate final position by subtracting the drag offset
    const finalCol = mouseCol - dragOffset.column;
    const finalRow = mouseRow - dragOffset.row;
    
    // Get the current item to check its dimensions
    const currentItem = items.find(item => item.id === itemId);
    if (!currentItem) {
      setDraggedItem(null);
      setDragOffset(null);
      return;
    }
    
    // Check if final position is out of bounds (considering item dimensions)
    const itemRows = currentItem.item.space.rows;
    const itemCols = currentItem.item.space.columns;
    
    const isOutOfBounds = finalCol < 0 || finalRow < 0 || 
                         finalCol + itemCols > columns || finalRow + itemRows > rows;
    
    // Ensure position is within bounds (this should now always be valid)
    const clampedCol = Math.max(0, Math.min(finalCol, columns - itemCols));
    const clampedRow = Math.max(0, Math.min(finalRow, rows - itemRows));
    
    // console.log('Dropping item to', { row: clampedRow, column: clampedCol }, { mouseRow, mouseCol }, dragOffset, pointerPosition);
    
    // Check if position changed and is valid
    const positionChanged = currentItem.position.row !== clampedRow || currentItem.position.column !== clampedCol;
    
    if (isOutOfBounds || !positionChanged) {
      // Animate back to original position if out of bounds or no change
      e.target.to({ 
        x: currentItem.position.column * cellSize, 
        y: currentItem.position.row * cellSize, 
        duration: 0 
      });
    } else {
      // Move to new position
      onItemDragEnd(itemId, { row: clampedRow, column: clampedCol });
      e.target.to({ 
        x: clampedCol * cellSize, 
        y: clampedRow * cellSize, 
        duration: 0 
      });
    }
    
    // Clear drag state
    setDraggedItem(null);
    setDragOffset(null);
  };

  const handleCellClick = (row: number, col: number) => {
    if (onCellClick) {
      onCellClick({ row, column: col });
    }
  };

  const renderGridCells = () => {
    const cells = [];
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const cell = highlightCells?.[row]?.[col] || gridCells[row]?.[col];
        const isHighlighted = cell?.isHighlighted;
        const isOccupied = cell?.isOccupied;
        const isDragOrigin = cell?.isDragOrigin;
        
        let fillColor = GRID_COLOR;
        let opacity = 1;
        
        if (isDragOrigin) {
          fillColor = DRAG_ORIGIN_COLOR;
          opacity = DRAG_ORIGIN_OPACITY;
        } else if (isHighlighted) {
          fillColor = HIGHLIGHT_COLOR;
          opacity = HIGHLIGHT_OPACITY;
        } else if (isOccupied) {
          fillColor = OCCUPIED_COLOR;
        }
        
        cells.push(
          <Rect
            key={`${row}-${col}`}
            x={col * cellSize}
            y={row * cellSize}
            width={cellSize}
            height={cellSize}
            fill={fillColor}
            opacity={opacity}
            stroke="#9ca3af"
            strokeWidth={1}
            onClick={() => handleCellClick(row, col)}
            onTap={() => handleCellClick(row, col)}
          />
        );
      }
    }
    
    return cells;
  };

  const renderItems = () => {
    return items.map((inventoryItem) => {
      const { item, position } = inventoryItem;
      const { rows: itemRows, columns: itemCols } = item.space;
      
      const isDraggingThis = draggedItem === inventoryItem.id;
      
      // Use normal grid position - Konva's draggable handles the visual dragging
      const x = position.column * cellSize;
      const y = position.row * cellSize;
      const width = itemCols * cellSize;
      const height = itemRows * cellSize;

      // console.log('renderItems', inventoryItem.id, { x, y, width, height }, position);
      
      return (
        <Group
          key={inventoryItem.id}
          x={x}
          y={y}
          draggable={!!onItemDragStart}
          onDragStart={(e) => handleItemDragStart(inventoryItem.id, e)}
          onDragEnd={(e) => handleItemDragEnd(inventoryItem.id, e)}
          onClick={() => onItemClick?.(inventoryItem)}
          onTap={() => onItemClick?.(inventoryItem)}
        >
          {/* Item background */}
          <Rect
            width={width}
            height={height}
            fill={isDraggingThis ? '#fbbf24' : '#f3f4f6'}
            stroke={isDraggingThis ? '#d97706' : '#6b7280'}
            strokeWidth={isDraggingThis ? 3 : 2}
            cornerRadius={4}
            opacity={isDraggingThis ? 0.8 : 1}
          />
          
          {/* Item name */}
          <Text
            text={item.name.en}
            x={4}
            y={4}
            width={width - 8}
            height={height - 8}
            fontSize={Math.min(12, cellSize / 3)}
            fill="#374151"
            align="center"
            verticalAlign="middle"
            wrap="word"
          />
          
          {/* Item type indicator */}
          <Text
            text={item.type}
            x={4}
            y={height - 16}
            fontSize={8}
            fill="#6b7280"
            align="left"
          />
        </Group>
      );
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <Stage
        ref={stageRef}
        width={width}
        height={height}
        style={{ backgroundColor: 'white' }}
      >
        <Layer>
          {renderGridCells()}
          {renderItems()}
        </Layer>
      </Stage>
    </div>
  );
} 