'use client';
import { memo, useRef } from 'react';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';
import Konva from 'konva';

import useContainerSize from '@/hooks/useContainerSize';
import { useGame } from '@/contexts/GameContext';
import { useSelection } from '@/contexts/SelectionContext';

import MapObject from './MapObject';

const RealStageComponent = () => {
  // refs
  const stageRef = useRef<Konva.Stage>(null);

  // hooks
  const { size, containerRef } = useContainerSize<HTMLDivElement>();
  const { gameState, onMapChange } = useGame();
  const { setSelectedObjectId } = useSelection();

  // effects

  // functions
  const onStageWheel = (e: Konva.KonvaEventObject<WheelEvent>) =>  {
    // prevent default behavior
    e.evt.preventDefault();
    if (!stageRef.current) {
      return;
    }
    const stage = stageRef.current;

    const mousePosition = stage.getPointerPosition();

    if (!mousePosition) {
      return;
    }

    const oldScale = stage.scaleX();
    const scaleMultiplier = Math.max(Math.abs(e.evt.deltaY) / 4, 1);
    const scaleBy = 1 + 0.02 * scaleMultiplier;

    const newScale = e.evt.deltaY <= 0 ? oldScale * scaleBy : oldScale / scaleBy;

    if (newScale < 0.05 || newScale > 2) {
      return;
    }

    const pos = {
      x: mousePosition.x,
      y: mousePosition.y
    };
    const mousePointTo = {
      x: pos.x / oldScale - stage.x() / oldScale,
      y: pos.y / oldScale - stage.y() / oldScale
    };

    const newPos = {
      x: -(mousePointTo.x * newScale - pos.x),
      y: -(mousePointTo.y * newScale - pos.y)
    };

    stage.to({
      x: newPos.x,
      y: newPos.y,
      scaleX: newScale,
      scaleY: newScale,
      duration: 0.011
    });
  };

  const handleDeselect = (e: Konva.KonvaEventObject<MouseEvent> | Konva.KonvaEventObject<TouchEvent>) => {
    // if clicked on empty area, remove selection
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedObjectId(null);
    }
  };

  if (!gameState) {
    return <div className='flex-grow bg-gray-900' />;
  }

  return <>
    <div ref={containerRef} className='flex-grow'>
      <Stage 
        ref={stageRef} 
        className='bg-gray-900'
        width={size.width} 
        height={size.height}
        onWheel={onStageWheel}
        onMouseDown={handleDeselect}
        onTouchStart={handleDeselect}
        draggable
      >
        <Layer>
          {
            gameState.board.maps && Object.values(gameState.board.maps).map((map) => {
              return <MapObject 
                key={map.id} {...map} 
                onChange={onMapChange}
              />;
            })
          }
        </Layer>
        <Layer>
          <Text text={'Try to drag shapes '} fontSize={15} stroke={'green'} />
          <Rect
            x={0}
            y={0}
            width={100}
            height={100}
            fill="red"
            shadowBlur={10}
          />
          <Circle
            x={0}
            y={0}
            radius={78}
            fill="green"
            draggable
          />
          <Rect
            x={size.width - 100}
            y={size.height - 100}
            width={100}
            height={100}
            fill="blue"
            shadowBlur={10}
          />
          <Circle
            x={size.width}
            y={size.height}
            radius={78}
            fill="orange"
            draggable
          />
        </Layer>
      </Stage>
    </div>
  </>;
};

const StageComponent = memo(RealStageComponent);

export default StageComponent;