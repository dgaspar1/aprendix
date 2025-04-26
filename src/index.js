const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { seedDatabase } = require('./api/utils/dbSeed');

// Carregar variáveis de ambiente
dotenv.config();

// Inicializar express
const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas da API
const userRoutes = require('./api/routes/userRoutes');
const learningPathRoutes = require('./api/routes/learningPathRoutes');
const courseRoutes = require('./api/routes/courseRoutes');
const groupRoutes = require('./api/routes/groupRoutes');
const enrollmentRoutes = require('./api/routes/enrollmentRoutes');
const progressRoutes = require('./api/routes/progressRoutes');
const examRoutes = require('./api/routes/examRoutes');

// Verificação de saúde para a Vercel
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', environment: process.env.NODE_ENV });
});

// Aplicando rotas
app.use('/api/users', userRoutes);
app.use('/api/learning-paths', learningPathRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/exams', examRoutes);

// Rota principal que serve o frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

// Rota de fallback para SPA
app.get('*', (req, res) => {
  // Se não for uma rota de API, retorna o index.html para client-side routing
  if (!req.path.startsWith('/api/')) {
    return res.sendFile(path.join(__dirname, 'public/html/index.html'));
  }
  res.status(404).json({ message: 'Rota não encontrada' });
});

// Função para iniciar o servidor em ambiente local
// Este bloco só executa em desenvolvimento, não na Vercel
if (process.env.NODE_ENV !== 'production') {
  async function startServer() {
    try {
      // Executar seed do banco de dados (apenas se necessário)
      await seedDatabase();
      
      // Iniciar o servidor
      app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT} em modo ${process.env.NODE_ENV || 'desenvolvimento'}`);
      });
    } catch (error) {
      console.error('Erro ao iniciar o servidor:', error);
      process.exit(1);
    }
  }
  
  // Iniciar a aplicação em ambiente de desenvolvimento
  startServer();
}

// Exportar a aplicação para a Vercel
module.exports = app; 