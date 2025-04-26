const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../utils/auth');

// Esses endpoints são apenas esqueletos que serão implementados futuramente
// quando criarmos os controladores correspondentes

// Listar todas as matrículas
router.get('/', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'Lista de matrículas - funcionalidade a ser implementada' });
});

// Obter detalhes de uma matrícula
router.get('/:id', authenticateToken, (req, res) => {
  res.status(200).json({ message: `Detalhes da matrícula ${req.params.id} - funcionalidade a ser implementada` });
});

// Criar uma nova matrícula
router.post('/', authenticateToken, (req, res) => {
  res.status(201).json({ message: 'Matrícula criada com sucesso - funcionalidade a ser implementada' });
});

// Atualizar uma matrícula
router.put('/:id', authenticateToken, (req, res) => {
  res.status(200).json({ message: `Matrícula ${req.params.id} atualizada - funcionalidade a ser implementada` });
});

// Excluir uma matrícula
router.delete('/:id', authenticateToken, (req, res) => {
  res.status(200).json({ message: `Matrícula ${req.params.id} excluída - funcionalidade a ser implementada` });
});

module.exports = router; 