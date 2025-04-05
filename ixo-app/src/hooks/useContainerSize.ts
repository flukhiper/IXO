import { useEffect, useRef, useState } from 'react';

export default function useContainerSize<E> () {
  const containerRef = useRef<E>(null);
  const [ size, setSize ] = useState({ 
    width: 0,
    height: 0 
  });
  
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }


    // Only run on client
    const handleResize = () => {
      const element = containerRef.current as unknown as HTMLElement;

      const { width, height } = element.getBoundingClientRect();
      setSize({
        width,
        height
      });
    };
  
    handleResize(); // Set initial size
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return { 
    size,
    containerRef 
  };
}