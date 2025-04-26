const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

// Criar nova prova
exports.createExam = async (req, res) => {
  try {
    const { title, course_id, questions } = req.body;

    if (!title || !course_id) {
      return res.status(400).json({ message: 'Título e ID do curso são obrigatórios' });
    }

    // Verificar se o curso existe
    const course = await prisma.course.findUnique({
      where: { id: Number(course_id) }
    });

    if (!course) {
      return res.status(404).json({ message: 'Curso não encontrado' });
    }

    // Criar prova em uma transação para garantir consistência
    const exam = await prisma.$transaction(async (prisma) => {
      // Criar a prova
      const newExam = await prisma.exam.create({
        data: {
          title,
          course: {
            connect: { id: Number(course_id) }
          }
        }
      });

      // Se tiver questões, adicionar
      if (questions && Array.isArray(questions) && questions.length > 0) {
        for (const questionData of questions) {
          const { text, answers } = questionData;

          // Criar questão
          const newQuestion = await prisma.question.create({
            data: {
              text,
              exam: {
                connect: { id: newExam.id }
              }
            }
          });

          // Criar alternativas para a questão
          if (answers && Array.isArray(answers) && answers.length > 0) {
            for (const answerData of answers) {
              await prisma.answer.create({
                data: {
                  text: answerData.text,
                  is_correct: answerData.is_correct || false,
                  question: {
                    connect: { id: newQuestion.id }
                  }
                }
              });
            }
          }
        }
      }

      return newExam;
    });

    res.status(201).json({
      message: 'Prova criada com sucesso',
      exam
    });
  } catch (error) {
    console.error('Erro ao criar prova:', error);
    res.status(500).json({ message: 'Erro no servidor ao criar prova' });
  }
};

// Listar todas as provas
exports.getAllExams = async (req, res) => {
  try {
    const exams = await prisma.exam.findMany({
      include: {
        course: {
          select: {
            id: true,
            title: true
          }
        },
        _count: {
          select: {
            questions: true
          }
        }
      }
    });

    // Formatar a resposta
    const formattedExams = exams.map(exam => ({
      id: exam.id,
      title: exam.title,
      course: exam.course,
      questionCount: exam._count.questions,
      created_at: exam.created_at
    }));

    res.status(200).json(formattedExams);
  } catch (error) {
    console.error('Erro ao listar provas:', error);
    res.status(500).json({ message: 'Erro no servidor ao listar provas' });
  }
};

// Obter detalhes de uma prova
exports.getExamById = async (req, res) => {
  try {
    const { id } = req.params;

    const exam = await prisma.exam.findUnique({
      where: { id: Number(id) },
      include: {
        course: {
          select: {
            id: true,
            title: true
          }
        },
        questions: {
          include: {
            answers: true
          }
        }
      }
    });

    if (!exam) {
      return res.status(404).json({ message: 'Prova não encontrada' });
    }

    res.status(200).json(exam);
  } catch (error) {
    console.error('Erro ao buscar prova:', error);
    res.status(500).json({ message: 'Erro no servidor ao buscar prova' });
  }
};

// Atualizar prova
exports.updateExam = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, course_id } = req.body;

    // Verificar se a prova existe
    const exam = await prisma.exam.findUnique({
      where: { id: Number(id) }
    });

    if (!exam) {
      return res.status(404).json({ message: 'Prova não encontrada' });
    }

    // Se course_id é fornecido, verificar se o curso existe
    if (course_id) {
      const course = await prisma.course.findUnique({
        where: { id: Number(course_id) }
      });

      if (!course) {
        return res.status(404).json({ message: 'Curso não encontrado' });
      }
    }

    // Atualizar a prova
    const updatedExam = await prisma.exam.update({
      where: { id: Number(id) },
      data: {
        title: title || undefined,
        course_id: course_id ? Number(course_id) : undefined
      }
    });

    res.status(200).json({
      message: 'Prova atualizada com sucesso',
      exam: updatedExam
    });
  } catch (error) {
    console.error('Erro ao atualizar prova:', error);
    res.status(500).json({ message: 'Erro no servidor ao atualizar prova' });
  }
};

// Excluir prova
exports.deleteExam = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar se a prova existe
    const exam = await prisma.exam.findUnique({
      where: { id: Number(id) },
      include: {
        questions: true
      }
    });

    if (!exam) {
      return res.status(404).json({ message: 'Prova não encontrada' });
    }

    // Excluir em uma transação para garantir consistência
    await prisma.$transaction(async (prisma) => {
      // Excluir resultados da prova
      await prisma.examResult.deleteMany({
        where: { exam_id: Number(id) }
      });

      // Para cada questão, excluir respostas
      for (const question of exam.questions) {
        await prisma.answer.deleteMany({
          where: { question_id: question.id }
        });
      }

      // Excluir questões
      await prisma.question.deleteMany({
        where: { exam_id: Number(id) }
      });

      // Excluir a prova
      await prisma.exam.delete({
        where: { id: Number(id) }
      });
    });

    res.status(200).json({ message: 'Prova excluída com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir prova:', error);
    res.status(500).json({ message: 'Erro no servidor ao excluir prova' });
  }
};

// Adicionar questão à prova
exports.addQuestion = async (req, res) => {
  try {
    const { exam_id, text, answers } = req.body;

    if (!exam_id || !text || !answers || !Array.isArray(answers)) {
      return res.status(400).json({ 
        message: 'ID da prova, texto da questão e alternativas são obrigatórios' 
      });
    }

    // Verificar se a prova existe
    const exam = await prisma.exam.findUnique({
      where: { id: Number(exam_id) }
    });

    if (!exam) {
      return res.status(404).json({ message: 'Prova não encontrada' });
    }

    // Criar questão e alternativas em uma transação
    const question = await prisma.$transaction(async (prisma) => {
      // Criar a questão
      const newQuestion = await prisma.question.create({
        data: {
          text,
          exam: {
            connect: { id: Number(exam_id) }
          }
        }
      });

      // Criar alternativas
      for (const answerData of answers) {
        await prisma.answer.create({
          data: {
            text: answerData.text,
            is_correct: answerData.is_correct || false,
            question: {
              connect: { id: newQuestion.id }
            }
          }
        });
      }

      // Retornar a questão com alternativas
      return prisma.question.findUnique({
        where: { id: newQuestion.id },
        include: {
          answers: true
        }
      });
    });

    res.status(201).json({
      message: 'Questão adicionada com sucesso',
      question
    });
  } catch (error) {
    console.error('Erro ao adicionar questão:', error);
    res.status(500).json({ message: 'Erro no servidor ao adicionar questão' });
  }
};

// Submeter resposta de prova
exports.submitExam = async (req, res) => {
  try {
    const { exam_id, answers } = req.body;
    const user_id = req.user.id;

    if (!exam_id || !answers || !Array.isArray(answers)) {
      return res.status(400).json({ 
        message: 'ID da prova e respostas são obrigatórios' 
      });
    }

    // Verificar se a prova existe
    const exam = await prisma.exam.findUnique({
      where: { id: Number(exam_id) },
      include: {
        questions: {
          include: {
            answers: true
          }
        }
      }
    });

    if (!exam) {
      return res.status(404).json({ message: 'Prova não encontrada' });
    }

    // Calcular pontuação
    let correctAnswers = 0;
    let totalQuestions = exam.questions.length;

    // Verificar cada resposta
    for (const userAnswer of answers) {
      const question = exam.questions.find(q => q.id === Number(userAnswer.question_id));
      
      if (question) {
        const correctAnswer = question.answers.find(a => a.is_correct);
        
        if (correctAnswer && correctAnswer.id === Number(userAnswer.answer_id)) {
          correctAnswers++;
        }
      }
    }

    // Calcular pontuação (percentual)
    const score = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

    // Registrar resultado da prova
    const examResult = await prisma.examResult.create({
      data: {
        user: {
          connect: { id: user_id }
        },
        exam: {
          connect: { id: Number(exam_id) }
        },
        score
      }
    });

    res.status(201).json({
      message: 'Prova submetida com sucesso',
      result: {
        id: examResult.id,
        score: examResult.score,
        correct_answers: correctAnswers,
        total_questions: totalQuestions,
        submitted_at: examResult.submitted_at
      }
    });
  } catch (error) {
    console.error('Erro ao submeter prova:', error);
    res.status(500).json({ message: 'Erro no servidor ao submeter prova' });
  }
}; 