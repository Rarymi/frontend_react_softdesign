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
import {
  MdMode,
  MdKeyboardBackspace,
  MdOutlineCheck,
  MdDelete,
} from 'react-icons/md';
import { Button } from 'modules/shared/style';
import { ScreenSizeContext } from 'modules/shared/contexts/ScreenSizeContext';

export default function Book(props) {
  const { isMobile } = useContext(ScreenSizeContext);
  const search = useLocation().pathname;
  const id = search.split('/book/')[1];
  const [book, setBook] = useState({});
  const { books, setBooks } = useContext(BooksContext);
  const [editMode, setEditMode] = useState(false);
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCountry, setBookCountry] = useState('');
  const [bookYear, setBookYear] = useState('');
  const [bookPages, setBookPages] = useState('');

  useEffect(() => {
    setBook(books.find((b) => String(b.id) === String(id)));
  }, [books, id]);

  useEffect(() => {
    setBookTitle(book.title);
    setBookAuthor(book.author);
    setBookCountry(book.country);
    setBookYear(book.year);
    setBookPages(book.pages);
  }, [book]);

  const onDeleteButtonClick = () => {
    const newBooks = [...books];
    newBooks.splice(
      newBooks.findIndex((b) => String(b.id) === String(id)),
      1
    );
    setBooks(newBooks);
    history.push('/');
  };

  const onSaveButtonClick = () => {
    const bookToSave = {
      ...book,
      title: bookTitle,
      author: bookAuthor,
      country: bookCountry,
      year: bookYear,
      pages: bookPages,
    };
    handleBooksUpdate(bookToSave);
    setEditMode(false);
  };

  const onRentButtonClick = () => {
    const bookToRent = {
      ...book,
      rented: !book.rented,
    };
    handleBooksUpdate(bookToRent);
  };

  const handleBooksUpdate = (book) => {
    updateBook(book);
    updateBookList(book);
  };

  const updateBook = (book) => {
    setBook(book);
  };

  const updateBookList = (book) => {
    const bookIndex = books.findIndex((b) => String(b.id) === String(id));
    const newBooks = [...books];
    newBooks[bookIndex] = book;
    setBooks(newBooks);
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
                className="back-button"
                onClick={() => {
                  history.push('/');
                }}
              >
                <MdKeyboardBackspace size={isMobile ? '24px' : '30px'} />
              </button>

              <div className="details-wrapper">
                <div className="button-group">
                  <Button
                    style={{ cursor: book.rented ? 'not-allowed' : 'pointer' }}
                    disabled={book.rented}
                    className="delete-button"
                    onClick={onDeleteButtonClick}
                  >
                    <MdDelete />
                    Excluir Livro
                  </Button>
                  <button
                    className="edit-button"
                    onClick={() => {
                      setEditMode(!editMode);
                    }}
                  >
                    <MdMode size={isMobile ? '24px' : '30px'} />
                  </button>
                </div>

                <BookInfoItem
                  value={bookTitle}
                  setValue={setBookTitle}
                  label="Título"
                  editable={editMode}
                />
                <BookInfoItem
                  value={bookAuthor}
                  setValue={setBookAuthor}
                  label="Autor"
                  editable={editMode}
                />
                <BookInfoItem
                  value={bookCountry}
                  setValue={setBookCountry}
                  label="País de Origem"
                  editable={editMode}
                />
                <BookInfoItem
                  value={bookYear}
                  setValue={setBookYear}
                  label="Ano de Produção"
                  editable={editMode}
                />
                <BookInfoItem
                  value={bookPages}
                  setValue={setBookPages}
                  label="Número de Páginas"
                  editable={editMode}
                />
                <button className="save-button" onClick={onSaveButtonClick}>
                  Salvar {!isMobile && <MdOutlineCheck size="16px" />}
                </button>
              </div>
              <Button
                onClick={onRentButtonClick}
                className={`rent-button ${book.rented ? 'rented' : ''}`}
              >
                {book.rented ? 'Alugado' : 'Alugar'}
              </Button>
            </RightContainer>
          </BookContainer>
        </Container>
      )}
    </>
  );
}
