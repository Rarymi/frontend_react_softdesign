import { CreateContainer } from 'modules/createBook/style';
import Create from 'assets/images/Create.svg';
import { BtnCreate } from 'modules/book/styledOBS';
import history from 'modules/shared/history';
import Message from 'modules/shared/components/Message';
import { useContext, useState } from 'react';
import { BooksContext } from 'modules/shared/contexts/BooksContext';

export default function CreateBook() {
  const { books, setBooks } = useContext(BooksContext);
  const [titleState, setTitleState] = useState('');
  const [authorState, setAuthorState] = useState('');

  const createBook = () => {
    setBooks([
      ...books,
      {
        author: authorState,
        title: titleState,
        id: books[books.length - 1].id + 1,
      },
    ]);
    history.push('/', { message: 'Livro criado com sucesso!' });
  };

  return (
    <CreateContainer className="main-create">
      <div className="left-create">
        <h1>Adicione um novo Livro!</h1>
        <img className="left-login-image" src={Create} alt="" />
      </div>
      <div className="right-create">
        <div className="card-create">
          <h1>Novo Livro</h1>
          <div className="input--create">
            <label htmlFor="title">Título</label>
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
            <label htmlFor="autor">Autor</label>
            <input
              type="text"
              placeholder="Autor"
              onChange={(e) => {
                setAuthorState(e.target.value);
              }}
              value={authorState}
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
