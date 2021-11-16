import { CreateContainer } from 'modules/createBook/style';
import Create from 'assets/images/Create.svg';
import { BtnCreate } from 'modules/book/styledOBS';
import history from 'modules/shared/history';
import Message from 'modules/shared/components/Message';

export default function CreateBook() {
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
            <input type="text" placeholder="Título" />
          </div>
          <div className="input--create">
            <label htmlFor="autor">Autor</label>
            <input type="text" placeholder="Autor" />
          </div>
          <div className="input--create">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              className="descricao"
              name="descricao"
              id="descricao"
              cols="50"
              rows="7"
            ></textarea>
          </div>
          <BtnCreate
            onClick={() => {
              history.push('/', { message: 'Livro criado com sucesso!' });
            }}
          >
            Criar
          </BtnCreate>

          <Message msg="Mensagem aqui" type="success" />
        </div>
      </div>
    </CreateContainer>
  );
}
