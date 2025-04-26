const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();
const path = require('path');
const fs = require('fs');

// Criar novo curso
exports.createCourse = async (req, res) => {
  try {
    const { title, description, scorm_path } = req.body;

    if (!title || !scorm_path) {
      return res.status(400).json({ message: 'Título e caminho do SCORM são obrigatórios' });
    }

    const newCourse = await prisma.course.create({
      data: {
        title,
        description,
        scorm_path
      }
    });

    res.status(201).json({
      message: 'Curso criado com sucesso',
      course: newCourse
    });
  } catch (error) {
    console.error('Erro ao criar curso:', error);
    res.status(500).json({ message: 'Erro no servidor ao criar curso' });
  }
};

// Listar todos os cursos
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      include: {
        exams: {
          select: {
            id: true,
            title: true
          }
        }
      }
    });

    res.status(200).json(courses);
  } catch (error) {
    console.error('Erro ao listar cursos:', error);
    res.status(500).json({ message: 'Erro no servidor ao listar cursos' });
  }
};

// Obter detalhes de um curso
exports.getCourseById = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await prisma.course.findUnique({
      where: { id: Number(id) },
      include: {
        exams: {
          select: {
            id: true,
            title: true
          }
        },
        paths: {
          include: {
            learning_path: true
          }
        }
      }
    });

    if (!course) {
      return res.status(404).json({ message: 'Curso não encontrado' });
    }

    // Formatar a resposta
    const formattedCourse = {
      id: course.id,
      title: course.title,
      description: course.description,
      scorm_path: course.scorm_path,
      created_at: course.created_at,
      exams: course.exams,
      learning_paths: course.paths.map(p => ({
        id: p.learning_path.id,
        title: p.learning_path.title,
        description: p.learning_path.description
      }))
    };

    res.status(200).json(formattedCourse);
  } catch (error) {
    console.error('Erro ao buscar curso:', error);
    res.status(500).json({ message: 'Erro no servidor ao buscar curso' });
  }
};

// Atualizar curso
exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, scorm_path } = req.body;

    // Verificar se o curso existe
    const existingCourse = await prisma.course.findUnique({
      where: { id: Number(id) }
    });

    if (!existingCourse) {
      return res.status(404).json({ message: 'Curso não encontrado' });
    }

    // Atualizar o curso
    const updatedCourse = await prisma.course.update({
      where: { id: Number(id) },
      data: {
        title: title || undefined,
        description: description !== undefined ? description : undefined,
        scorm_path: scorm_path || undefined
      }
    });

    res.status(200).json({
      message: 'Curso atualizado com sucesso',
      course: updatedCourse
    });
  } catch (error) {
    console.error('Erro ao atualizar curso:', error);
    res.status(500).json({ message: 'Erro no servidor ao atualizar curso' });
  }
};

// Excluir curso
exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar se o curso existe
    const existingCourse = await prisma.course.findUnique({
      where: { id: Number(id) }
    });

    if (!existingCourse) {
      return res.status(404).json({ message: 'Curso não encontrado' });
    }

    // Excluir relações com trilhas
    await prisma.learningPathCourse.deleteMany({
      where: { course_id: Number(id) }
    });

    // Excluir progresso dos alunos neste curso
    await prisma.progress.deleteMany({
      where: { course_id: Number(id) }
    });

    // Buscar as provas associadas ao curso
    const exams = await prisma.exam.findMany({
      where: { course_id: Number(id) }
    });

    // Para cada prova, excluir as questões e resultados
    for (const exam of exams) {
      // Buscar questões
      const questions = await prisma.question.findMany({
        where: { exam_id: exam.id }
      });

      // Excluir respostas de cada questão
      for (const question of questions) {
        await prisma.answer.deleteMany({
          where: { question_id: question.id }
        });
      }

      // Excluir questões
      await prisma.question.deleteMany({
        where: { exam_id: exam.id }
      });

      // Excluir resultados das provas
      await prisma.examResult.deleteMany({
        where: { exam_id: exam.id }
      });

      // Excluir a prova
      await prisma.exam.delete({
        where: { id: exam.id }
      });
    }

    // Excluir o curso
    await prisma.course.delete({
      where: { id: Number(id) }
    });

    res.status(200).json({ message: 'Curso excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir curso:', error);
    res.status(500).json({ message: 'Erro no servidor ao excluir curso' });
  }
};

// Obter SCORM do curso
exports.getScormContent = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await prisma.course.findUnique({
      where: { id: Number(id) }
    });

    if (!course) {
      return res.status(404).json({ message: 'Curso não encontrado' });
    }

    // Aqui, você pode implementar a lógica para servir o conteúdo SCORM
    // dependendo de como você armazenou o SCORM (como caminho do arquivo ou URL)
    
    // Exemplo se scorm_path for um caminho relativo no sistema de arquivos:
    const scormPath = path.join(__dirname, '../../../', course.scorm_path);
    
    // Verificar se o caminho existe
    if (!fs.existsSync(scormPath)) {
      return res.status(404).json({ message: 'Conteúdo SCORM não encontrado' });
    }

    // Responder com as informações do SCORM
    res.status(200).json({
      course_id: course.id,
      title: course.title,
      scorm_path: course.scorm_path
    });
  } catch (error) {
    console.error('Erro ao buscar conteúdo SCORM:', error);
    res.status(500).json({ message: 'Erro no servidor ao buscar conteúdo SCORM' });
  }
}; 