const fs = require('fs');
const books = JSON.parse(fs.readFileSync('./src/assets/data/Books.json'));

const newBooks = books.map((b, index) => {
  console.log(b);
  return {
    ...b,
    rented: index % 2 ? true : false,
  };
});

console.log(newBooks);

fs.writeFileSync('./newBooks.json', JSON.stringify(newBooks));
