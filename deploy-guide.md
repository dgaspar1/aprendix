# Guia de Deploy - Aprendix

Este guia contém instruções para realizar o deploy do Aprendix em um ambiente de produção usando Docker.

## Pré-requisitos

- Docker instalado no servidor (versão 19.03+)
- Docker Compose instalado (versão 1.27+)
- Git para clonar o repositório (opcional)

## Instruções para Deploy

### 1. Preparação do Ambiente

Primeiro, clone o repositório ou transfira os arquivos para o servidor:

```bash
git clone [url-do-repositorio]
cd [nome-do-repositorio]
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` baseado no exemplo:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure as seguintes variáveis:

```
PORT=8080
DATABASE_URL=mysql://aprendix:aprendix_password@db:3306/learning_system
JWT_SECRET=substitua_por_uma_string_segura_aleatoria
NODE_ENV=production
```

> **IMPORTANTE**: Gere um JWT_SECRET forte e único para o ambiente de produção!

### 3. Construir e Iniciar os Containers

Execute o comando abaixo para construir e iniciar os containers:

```bash
docker-compose up -d
```

Este comando irá:
- Construir a imagem Docker da aplicação
- Iniciar o banco de dados MySQL
- Iniciar a aplicação Aprendix

### 4. Executar Migrations e Seed

Após os containers estarem rodando, execute as migrations e seed para configurar o banco de dados:

```bash
# Entrar no container da aplicação
docker-compose exec app sh

# Dentro do container, executar:
npx prisma migrate deploy
npm run db:seed
```

### 5. Verificar o Deploy

A aplicação estará disponível em:

```
http://[endereco-ip-do-servidor]:8080
```

## Gerenciamento

### Visualizar Logs

```bash
docker-compose logs -f app
```

### Reiniciar a Aplicação

```bash
docker-compose restart app
```

### Parar Todos os Containers

```bash
docker-compose down
```

### Atualizar para Nova Versão

```bash
git pull  # ou atualize os arquivos manualmente
docker-compose down
docker-compose build app
docker-compose up -d
```

## Backups do Banco de Dados

Para realizar backup do banco de dados:

```bash
docker-compose exec db sh -c 'exec mysqldump -u aprendix -p"aprendix_password" learning_system' > backup-$(date +%F).sql
```

Para restaurar um backup:

```bash
cat seu-arquivo-backup.sql | docker-compose exec -T db sh -c 'exec mysql -u aprendix -p"aprendix_password" learning_system'
```

## Informações de Segurança

- A porta 3306 (MySQL) está exposta apenas para facilitar o desenvolvimento. Para ambientes de produção, considere remover essa exposição no `docker-compose.yml`.
- Sempre altere todas as senhas padrão nos arquivos de configuração.
- Configure um servidor proxy reverso (Nginx/Traefik) com HTTPS para produção.

## Solução de Problemas

1. **Erro de conexão com o banco de dados**:
   - Verifique se o container do MySQL está rodando
   - Confirme que a URL do banco de dados está correta no arquivo .env

2. **Erro de permissão no volume de uploads**:
   - Execute: `docker-compose exec app chmod -R 777 /app/uploads`

3. **Porta 8080 já em uso**:
   - Altere a porta no docker-compose.yml: `"8081:8080"` (exemplo) 