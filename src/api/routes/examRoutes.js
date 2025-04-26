const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');
const { authenticateToken } = require('../utils/auth');

// Rotas públicas
router.get('/', examController.getAllExams);
router.get('/:id', examController.getExamById);

// Rotas que requerem autenticação
router.post('/', authenticateToken, examController.createExam);
router.put('/:id', authenticateToken, examController.updateExam);
router.delete('/:id', authenticateToken, examController.deleteExam);
router.post('/question', authenticateToken, examController.addQuestion);
router.post('/submit', authenticateToken, examController.submitExam);

module.exports = router; 