import express from 'express';
import userController from '../controllers/user/index.controller.js';
import securityMiddleware from '../middlewares/security/primer.middleware.js';

const router = express.Router();

router.get('/users/saludar', securityMiddleware,  userController.saludar);
router.get('/users/despedir', securityMiddleware, userController.despedir);
router.post('/users/register', userController.register);

export default router;