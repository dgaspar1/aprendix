FROM node:16-alpine

# Criar diretório da aplicação
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install --production

# Copiar arquivos do projeto
COPY . .

# Gerar o Prisma Client
RUN npx prisma generate

# Expor a porta
EXPOSE 8080

# Comando para iniciar o servidor
CMD ["npm", "start"] 