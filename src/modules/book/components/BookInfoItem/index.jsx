import { Container } from './style';

export default function BookInfoItem({ label, value, editable, setValue }) {
  return (
    <Container>
      <span>{label}:</span>
      <br />

      <input
        disabled={!editable}
        className="book-info"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
      <br />
    </Container>
  );
}
