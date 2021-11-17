import { createContext, useState } from 'react';

export const MessageContext = createContext({});
export function MessageProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <MessageContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </MessageContext.Provider>
  );
}
