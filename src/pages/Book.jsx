import {
  BookContainer,
  Container,
  LeftContainer,
  RightContainer,
} from 'modules/book/style';
import BookService from 'modules/shared/services/BookService';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import BookInfoItem from 'modules/book/components/BookInfoItem';
import Header from 'modules/shared/components/Header';
import history from 'modules/shared/history';

export default function Book(props) {
  const search = useLocation().pathname;
  const id = search.split('/book/')[1];
  const [book, setBook] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setBook(BookService.getById(id));
  }, []);

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
              <button>Excluir Livro</button>
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
