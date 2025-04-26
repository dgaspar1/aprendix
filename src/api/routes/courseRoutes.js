const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { authenticateToken } = require('../utils/auth');

// Rotas públicas
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.get('/:id/scorm', courseController.getScormContent);

// Rotas que requerem autenticação
router.post('/', authenticateToken, courseController.createCourse);
router.put('/:id', authenticateToken, courseController.updateCourse);
router.delete('/:id', authenticateToken, courseController.deleteCourse);

module.exports = router; 