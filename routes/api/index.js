import express from 'express';
import categoryRoutes from './category-routes';
import productRoutes from './product-routes';
import tagRoutes from './tag-routes';

// Creating a new router
const router = express.Router();

// Setting up routes
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Exporting the router
export default router;