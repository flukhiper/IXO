'use client';
import { useRef, useEffect } from 'react';
import useImage from 'use-image';
import { Image as KonvaImage, Transformer } from 'react-konva';
import Konva from 'konva';

import type { MapObject } from '@/types/game';
import { useSelection } from '@/contexts/SelectionContext';

type MapObjectProps = MapObject & {
  onChange: (id: string, updated: MapObject) => void;
};


const MapObject: React.FC<MapObjectProps> = ({ onChange, ...map }) => {  
  const { id, position, size, assetUrl } = map;

  const shapeRef = useRef<Konva.Image>(null);
  const trRef = useRef<Konva.Transformer>(null);
  const [ image ] = useImage(assetUrl);

  const { selectedObjectId, setSelectedObjectId } = useSelection();
  const isSelected = selectedObjectId === id;

  useEffect(() => {
    if (isSelected && trRef.current && shapeRef.current) {
      trRef.current.nodes([ shapeRef.current ]);
      trRef.current.getLayer()?.batchDraw();
    }
  }, [ isSelected ]);

  const handleSelect = () => {
    setSelectedObjectId(id);
  };

  if (!image) return null;

  return (
    <>
      <KonvaImage
        ref={shapeRef}
        key={id}
        image={image}
        x={position.x}
        y={position.y}
        width={size?.width || undefined}
        height={size?.height || undefined}
        onClick={handleSelect}
        onTap={handleSelect}
        onDragEnd={(e) => {
          onChange(id, {
            ...map,
            position: {
              x: e.target.x(),
              y: e.target.y()
            }
          });
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;
          if (!node) return;
          const updated = {
            ...map,
            position: {
              x: node.x(),
              y: node.y()
            },
            size: {
              width: node.width() * node.scaleX(),
              height: node.height() * node.scaleY()
            },
            rotation: node.rotation()
          };
          node.scaleX(1);
          node.scaleY(1);
          onChange(id, updated);
        }}
        draggable={isSelected}
      />
      {isSelected && 
        <Transformer
          ref={trRef}
          anchorStroke="blue"
          anchorFill="white"
          anchorSize={8}
          borderStroke="blue"
          borderDash={[ 4, 4 ]}
          rotateEnabled={true}
        />
      }
    </>
  );
};

export default MapObject;