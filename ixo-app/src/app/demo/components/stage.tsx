'use client';
import { memo, useEffect, useRef } from 'react';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';
import Konva from 'konva';

import useContainerSize from '@/hooks/useContainerSize';

const RealStageComponent = () => {
  const stageRef = useRef<Konva.Stage>(null);
  const { size: { width, height }, containerRef } = useContainerSize<HTMLDivElement>();

  return <>
    <div ref={containerRef} className='flex-grow'>
      <Stage ref={stageRef} width={width} height={height}>
        <Layer>
          <Text text={'Try to drag shapes '} fontSize={15} stroke={'green'} />
          <Rect
            x={20}
            y={50}
            width={100}
            height={100}
            fill="red"
            shadowBlur={10}
            draggable
          />
          <Circle
            x={20}
            y={50}
            radius={50}
            fill="green"
            draggable
          />
        </Layer>
      </Stage>
    </div>
  </>;
};

const StageComponent = memo(RealStageComponent);

export default StageComponent;