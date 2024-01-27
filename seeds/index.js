const seedAuthors = require('./author-seeds');
const seedBooks = require('./book-seeds');
const seedGenres = require('./genre-seeds');
const seedBookGenres = require('./book-genre-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedAuthors();
  console.log('\n----- AUTHORS SEEDED -----\n');

  await seedBooks();
  console.log('\n----- BOOKS SEEDED -----\n');

  await seedGenres();
  console.log('\n----- GENRES SEEDED -----\n');

  await seedBookGenres();
  console.log('\n----- BOOK GENRES SEEDED -----\n');

  process.exit(0);
};

seedAll();