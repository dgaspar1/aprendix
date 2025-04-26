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

// Função para iniciar o servidor
async function startServer() {
  try {
    // Executar seed do banco de dados (apenas se necessário)
    await seedDatabase();
    
    // Iniciar o servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
  }
}

// Iniciar a aplicação
startServer(); 