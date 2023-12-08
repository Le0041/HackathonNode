import express from 'express';
import userController from '../controllers/user/index.controller.js';

const router = express.Router();

router.get('/users/saludar', userController.saludar)
router.get('/users/despedir', userController.despedir)

export default router;