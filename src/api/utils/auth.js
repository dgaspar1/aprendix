const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Definir uma chave secreta padrão (apenas para desenvolvimento)
const JWT_SECRET = process.env.JWT_SECRET || 'minha_chave_secreta_super_segura_123456789';

// Função para gerar hash de senha
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Função para verificar senha
const verifyPassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

// Função para gerar token JWT
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
};

// Middleware para verificar token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Token inválido ou expirado.' });
  }
};

// Gerar matrícula única
const generateRegistration = () => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${timestamp}${random}`;
};

module.exports = {
  hashPassword,
  verifyPassword,
  generateToken,
  authenticateToken,
  generateRegistration
}; 