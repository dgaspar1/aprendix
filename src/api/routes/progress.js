const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const { authenticateToken } = require('../utils/auth');

// Todas as rotas de progresso requerem autenticação
router.use(authenticateToken);

// Obter o progresso do usuário logado
router.get('/', progressController.getUserProgress);

// Obter detalhes de um progresso específico
router.get('/:id', progressController.getProgressById);

// Registrar ou atualizar progresso
router.post('/update', progressController.updateProgress);

module.exports = router; 