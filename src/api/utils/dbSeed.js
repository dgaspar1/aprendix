const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

/**
 * Verifica se é necessário executar a seed no banco de dados
 */
async function isSeedNeeded() {
  // Verifica se já existem cursos no banco
  const courseCount = await prisma.course.count();
  const pathCount = await prisma.learningPath.count();
  const userCount = await prisma.user.count({
    where: {
      email: {
        not: 'admin@aprendix.com' // Ignorar admin na contagem
      }
    }
  });

  // Se já existirem dados em todas as entidades, não é necessário executar a seed
  return courseCount === 0 || pathCount === 0 || userCount === 0;
}

/**
 * Cria usuários de demonstração
 */
async function seedUsers() {
  const usersData = [
    {
      name: 'Admin',
      email: 'admin@aprendix.com',
      password: await bcrypt.hash('admin123', 10),
      registration: 'ADM001'
    },
    {
      name: 'João Silva',
      email: 'joao@email.com',
      password: await bcrypt.hash('senha123', 10),
      registration: 'USR001'
    },
    {
      name: 'Maria Oliveira',
      email: 'maria@email.com',
      password: await bcrypt.hash('senha123', 10),
      registration: 'USR002'
    },
    {
      name: 'Carlos Pereira',
      email: 'carlos@email.com',
      password: await bcrypt.hash('senha123', 10),
      registration: 'USR003'
    }
  ];

  console.log('🌱 Criando usuários...');
  for (const userData of usersData) {
    // Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email }
    });

    if (!existingUser) {
      await prisma.user.create({
        data: userData
      });
    }
  }
}

/**
 * Cria cursos de demonstração
 */
async function seedCourses() {
  const coursesData = [
    {
      title: 'Introdução à Programação',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      scorm_path: '/scorm/intro-programming/'
    },
    {
      title: 'Desenvolvimento Web Completo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt sagittis, quam nisl fringilla ipsum, et malesuada enim magna vel metus.',
      scorm_path: '/scorm/web-development/'
    },
    {
      title: 'Banco de Dados Relacionais',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nisl quis magna vestibulum tincidunt. Fusce vel magna vel quam faucibus vestibulum in vel eros.',
      scorm_path: '/scorm/relational-database/'
    },
    {
      title: 'DevOps na Prática',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel arcu vitae dui volutpat mattis quis vel augue. Phasellus id felis ut tortor commodo hendrerit.',
      scorm_path: '/scorm/devops-practice/'
    },
    {
      title: 'Inteligência Artificial Básica',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non erat vitae libero pulvinar commodo eu in magna. Vivamus tincidunt tristique justo, ut sagittis urna.',
      scorm_path: '/scorm/basic-ai/'
    }
  ];

  console.log('🌱 Criando cursos...');
  const createdCourses = [];
  
  for (const courseData of coursesData) {
    // Verifica se o curso já existe
    const existingCourse = await prisma.course.findFirst({
      where: { title: courseData.title }
    });

    if (!existingCourse) {
      const course = await prisma.course.create({
        data: courseData
      });
      createdCourses.push(course);
    } else {
      createdCourses.push(existingCourse);
    }
  }
  
  return createdCourses;
}

/**
 * Cria exames para os cursos
 */
async function seedExams(courses) {
  console.log('🌱 Criando exames...');
  
  for (const course of courses) {
    // Verifica se o curso já tem exames
    const examCount = await prisma.exam.count({
      where: { course_id: course.id }
    });
    
    if (examCount === 0) {
      await prisma.exam.create({
        data: {
          title: `Avaliação do curso ${course.title}`,
          course: {
            connect: { id: course.id }
          },
          questions: {
            create: [
              {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                answers: {
                  create: [
                    { text: 'Resposta 1', is_correct: false },
                    { text: 'Resposta 2', is_correct: true },
                    { text: 'Resposta 3', is_correct: false },
                    { text: 'Resposta 4', is_correct: false }
                  ]
                }
              },
              {
                text: 'Nullam euismod, nisi vel tincidunt sagittis?',
                answers: {
                  create: [
                    { text: 'Alternativa A', is_correct: false },
                    { text: 'Alternativa B', is_correct: false },
                    { text: 'Alternativa C', is_correct: true },
                    { text: 'Alternativa D', is_correct: false }
                  ]
                }
              },
              {
                text: 'Praesent vitae nisl quis magna vestibulum tincidunt?',
                answers: {
                  create: [
                    { text: 'Opção 1', is_correct: true },
                    { text: 'Opção 2', is_correct: false },
                    { text: 'Opção 3', is_correct: false },
                    { text: 'Opção 4', is_correct: false }
                  ]
                }
              }
            ]
          }
        }
      });
    }
  }
}

/**
 * Cria trilhas de aprendizagem
 */
async function seedLearningPaths(courses) {
  const pathsData = [
    {
      title: 'Desenvolvimento Web',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar tellus vel magna eleifend, eget dapibus massa tempus.',
      courses: [0, 1, 2] // Índices dos cursos na lista de cursos criados
    },
    {
      title: 'Ciência de Dados',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla est vel diam laoreet, vel ultrices enim ullamcorper.',
      courses: [2, 4] // Índices dos cursos na lista de cursos criados
    },
    {
      title: 'DevOps e Infraestrutura',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices metus sit amet magna vestibulum, vel varius est rhoncus.',
      courses: [3, 1] // Índices dos cursos na lista de cursos criados
    }
  ];

  console.log('🌱 Criando trilhas de aprendizagem...');
  
  for (const pathData of pathsData) {
    // Verifica se a trilha já existe
    const existingPath = await prisma.learningPath.findFirst({
      where: { title: pathData.title }
    });

    if (!existingPath) {
      // Extrair os cursos associados
      const pathCourses = pathData.courses.map(idx => ({ id: courses[idx].id }));
      
      // Criar a trilha
      const learningPath = await prisma.learningPath.create({
        data: {
          title: pathData.title,
          description: pathData.description
        }
      });
      
      // Associar os cursos à trilha
      for (const course of pathCourses) {
        await prisma.learningPathCourse.create({
          data: {
            learning_path_id: learningPath.id,
            course_id: course.id
          }
        });
      }
    }
  }
}

/**
 * Função principal para executar a seed
 */
async function seedDatabase() {
  try {
    const needSeed = await isSeedNeeded();
    
    if (!needSeed) {
      console.log('📋 Banco de dados já possui dados. Seed não será executada.');
      return false;
    }
    
    console.log('🚀 Iniciando seed do banco de dados...');
    
    // Criar usuários
    await seedUsers();
    
    // Criar cursos
    const courses = await seedCourses();
    
    // Criar exames para os cursos
    await seedExams(courses);
    
    // Criar trilhas de aprendizagem
    await seedLearningPaths(courses);
    
    console.log('✅ Seed concluída com sucesso!');
    return true;
  } catch (error) {
    console.error('❌ Erro ao executar seed:', error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  seedDatabase,
  isSeedNeeded
}; 