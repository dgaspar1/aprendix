const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../utils/auth');
const progressController = require('../controllers/progressController');

// Esses endpoints são apenas esqueletos que serão implementados futuramente
// quando criarmos os controladores correspondentes

// Obter progresso do usuário logado
router.get('/', authenticateToken, progressController.getUserProgress);

// Obter progresso específico
router.get('/:id', authenticateToken, progressController.getProgressById);

// Registrar ou atualizar progresso
router.post('/', authenticateToken, progressController.updateProgress);

// Esta rota não é mais necessária já que o POST '/' pode criar ou atualizar
// router.put('/:id', authenticateToken, (req, res) => {
//   res.status(200).json({ message: `Progresso ${req.params.id} atualizado - funcionalidade a ser implementada` });
// });

module.exports = router; 