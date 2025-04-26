const express = require('express');
const router = express.Router();
const learningPathController = require('../controllers/learningPathController');
const { authenticateToken } = require('../utils/auth');

// Rotas que requerem autenticação
router.post('/', authenticateToken, learningPathController.createLearningPath);
router.get('/', learningPathController.getAllLearningPaths);
router.get('/:id', learningPathController.getLearningPathById);
router.put('/:id', authenticateToken, learningPathController.updateLearningPath);
router.delete('/:id', authenticateToken, learningPathController.deleteLearningPath);

// Rotas para gerenciar cursos em trilhas
router.post('/add-course', authenticateToken, learningPathController.addCourseToPath);
router.delete('/:pathId/courses/:courseId', authenticateToken, learningPathController.removeCourseFromPath);

module.exports = router; 