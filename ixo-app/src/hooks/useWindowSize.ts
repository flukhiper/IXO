import { useEffect, useState } from 'react';

export default function useWindowSize () {
  const [ size, setSize ] = useState({ 
    width: 0,
    height: 0 
  });
  
  useEffect(() => {
    // Only run on client
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight 
      });
    };
  
    handleResize(); // Set initial size
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}