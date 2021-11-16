import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from './style';

export default function BookInfoItem({ label, value, editable }) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <Container>
      <span>{label}:</span>
      <br />

      <input
        disabled={!editable}
        className="book-info"
        value={inputValue}
        onInput={(e) => setInputValue(e.target.value)}
      />
      <br />
    </Container>
  );
}
