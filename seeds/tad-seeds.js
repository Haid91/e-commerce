const { Author } = require('../models');

const authorData = [
  {
    author_name: 'Emily Brontë',
  },
  {
    author_name: 'Mark Twain',
  },
  {
    author_name: 'J.K. Rowling',
  },
  {
    author_name: 'George Orwell',
  },
  {
    author_name: 'Leo Tolstoy',
  },
  {
    author_name: 'Jane Austen',
  },
  {
    author_name: 'Charles Dickens',
  },
  {
    author_name: 'J.R.R. Tolkien',
  },
];

const seedAuthors = () => Author.bulkCreate(authorData);

module.exports = seedAuthors;