# Sistema de Gestão de Aprendizagem

Uma plataforma completa para gerenciamento de cursos online, trilhas de aprendizagem e avaliações, com suporte a pacotes SCORM.

## Funcionalidades Principais

1. **Gestão de Usuários**
   - Cadastro com nome, e-mail e senha
   - Geração de matrícula única automática
   - Login com autenticação JWT

2. **Trilhas de Aprendizagem**
   - Cadastro e organização de trilhas
   - Associação de múltiplos cursos a cada trilha

3. **Cursos SCORM**
   - Suporte a upload e visualização de pacotes SCORM
   - Associação de cursos a múltiplas trilhas

4. **Matrículas**
   - Controle de matrículas dos usuários em turmas
   - Associação de trilhas a turmas

5. **Progresso do Aluno**
   - Acompanhamento de progresso por curso
   - Registro de datas de início e conclusão

6. **Provas Objetivas**
   - Criação de provas de múltipla escolha
   - Associação de provas a cursos
   - Avaliação automática e geração de resultados

## Estrutura do Projeto

```
projeto/
│
├── src/
│   ├── api/
│   │   ├── controllers/    # Controladores da API
│   │   ├── models/         # Modelos de dados
│   │   ├── routes/         # Definição de rotas
│   │   ├── scripts/        # Scripts utilitários (seed, etc.)
│   │   └── utils/          # Utilitários (auth, seed, etc.)
│   │
│   ├── public/             # Arquivos estáticos
│   │   ├── css/            # Folhas de estilo
│   │   ├── js/             # Scripts do cliente
│   │   └── html/           # Páginas HTML
│   │
│   └── index.js            # Ponto de entrada da aplicação
│
├── prisma/
│   └── schema.prisma       # Schema do banco de dados
│
├── .env                    # Variáveis de ambiente
├── package.json           # Dependências e scripts
└── README.md              # Documentação
```

## Tecnologias Utilizadas

- **Backend**: Node.js com Express
- **Banco de Dados**: MySQL
- **ORM**: Prisma
- **Autenticação**: JWT (JSON Web Tokens)
- **Frontend**: HTML, CSS e JavaScript puro
- **Pacotes SCORM**: Suporte a conteúdo educacional padrão SCORM

## Configuração do Ambiente

1. **Pré-requisitos**
   - Node.js (v14+)
   - MySQL (v8+)

2. **Instalação**
   ```bash
   # Clonar o repositório
   git clone [url-do-repositório]
   cd [nome-do-repositório]
   
   # Instalar dependências
   npm install
   
   # Configurar e popular o banco de dados (executa migrations e seed)
   npm run setup
   
   # Iniciar o servidor
   npm start
   ```

3. **Variáveis de Ambiente (.env)**
   ```
   DATABASE_URL="mysql://root:password@localhost:3306/learning_system"
   JWT_SECRET="sua_chave_secreta_para_tokens_jwt"
   PORT=8080
   ```

## Dados Iniciais (Seed)

O sistema possui um mecanismo inteligente de seed que verifica automaticamente se o banco de dados já está populado antes de inserir dados iniciais. 

- A seed é executada automaticamente na inicialização do servidor, apenas se necessário
- Inclui usuários de teste, cursos, trilhas de aprendizagem e exames
- Evita duplicação de dados ao verificar se as entidades já existem

### Scripts Disponíveis para Seed

| Comando | Descrição |
|---------|-----------|
| `npm run db:seed` | Executa a seed apenas se o banco estiver vazio |
| `npm run db:seed:force` | Força a execução da seed mesmo com dados existentes |

### Dados Incluídos na Seed

- **Usuários**: Conta de admin e 3 usuários de teste
  - Observe que não há campo para diferenciar usuários administradores no modelo atual
- **Cursos**: 5 cursos de diferentes áreas com descrições e caminhos SCORM
- **Trilhas**: 3 trilhas de aprendizagem compostas por diferentes cursos
- **Exames**: Cada curso possui uma avaliação com questões e respostas

### Credenciais de Teste
- Usuário principal: admin@aprendix.com / senha: admin123
- Usuários adicionais: 
  - joao@email.com / senha: senha123
  - maria@email.com / senha: senha123
  - carlos@email.com / senha: senha123

## API Endpoints

A API segue o padrão RESTful e disponibiliza os seguintes endpoints:

### Usuários
- `POST /api/users/register` - Registrar novo usuário
- `POST /api/users/login` - Autenticar usuário
- `GET /api/users/profile` - Obter perfil do usuário autenticado

### Trilhas de Aprendizagem
- `GET /api/learning-paths` - Listar todas as trilhas
- `GET /api/learning-paths/:id` - Obter detalhes de uma trilha
- `POST /api/learning-paths` - Criar nova trilha
- `PUT /api/learning-paths/:id` - Atualizar trilha
- `DELETE /api/learning-paths/:id` - Excluir trilha

### Cursos
- `GET /api/courses` - Listar todos os cursos
- `GET /api/courses/:id` - Obter detalhes de um curso
- `GET /api/courses/:id/scorm` - Acessar conteúdo SCORM
- `POST /api/courses` - Criar novo curso
- `PUT /api/courses/:id` - Atualizar curso
- `DELETE /api/courses/:id` - Excluir curso

### Provas
- `GET /api/exams` - Listar todas as provas
- `GET /api/exams/:id` - Obter detalhes de uma prova
- `POST /api/exams` - Criar nova prova
- `POST /api/exams/question` - Adicionar questão a uma prova
- `POST /api/exams/submit` - Submeter respostas de uma prova

### Progresso
- `GET /api/progress` - Obter progresso do usuário logado
- `GET /api/progress/:id` - Obter progresso específico por ID
- `POST /api/progress` - Registrar ou atualizar progresso

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes. 