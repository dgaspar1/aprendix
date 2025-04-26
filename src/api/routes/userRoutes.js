const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../utils/auth');

// Rotas públicas
router.post('/register', userController.register);
router.post('/login', userController.login);

// Rotas protegidas por autenticação
router.get('/profile', authenticateToken, userController.getProfile);
router.put('/update', authenticateToken, userController.updateUser);
router.put('/change-password', authenticateToken, userController.changePassword);

// Rota de admin para listar todos os usuários
router.get('/', authenticateToken, userController.getAllUsers);

module.exports = router; 