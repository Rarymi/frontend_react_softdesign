import { Container, ListContainer, ListItem } from './style';
import history from 'modules/shared/history';
import Paginator from '../Paginator';
import NewBookButton from '../NewBookButton';
import { useContext, useState } from 'react';
import { BooksContext } from 'modules/shared/contexts/BooksContext';
import Message from 'modules/shared/components/Message';

export default function BookList() {
  const { pagedBooks, filterBooks, filteringString, setFilteringString } =
    useContext(BooksContext);

  const handleBooksFilter = (e) => {
    setFilteringString(e.target.value);
    filterBooks();
  };

  return (
    <Container>
      <input
        className="search"
        type="text"
        placeholder="Pesquisar"
        onInput={(e) => handleBooksFilter(e)}
        value={filteringString}
      />
      <ListContainer>
        {pagedBooks &&
          pagedBooks.map((b) => {
            return (
              <ListItem
                background={`/assets/${b.imageLink}`}
                onClick={() => {
                  history.push(`/book/${b.id}`);
                }}
              >
                <div className="book-description-container">
                  <div>{b.title}</div>
                  <div>{b.author}</div>
                </div>
              </ListItem>
            );
          })}
      </ListContainer>
      <Paginator />
      <NewBookButton />
    </Container>
  );
}
