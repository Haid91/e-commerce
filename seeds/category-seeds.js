const { BookGenre } = require('../models');

const bookGenreData = [
  {
    genre_name: 'Fiction',
  },
  {
    genre_name: 'Non-Fiction',
  },
  {
    genre_name: 'Science Fiction',
  },
  {
    genre_name: 'Fantasy',
  },
  {
    genre_name: 'Mystery',
  },
  {
    genre_name: 'Biography',
  },
];

const seedBookGenres = () => BookGenre.bulkCreate(bookGenreData);

module.exports = seedBookGenres;


