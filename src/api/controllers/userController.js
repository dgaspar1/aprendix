const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();
const { hashPassword, verifyPassword, generateToken, generateRegistration } = require('../utils/auth');

// Registrar um novo usuário
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar se todos os campos obrigatórios estão presentes
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Por favor, forneça nome, email e senha' });
    }

    // Verificar se o email já está registrado
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Este email já está registrado' });
    }

    // Gerar hash da senha
    const hashedPassword = await hashPassword(password);
    
    // Gerar número de matrícula único
    const registration = generateRegistration();

    // Criar o usuário
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        registration
      }
    });

    // Remover a senha do objeto de resposta
    const userResponse = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      registration: newUser.registration,
      created_at: newUser.created_at
    };

    // Gerar token JWT
    const token = generateToken(newUser.id);

    res.status(201).json({
      message: 'Usuário registrado com sucesso',
      user: userResponse,
      token
    });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro no servidor ao registrar usuário' });
  }
};

// Login de usuário
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se email e senha foram fornecidos
    if (!email || !password) {
      return res.status(400).json({ message: 'Por favor, forneça email e senha' });
    }

    // Buscar usuário pelo email
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ message: 'Email ou senha inválidos' });
    }

    // Verificar senha
    const validPassword = await verifyPassword(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Email ou senha inválidos' });
    }

    // Gerar token JWT
    const token = generateToken(user.id);

    // Remover a senha do objeto de resposta
    const userResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
      registration: user.registration,
      created_at: user.created_at
    };

    res.status(200).json({
      message: 'Login realizado com sucesso',
      user: userResponse,
      token
    });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro no servidor ao fazer login' });
  }
};

// Obter perfil do usuário
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Remover a senha do objeto de resposta
    const userResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
      registration: user.registration,
      created_at: user.created_at
    };

    res.status(200).json(userResponse);
  } catch (error) {
    console.error('Erro ao buscar perfil do usuário:', error);
    res.status(500).json({ message: 'Erro no servidor ao buscar perfil do usuário' });
  }
};

// Listar todos os usuários (para administradores)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        registration: true,
        created_at: true
      }
    });

    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ message: 'Erro no servidor ao listar usuários' });
  }
};

// Atualizar dados do usuário
exports.updateUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email } = req.body;

    // Verificar se o email já está em uso por outro usuário
    if (email) {
      const existingUser = await prisma.user.findUnique({
        where: { email }
      });

      if (existingUser && existingUser.id !== userId) {
        return res.status(400).json({ message: 'Este email já está em uso' });
      }
    }

    // Atualizar usuário
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name: name || undefined,
        email: email || undefined
      }
    });

    // Remover a senha do objeto de resposta
    const userResponse = {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      registration: updatedUser.registration,
      created_at: updatedUser.created_at
    };

    res.status(200).json({
      message: 'Dados do usuário atualizados com sucesso',
      user: userResponse
    });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ message: 'Erro no servidor ao atualizar usuário' });
  }
};

// Alterar senha
exports.changePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Por favor, forneça a senha atual e a nova senha' });
    }

    // Buscar usuário
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    // Verificar senha atual
    const validPassword = await verifyPassword(currentPassword, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Senha atual incorreta' });
    }

    // Gerar hash da nova senha
    const hashedPassword = await hashPassword(newPassword);

    // Atualizar senha
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword }
    });

    res.status(200).json({ message: 'Senha alterada com sucesso' });
  } catch (error) {
    console.error('Erro ao alterar senha:', error);
    res.status(500).json({ message: 'Erro no servidor ao alterar senha' });
  }
}; 