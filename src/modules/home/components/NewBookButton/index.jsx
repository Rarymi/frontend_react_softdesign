import history from 'modules/shared/history';
import { BtnNewBook } from 'modules/book/styledOBS';

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
