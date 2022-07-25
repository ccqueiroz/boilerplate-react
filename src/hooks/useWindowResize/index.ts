import { useState, useEffect } from 'react';

export interface WindowResizeInterface {
  width: number | undefined;
  height: number | undefined;
}
export function useWindowResize() {
  const [windowSize, setWindowSize] = useState<WindowResizeInterface>({ width: undefined, height: undefined });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return { ...windowSize };
}
