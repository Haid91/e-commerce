const { Book } = require('../models');

const bookData = [
  {
    title: 'Journey Through the Stars',
    price: 19.99,
    stock: 15,
    genre_id: 3, // Assuming this refers to 'Science Fiction'
  },
  {
    title: 'The Mountains Whisper',
    price: 15.99,
    stock: 8,
    genre_id: 4, // Assuming this refers to 'Fantasy'
  },
  {
    title: 'Mysteries of the Ancient World',
    price: 20.99,
    stock: 20,
    genre_id: 5, // Assuming this refers to 'Mystery'
  },
  {
    title: 'Life of the Mind',
    price: 18.99,
    stock: 10,
    genre_id: 2, // Assuming this refers to 'Non-Fiction'
  },
  {
    title: 'Echoes of the Past',
    price: 24.99,
    stock: 12,
    genre_id: 1, // Assuming this refers to 'Fiction'
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;