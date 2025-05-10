import useImage from 'use-image';
import { Image as KonvaImage } from 'react-konva';

import type { MapObject } from '@/types/game';

const MapObject: React.FC<MapObject> = ({ id, assetUrl, position, size }) => {  
  const [ image ] = useImage(assetUrl);

  if (!image) return null;

  return (
    <KonvaImage
      key={id}
      image={image}
      x={position.x}
      y={position.y}
      width={size?.width || undefined}
      height={size?.height || undefined}
    />
  );
};

export default MapObject;