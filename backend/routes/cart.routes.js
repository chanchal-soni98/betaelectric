import express from 'express';
import { addToCart, getCart } from '../controllers/cart.controller.js';

const router = express.Router();

router.post('/add', addToCart);
router.get('/', getCart);

export default router;
