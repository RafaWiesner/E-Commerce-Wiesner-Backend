import express from 'express';
import auth from '../middleware/auth.js';
import { register, login, me, testUsers, resetPassword } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, me);
router.get('/test-users', testUsers);
router.post('/reset-password', resetPassword);

export default router; 