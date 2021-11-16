import {
  BookContainer,
  Container,
  LeftContainer,
  RightContainer,
} from 'modules/book/style';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import BookInfoItem from 'modules/book/components/BookInfoItem';
import Header from 'modules/shared/components/Header';
import history from 'modules/shared/history';
import { BooksContext } from 'modules/shared/contexts/BooksContext';

export default function Book(props) {
  const search = useLocation().pathname;
  const id = search.split('/book/')[1];
  const [book, setBook] = useState({});
  const { books, setBooks } = useContext(BooksContext);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setBook(books.find((b) => String(b.id) === String(id)));
  }, []);

  const onDeleteButtonClick = () => {
    const newBooks = [...books];
    newBooks.splice(
      newBooks.findIndex((b) => String(b.id) === String(id)),
      1
    );
    setBooks(newBooks);
    history.push('/');
  };

  return (
    <>
      <Header />
      {book && (
        <Container>
          <BookContainer>
            <LeftContainer>
              <img src={`/assets/${book.imageLink}`} alt="Capa do livro" />
            </LeftContainer>
            <RightContainer>
              <button
                onClick={() => {
                  history.push('/');
                }}
              >
                Voltar
              </button>
              <button
                onClick={() => {
                  setEditMode(!editMode);
                }}
              >
                Editar
              </button>
              <button onClick={onDeleteButtonClick}>Excluir Livro</button>
              <div className="details-wrapper">
                <BookInfoItem
                  value={book.title}
                  label="Título"
                  editable={editMode}
                />
                <BookInfoItem
                  value={book.author}
                  label="Autor"
                  editable={editMode}
                />
                <BookInfoItem
                  value={book.country}
                  label="País de Origem"
                  editable={editMode}
                />
                <BookInfoItem
                  value={book.year}
                  label="Ano de Produção"
                  editable={editMode}
                />
                <BookInfoItem
                  value={book.pages}
                  label="Número de Páginas"
                  editable={editMode}
                />
              </div>
              <button onClick={() => console.log('alugar')}>Alugar</button>
            </RightContainer>
          </BookContainer>
        </Container>
      )}
    </>
  );
}
