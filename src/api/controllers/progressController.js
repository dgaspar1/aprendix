const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

// Listar progresso do usuário logado
exports.getUserProgress = async (req, res) => {
  try {
    const userId = req.user.id;

    const progress = await prisma.progress.findMany({
      where: { user_id: userId },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            description: true
          }
        }
      }
    });

    res.status(200).json(progress);
  } catch (error) {
    console.error('Erro ao buscar progresso do usuário:', error);
    res.status(500).json({ message: 'Erro no servidor ao buscar progresso do usuário' });
  }
};

// Obter detalhes de um progresso específico
exports.getProgressById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const progress = await prisma.progress.findUnique({
      where: { 
        id: Number(id),
        user_id: userId // Garantir que o usuário só acesse seu próprio progresso
      },
      include: {
        course: true
      }
    });

    if (!progress) {
      return res.status(404).json({ message: 'Progresso não encontrado' });
    }

    res.status(200).json(progress);
  } catch (error) {
    console.error('Erro ao buscar detalhes do progresso:', error);
    res.status(500).json({ message: 'Erro no servidor ao buscar detalhes do progresso' });
  }
};

// Registrar ou atualizar progresso
exports.updateProgress = async (req, res) => {
  try {
    const { course_id, percentage } = req.body;
    const userId = req.user.id;

    if (!course_id || percentage === undefined) {
      return res.status(400).json({ message: 'ID do curso e percentagem são obrigatórios' });
    }

    // Verificar se o curso existe
    const course = await prisma.course.findUnique({
      where: { id: Number(course_id) }
    });

    if (!course) {
      return res.status(404).json({ message: 'Curso não encontrado' });
    }

    // Verificar se já existe um registro de progresso para este usuário e curso
    const existingProgress = await prisma.progress.findFirst({
      where: {
        user_id: userId,
        course_id: Number(course_id)
      }
    });

    let progress;
    let isCompleted = percentage >= 100;
    let completedDate = isCompleted ? new Date() : null;

    if (existingProgress) {
      // Atualizar progresso existente
      progress = await prisma.progress.update({
        where: { id: existingProgress.id },
        data: {
          percentage: Number(percentage),
          completed_at: isCompleted ? completedDate : existingProgress.completed_at
        }
      });
    } else {
      // Criar novo registro de progresso
      progress = await prisma.progress.create({
        data: {
          user: {
            connect: { id: userId }
          },
          course: {
            connect: { id: Number(course_id) }
          },
          percentage: Number(percentage),
          completed_at: completedDate
        }
      });
    }

    res.status(200).json({
      message: 'Progresso atualizado com sucesso',
      progress
    });
  } catch (error) {
    console.error('Erro ao atualizar progresso:', error);
    res.status(500).json({ message: 'Erro no servidor ao atualizar progresso' });
  }
}; 