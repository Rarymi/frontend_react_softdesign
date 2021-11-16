export default function Paginator({ setCurrentPage }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <button onClick={() => setCurrentPage(0)}>1</button>
      <button onClick={() => setCurrentPage(1)}>2</button>
      <button onClick={() => setCurrentPage(2)}>3</button>
      <button onClick={() => setCurrentPage(3)}>4</button>
      <button onClick={() => setCurrentPage(4)}>5</button>
      <button onClick={() => setCurrentPage(5)}>6</button>
      <button onClick={() => setCurrentPage(6)}>7</button>
      <button onClick={() => setCurrentPage(7)}>8</button>
      <button onClick={() => setCurrentPage(8)}>9</button>
    </div>
  );
}
