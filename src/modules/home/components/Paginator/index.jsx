import { BooksContext } from 'modules/shared/contexts/BooksContext';
import { useContext } from 'react';
import { PaginatorButton } from './style';

export default function Paginator() {
  const { setCurrentPage } = useContext(BooksContext);
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <PaginatorButton onClick={() => setCurrentPage(0)}>1</PaginatorButton>
      <PaginatorButton onClick={() => setCurrentPage(1)}>2</PaginatorButton>
      <PaginatorButton onClick={() => setCurrentPage(2)}>3</PaginatorButton>
      <PaginatorButton onClick={() => setCurrentPage(3)}>4</PaginatorButton>
      <PaginatorButton onClick={() => setCurrentPage(4)}>5</PaginatorButton>
      <PaginatorButton onClick={() => setCurrentPage(5)}>6</PaginatorButton>
      <PaginatorButton onClick={() => setCurrentPage(6)}>7</PaginatorButton>
      <PaginatorButton onClick={() => setCurrentPage(7)}>8</PaginatorButton>
      <PaginatorButton onClick={() => setCurrentPage(8)}>9</PaginatorButton>
    </div>
  );
}
