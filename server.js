import express from 'express';
import routes from './routes/api';
import sequelize from './config/connection';

// Setting up the express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using routes from the routes module
app.use(routes);

// Synchronizing sequelize models with the database and starting the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});