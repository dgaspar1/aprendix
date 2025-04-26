# Deploy do Aprendix na Vercel

Este guia contém instruções para realizar o deploy do Aprendix na Vercel utilizando a conta gratuita.

## Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Conta em um serviço de banco de dados compatível (recomendações abaixo)
- Git instalado localmente

## Ajustes para Deploy na Vercel

### 1. Banco de Dados

A Vercel não oferece bancos de dados como parte do seu serviço. Para aplicações em produção, é necessário um serviço externo de banco de dados. Opções recomendadas na camada gratuita:

- **PlanetScale** - MySQL compatível, tem plano gratuito generoso
- **Supabase** - PostgreSQL, com plano gratuito
- **MongoDB Atlas** - MongoDB, com plano gratuito

Neste exemplo, usaremos PlanetScale por ser compatível com MySQL:

1. Criar conta em [PlanetScale](https://planetscale.com/)
2. Criar um novo banco de dados chamado `learning_system`
3. Obter a string de conexão MySQL

### 2. Configuração das Variáveis de Ambiente

Na Vercel, você precisa configurar as variáveis de ambiente no dashboard:

1. Após fazer o deploy inicial do projeto
2. Navegue até "Settings" > "Environment Variables"
3. Adicione as seguintes variáveis:
   - `DATABASE_URL`: Sua URL de conexão do PlanetScale
   - `JWT_SECRET`: Uma string secreta aleatória para assinar tokens JWT

### 3. Deploy através da CLI da Vercel

Você pode fazer deploy usando a CLI da Vercel:

```bash
# Instalar a CLI da Vercel
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel
```

Ou conectar seu repositório GitHub/GitLab/Bitbucket diretamente na dashboard da Vercel.

### 4. Executar as Migrações do Banco de Dados

Após o primeiro deploy, você precisará executar as migrações do banco de dados:

```bash
# Localmente com a CLI da Vercel
vercel env pull .env.local
npx prisma migrate deploy
```

Ou use a funcionalidade de "Deploy Hooks" da Vercel para automatizar isso.

## Limitações da Conta Gratuita da Vercel

- **Tempo de execução**: Funções serverless limitadas a 10 segundos
- **Tamanho do pacote**: 50 MB por função
- **Armazenamento**: Não há armazenamento persistente (arquivos devem ser armazenados em serviços como AWS S3)
- **Limites de Banda**: 100 GB por mês
- **Sem suporte a WebSockets**: Para chat ou recursos em tempo real, use alternativas como Pusher

## Ajustes Recomendados para o Código

1. **Armazenamento de arquivos**: Use serviços como AWS S3, Cloudinary ou Firebase Storage para armazenar arquivos carregados pelos usuários.

2. **Cache**: Implemente cache para reduzir consultas ao banco de dados.

3. **Otimização de imagens**: Use serviços de otimização de imagens ou CDNs.

## Monitoramento e Logs

A Vercel oferece painéis básicos de monitoramento e logs na conta gratuita:

- Acesse "Deployments" > [seu deploy] > "Logs"
- Configure alertas de erro por email

## Solução de Problemas

1. **Erro "Function Execution Timeout"**: 
   - Otimize suas funções para executar em menos de 10 segundos
   - Reduza consultas pesadas ao banco de dados

2. **Funções serverless não inicializam**:
   - Verifique se há erros de sintaxe no código
   - Verifique se todas as variáveis de ambiente estão configuradas

3. **Problemas de conexão com o banco de dados**:
   - Verifique se a string de conexão está correta
   - Confira se o IP do seu servidor Vercel está na lista de permissões do banco de dados 