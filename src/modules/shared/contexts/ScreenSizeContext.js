import { createContext, useEffect, useState } from 'react';

export const ScreenSizeContext = createContext({});
export function ScreenSizeProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return function cleanup() {
      window.removeEventListener('resize', updateSize);
    };
  });

  function updateSize() {
    const result = window.innerWidth < 600;
    if (result !== isMobile) {
      setIsMobile(result);
    }
  }

  return (
    <ScreenSizeContext.Provider value={{ isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  );
}
