const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

// Criar nova trilha de aprendizagem
exports.createLearningPath = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'O título da trilha é obrigatório' });
    }

    const newLearningPath = await prisma.learningPath.create({
      data: {
        title,
        description
      }
    });

    res.status(201).json({
      message: 'Trilha de aprendizagem criada com sucesso',
      learningPath: newLearningPath
    });
  } catch (error) {
    console.error('Erro ao criar trilha de aprendizagem:', error);
    res.status(500).json({ message: 'Erro no servidor ao criar trilha de aprendizagem' });
  }
};

// Listar todas as trilhas de aprendizagem
exports.getAllLearningPaths = async (req, res) => {
  try {
    const learningPaths = await prisma.learningPath.findMany({
      include: {
        courses: {
          include: {
            course: true
          }
        }
      }
    });

    // Formatar a resposta para simplificar a estrutura
    const formattedPaths = learningPaths.map(path => {
      return {
        id: path.id,
        title: path.title,
        description: path.description,
        created_at: path.created_at,
        courses: path.courses.map(c => ({
          id: c.course.id,
          title: c.course.title,
          description: c.course.description
        }))
      };
    });

    res.status(200).json(formattedPaths);
  } catch (error) {
    console.error('Erro ao listar trilhas de aprendizagem:', error);
    res.status(500).json({ message: 'Erro no servidor ao listar trilhas de aprendizagem' });
  }
};

// Obter detalhes de uma trilha de aprendizagem
exports.getLearningPathById = async (req, res) => {
  try {
    const { id } = req.params;

    const learningPath = await prisma.learningPath.findUnique({
      where: { id: Number(id) },
      include: {
        courses: {
          include: {
            course: true
          }
        }
      }
    });

    if (!learningPath) {
      return res.status(404).json({ message: 'Trilha de aprendizagem não encontrada' });
    }

    // Formatar a resposta
    const formattedPath = {
      id: learningPath.id,
      title: learningPath.title,
      description: learningPath.description,
      created_at: learningPath.created_at,
      courses: learningPath.courses.map(c => ({
        id: c.course.id,
        title: c.course.title,
        description: c.course.description,
        scorm_path: c.course.scorm_path
      }))
    };

    res.status(200).json(formattedPath);
  } catch (error) {
    console.error('Erro ao buscar trilha de aprendizagem:', error);
    res.status(500).json({ message: 'Erro no servidor ao buscar trilha de aprendizagem' });
  }
};

// Atualizar trilha de aprendizagem
exports.updateLearningPath = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    // Verificar se a trilha existe
    const existingPath = await prisma.learningPath.findUnique({
      where: { id: Number(id) }
    });

    if (!existingPath) {
      return res.status(404).json({ message: 'Trilha de aprendizagem não encontrada' });
    }

    // Atualizar a trilha
    const updatedPath = await prisma.learningPath.update({
      where: { id: Number(id) },
      data: {
        title: title || undefined,
        description: description !== undefined ? description : undefined
      }
    });

    res.status(200).json({
      message: 'Trilha de aprendizagem atualizada com sucesso',
      learningPath: updatedPath
    });
  } catch (error) {
    console.error('Erro ao atualizar trilha de aprendizagem:', error);
    res.status(500).json({ message: 'Erro no servidor ao atualizar trilha de aprendizagem' });
  }
};

// Excluir trilha de aprendizagem
exports.deleteLearningPath = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar se a trilha existe
    const existingPath = await prisma.learningPath.findUnique({
      where: { id: Number(id) }
    });

    if (!existingPath) {
      return res.status(404).json({ message: 'Trilha de aprendizagem não encontrada' });
    }

    // Excluir relações de cursos
    await prisma.learningPathCourse.deleteMany({
      where: { learning_path_id: Number(id) }
    });

    // Excluir matrículas relacionadas
    await prisma.enrollment.deleteMany({
      where: { learning_path_id: Number(id) }
    });

    // Excluir a trilha
    await prisma.learningPath.delete({
      where: { id: Number(id) }
    });

    res.status(200).json({ message: 'Trilha de aprendizagem excluída com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir trilha de aprendizagem:', error);
    res.status(500).json({ message: 'Erro no servidor ao excluir trilha de aprendizagem' });
  }
};

// Adicionar curso a uma trilha
exports.addCourseToPath = async (req, res) => {
  try {
    const { pathId, courseId } = req.body;

    if (!pathId || !courseId) {
      return res.status(400).json({ message: 'IDs da trilha e do curso são obrigatórios' });
    }

    // Verificar se a trilha existe
    const existingPath = await prisma.learningPath.findUnique({
      where: { id: Number(pathId) }
    });

    if (!existingPath) {
      return res.status(404).json({ message: 'Trilha de aprendizagem não encontrada' });
    }

    // Verificar se o curso existe
    const existingCourse = await prisma.course.findUnique({
      where: { id: Number(courseId) }
    });

    if (!existingCourse) {
      return res.status(404).json({ message: 'Curso não encontrado' });
    }

    // Verificar se o relacionamento já existe
    const existingRelation = await prisma.learningPathCourse.findFirst({
      where: {
        learning_path_id: Number(pathId),
        course_id: Number(courseId)
      }
    });

    if (existingRelation) {
      return res.status(400).json({ message: 'Curso já está adicionado a essa trilha' });
    }

    // Adicionar curso à trilha
    const pathCourse = await prisma.learningPathCourse.create({
      data: {
        learning_path_id: Number(pathId),
        course_id: Number(courseId)
      }
    });

    res.status(201).json({
      message: 'Curso adicionado à trilha com sucesso',
      pathCourse
    });
  } catch (error) {
    console.error('Erro ao adicionar curso à trilha:', error);
    res.status(500).json({ message: 'Erro no servidor ao adicionar curso à trilha' });
  }
};

// Remover curso de uma trilha
exports.removeCourseFromPath = async (req, res) => {
  try {
    const { pathId, courseId } = req.params;

    // Verificar se o relacionamento existe
    const existingRelation = await prisma.learningPathCourse.findFirst({
      where: {
        learning_path_id: Number(pathId),
        course_id: Number(courseId)
      }
    });

    if (!existingRelation) {
      return res.status(404).json({ message: 'Curso não encontrado nesta trilha' });
    }

    // Remover curso da trilha
    await prisma.learningPathCourse.deleteMany({
      where: {
        learning_path_id: Number(pathId),
        course_id: Number(courseId)
      }
    });

    res.status(200).json({ message: 'Curso removido da trilha com sucesso' });
  } catch (error) {
    console.error('Erro ao remover curso da trilha:', error);
    res.status(500).json({ message: 'Erro no servidor ao remover curso da trilha' });
  }
}; 