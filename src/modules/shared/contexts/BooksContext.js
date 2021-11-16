import { createContext, useEffect, useState } from 'react';
import Books from 'assets/data/Books.json';

export const BooksContext = createContext({});
export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagedBooks, setPagedBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filteringString, setFilteringString] = useState('');
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
        if (books[index]) paginatedBooks.push(books[index]);
      }
    }
    setPagedBooks(paginatedBooks);
  }, [books, setBooks, filteredBooks, currentPage]);

  useEffect(() => {
    setBooks(Books);
  }, []);

  const filterBooks = () => {
    if (filteringString === '') setFilteredBooks([]);
    setFilteredBooks(
      books.filter(
        (b) =>
          b.title.toLowerCase().includes(filteringString.toLowerCase()) ||
          b.author.toLowerCase().includes(filteringString.toLowerCase())
      )
    );
  };
  return (
    <BooksContext.Provider
      value={{
        filterBooks,
        setCurrentPage,
        pagedBooks,
        setBooks,
        books,
        filteringString,
        setFilteringString,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
