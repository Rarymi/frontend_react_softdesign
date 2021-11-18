import { MessageContext } from 'modules/shared/contexts/MessageContext';
import { useEffect, useContext } from 'react';
import { MessageContainer } from './style';

export default function Message({ message }) {
  const { isVisible, setIsVisible } = useContext(MessageContext);

  useEffect(() => {
    if (!isVisible || !message) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isVisible, setIsVisible, message]);

  return (
    <>
      {isVisible && (
        <MessageContainer>
          <div>{message}</div>
        </MessageContainer>
      )}
    </>
  );
}
