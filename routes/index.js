import express from 'express';
import apiRoutes from './api';

const router = express.Router();

// Using API routes
router.use('/api', apiRoutes);

// Handling incorrect routes
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

// Exporting the router
export default router;