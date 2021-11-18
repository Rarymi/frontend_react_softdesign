import { BtnCreate, CreateContainer } from 'modules/book/style';
import Create from 'assets/images/Create.svg';
import history from 'modules/shared/history';
import { useContext, useState } from 'react';
import { BooksContext } from 'modules/shared/contexts/BooksContext';
import { MessageContext } from 'modules/shared/contexts/MessageContext';
import { ScreenSizeContext } from 'modules/shared/contexts/ScreenSizeContext';

import { MdKeyboardBackspace } from 'react-icons/md';

export default function CreateBook() {
  const { books, setBooks } = useContext(BooksContext);
  const { setIsVisible } = useContext(MessageContext);
  const [titleState, setTitleState] = useState('');
  const [authorState, setAuthorState] = useState('');
  const [countryState, setCountryState] = useState('');
  const [yearState, setYearState] = useState('');
  const [pagesState, setPagesState] = useState('');
  const { isMobile } = useContext(ScreenSizeContext);

  const createBook = () => {
    setBooks([
      ...books,
      {
        author: authorState,
        title: titleState,
        country: countryState,
        year: yearState,
        pages: pagesState,
        id: books[books.length - 1].id + 1,
      },
    ]);
    setIsVisible(true);
    history.push('/', { message: 'Livro criado com sucesso!' });
  };

  return (
    <CreateContainer className="main-create" isMobile>
      {!isMobile && (
        <div className="left-login">
          <h1>
            Adicione,
            <br /> Um novo livro!
          </h1>

          <img className="left-create-image" src={Create} alt="" />
        </div>
      )}
      <div className="right-create">
        <div className="card-create">
          <button
            className="back-button"
            onClick={() => {
              history.push('/');
            }}
          >
            <MdKeyboardBackspace size={isMobile ? '24px' : '30px'} />
          </button>
          <div className="input--create">
            <label htmlFor="title">Título: </label>
            <input
              type="text"
              placeholder="Título"
              onChange={(e) => {
                setTitleState(e.target.value);
              }}
              value={titleState}
            />
          </div>
          <div className="input--create">
            <label htmlFor="autor">Autor: </label>
            <input
              type="text"
              placeholder="Autor"
              onChange={(e) => {
                setAuthorState(e.target.value);
              }}
              value={authorState}
            />
          </div>
          <div className="input--create">
            <label htmlFor="paisdeorigem">País de Origem: </label>
            <input
              type="text"
              placeholder="País de Origem"
              onChange={(e) => {
                setCountryState(e.target.value);
              }}
              value={countryState}
            />
          </div>
          <div className="input--create">
            <label htmlFor="anodeproducao">Ano de Produção: </label>
            <input
              required
              type="number"
              placeholder="Ano de Produção"
              onChange={(e) => {
                setYearState(e.target.value);
              }}
              value={yearState}
            />
          </div>
          <div className="input--create">
            <label htmlFor="numerodepaginas">Número de Páginas: </label>
            <input
              type="number"
              placeholder="Número de Páginas"
              onChange={(e) => {
                setPagesState(e.target.value);
              }}
              value={pagesState}
            />
          </div>
          <BtnCreate
            onClick={() => {
              createBook();
            }}
          >
            Criar
          </BtnCreate>
        </div>
      </div>
    </CreateContainer>
  );
}
