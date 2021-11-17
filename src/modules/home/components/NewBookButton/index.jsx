import { BtnNewBook } from 'modules/book/style';
import history from 'modules/shared/history';

export default function NewBookButton() {
  return (
    <BtnNewBook
      onClick={() => {
        history.push('/create');
      }}
    >
      Novo Livro
    </BtnNewBook>
  );
}
