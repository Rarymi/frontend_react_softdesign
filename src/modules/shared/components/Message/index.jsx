import { useState, useEffect } from 'react';
import { MessageContainer } from './style';

export default function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <MessageContainer>
          <div>{msg}</div>
        </MessageContainer>
      )}
    </>
  );
}
