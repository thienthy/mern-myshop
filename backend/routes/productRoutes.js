import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.get('/', getProducts);
router.post('/', protect, admin, createProduct);
router.get('/top', getTopProducts);
router.get('/:id', getProductById);
router.post('/:id/reviews', protect, createProductReview);
router.delete('/:id', protect, admin, deleteProduct);
router.put('/:id', protect, admin, updateProduct);

export default router;
