import { BooksContext } from 'modules/shared/contexts/BooksContext';
import { useContext, useEffect, useState } from 'react';
import { PaginatorButton } from './style';

export default function Paginator() {
  const { setCurrentPage, books } = useContext(BooksContext);
  const [paginatorButtons, setPaginatorButtons] = useState([]);

  useEffect(() => {
    const buttons = [];
    for (let index = 0; index <= Math.floor(books.length / 12); index++) {
      buttons.push(
        <PaginatorButton onClick={() => setCurrentPage(index)}>
          {index + 1}
        </PaginatorButton>
      );
    }
    setPaginatorButtons(buttons);
  }, [books]);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {paginatorButtons.map((b) => b)}
    </div>
  );
}
