'use client';
import { StaticCanvas, FabricText } from 'fabric';
import { useEffect, useState } from 'react';

const StaticCanvasPage = () => {
  const [ imageSrc, setImageSrc ] = useState<string>();

  useEffect(()=>{
    const canvas = new StaticCanvas();
    const helloWorld = new FabricText('Hello world!');
    canvas.add(helloWorld);
    canvas.centerObject(helloWorld);
    setImageSrc(canvas.toDataURL());
  }, []);

  return <>
    <section>
      <h1>Static Image</h1>
      <a href={imageSrc} download={'image.png'}>Download Image</a>
    </section>
  </>;
};

export default StaticCanvasPage;