import history from 'modules/shared/history';
import { BtnNewBook } from 'modules/book/styledOBS';

export default function NewBook() {
  return (
    <div>
      <BtnNewBook
        onClick={() => {
          history.push('/create');
        }}
      >
        Novo Livro
      </BtnNewBook>
    </div>
  );
}
