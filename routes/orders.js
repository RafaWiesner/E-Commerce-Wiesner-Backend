import express from 'express';
import auth from '../middleware/auth.js';
import { createOrder, listOrders, getOrder, updateOrderStatus } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', auth, createOrder);
router.get('/', auth, listOrders);
router.get('/:id', auth, getOrder);
router.patch('/:id/status', auth, updateOrderStatus);

export default router; 