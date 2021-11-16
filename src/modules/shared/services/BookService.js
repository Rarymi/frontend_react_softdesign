import Books from 'assets/data/Books.json';

class BookService {
  getById(id) {
    return Books.find((b) => String(b.id) === String(id));
  }
}

export default new BookService();
