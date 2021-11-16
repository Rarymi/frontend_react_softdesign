import { Container, ListContainer, ListItem } from './style';
import Books from 'assets/data/Books.json';
import history from 'modules/shared/history';
import { useState } from 'react';
import { useEffect } from 'react';
import Paginator from '../Paginator';
import NewBook from '../NewBook';

export default function BookList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pagedBooks, setPagedBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    const paginatedBooks = [];
    for (
      let index = 12 * currentPage;
      index < 12 * (currentPage + 1);
      index++
    ) {
      if (filteredBooks.length > 0) {
        if (filteredBooks[index]) paginatedBooks.push(filteredBooks[index]);
      } else {
        if (Books[index]) paginatedBooks.push(Books[index]);
      }
    }

    setPagedBooks(paginatedBooks);
  }, [currentPage, filteredBooks]);

  const filterBooks = (searchString) => {
    if (searchString === '') setFilteredBooks([]);
    setFilteredBooks(
      Books.filter(
        (b) =>
          b.title.toLowerCase().includes(searchString.toLowerCase()) ||
          b.author.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  };

  return (
    <Container>
      <input
        className="search"
        type="text"
        placeholder="Pesquisar"
        onInput={(e) => filterBooks(e.target.value)}
      />
      <NewBook />
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
      <Paginator setCurrentPage={setCurrentPage} />
    </Container>
  );
}
