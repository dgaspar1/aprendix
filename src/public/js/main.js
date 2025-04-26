// Configurações da API
const API_URL = '/api';
let token = localStorage.getItem('token');
let currentUser = JSON.parse(localStorage.getItem('user') || 'null');

// Elementos DOM
const sections = {
  welcome: document.getElementById('welcome-section'),
  login: document.getElementById('login-section'),
  register: document.getElementById('register-section'),
  paths: document.getElementById('paths-section'),
  pathDetails: document.getElementById('path-details-section'),
  courses: document.getElementById('courses-section'),
  courseDetails: document.getElementById('course-details-section'),
  exam: document.getElementById('exam-section'),
  examResults: document.getElementById('exam-results-section'),
  profile: document.getElementById('profile-section')
};

const navLinks = {
  home: document.getElementById('home-link'),
  paths: document.getElementById('paths-link'),
  courses: document.getElementById('courses-link'),
  login: document.getElementById('login-link'),
  register: document.getElementById('register-link'),
  profile: document.getElementById('profile-link'),
  logout: document.getElementById('logout-link')
};

// Funções auxiliares
function showSection(sectionId) {
  Object.keys(sections).forEach(key => {
    sections[key].classList.add('hidden');
  });
  sections[sectionId].classList.remove('hidden');
}

function updateNavigation() {
  if (currentUser) {
    navLinks.login.classList.add('hidden');
    navLinks.register.classList.add('hidden');
    navLinks.profile.classList.remove('hidden');
    navLinks.logout.classList.remove('hidden');
  } else {
    navLinks.login.classList.remove('hidden');
    navLinks.register.classList.remove('hidden');
    navLinks.profile.classList.add('hidden');
    navLinks.logout.classList.add('hidden');
  }
}

async function fetchAPI(endpoint, options = {}) {
  if (token) {
    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${token}`
    };
  }
  
  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Erro ao comunicar com o servidor');
    }
    
    return data;
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
}

function createCard(item, type) {
  const card = document.createElement('div');
  card.className = 'card';
  
  const content = document.createElement('div');
  content.className = 'card-content';
  
  const title = document.createElement('h3');
  title.textContent = item.title;
  
  const description = document.createElement('p');
  description.textContent = item.description || 'Sem descrição disponível';
  
  const button = document.createElement('button');
  button.className = 'btn primary-btn';
  button.textContent = 'Ver Detalhes';
  button.onclick = () => {
    if (type === 'path') {
      loadPathDetails(item.id);
    } else if (type === 'course') {
      loadCourseDetails(item.id);
    }
  };
  
  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(button);
  card.appendChild(content);
  
  return card;
}

// Gerenciamento de autenticação
function login(email, password) {
  return fetchAPI('/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(data => {
    token = data.token;
    currentUser = data.user;
    
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(currentUser));
    
    updateNavigation();
    showSection('welcome');
  });
}

function register(name, email, password) {
  return fetchAPI('/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
  .then(data => {
    token = data.token;
    currentUser = data.user;
    
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(currentUser));
    
    updateNavigation();
    showSection('welcome');
  });
}

function logout() {
  token = null;
  currentUser = null;
  
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  
  updateNavigation();
  showSection('welcome');
}

// Carregamento de dados
async function loadLearningPaths() {
  try {
    const paths = await fetchAPI('/learning-paths');
    const pathsList = document.getElementById('paths-list');
    pathsList.innerHTML = '';
    
    if (paths.length === 0) {
      pathsList.innerHTML = '<p>Nenhuma trilha de aprendizagem disponível no momento.</p>';
      return;
    }
    
    paths.forEach(path => {
      const card = createCard(path, 'path');
      pathsList.appendChild(card);
    });
    
    showSection('paths');
  } catch (error) {
    alert(`Erro ao carregar trilhas: ${error.message}`);
  }
}

async function loadPathDetails(pathId) {
  try {
    const path = await fetchAPI(`/learning-paths/${pathId}`);
    
    document.getElementById('path-title').textContent = path.title;
    document.getElementById('path-description').textContent = path.description || 'Sem descrição disponível';
    
    const coursesContainer = document.getElementById('path-courses');
    coursesContainer.innerHTML = '';
    
    if (path.courses.length === 0) {
      coursesContainer.innerHTML = '<p>Nenhum curso nesta trilha.</p>';
    } else {
      path.courses.forEach(course => {
        const card = createCard(course, 'course');
        coursesContainer.appendChild(card);
      });
    }
    
    showSection('pathDetails');
  } catch (error) {
    alert(`Erro ao carregar detalhes da trilha: ${error.message}`);
  }
}

async function loadCourses() {
  try {
    const courses = await fetchAPI('/courses');
    const coursesList = document.getElementById('courses-list');
    coursesList.innerHTML = '';
    
    if (courses.length === 0) {
      coursesList.innerHTML = '<p>Nenhum curso disponível no momento.</p>';
      return;
    }
    
    courses.forEach(course => {
      const card = createCard(course, 'course');
      coursesList.appendChild(card);
    });
    
    showSection('courses');
  } catch (error) {
    alert(`Erro ao carregar cursos: ${error.message}`);
  }
}

async function loadCourseDetails(courseId) {
  try {
    const course = await fetchAPI(`/courses/${courseId}`);
    
    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-description').textContent = course.description || 'Sem descrição disponível';
    
    // Carregar SCORM
    const scormContainer = document.getElementById('scorm-container');
    scormContainer.innerHTML = `<iframe src="/api/courses/${courseId}/scorm" frameborder="0" width="100%" height="600px"></iframe>`;
    
    // Exibir provas disponíveis
    const examList = document.getElementById('exam-list');
    examList.innerHTML = '';
    
    if (course.exams && course.exams.length > 0) {
      course.exams.forEach(exam => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = exam.title;
        a.onclick = (e) => {
          e.preventDefault();
          loadExam(exam.id);
        };
        
        li.appendChild(a);
        examList.appendChild(li);
      });
    } else {
      examList.innerHTML = '<li>Nenhuma avaliação disponível para este curso.</li>';
    }
    
    // Registrar progresso se o usuário estiver logado
    if (currentUser) {
      registerProgress(courseId);
    }
    
    showSection('courseDetails');
  } catch (error) {
    alert(`Erro ao carregar detalhes do curso: ${error.message}`);
  }
}

async function loadExam(examId) {
  if (!currentUser) {
    alert('Você precisa estar logado para realizar uma avaliação.');
    showSection('login');
    return;
  }
  
  try {
    const exam = await fetchAPI(`/exams/${examId}`);
    
    document.getElementById('exam-title').textContent = exam.title;
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    
    exam.questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
      
      const questionText = document.createElement('p');
      questionText.textContent = `${index + 1}. ${question.text}`;
      
      const answersList = document.createElement('div');
      answersList.className = 'answers-list';
      
      question.answers.forEach(answer => {
        const answerOption = document.createElement('label');
        answerOption.className = 'answer-option';
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `question_${question.id}`;
        radio.value = answer.id;
        radio.required = true;
        
        const answerText = document.createTextNode(answer.text);
        
        answerOption.appendChild(radio);
        answerOption.appendChild(answerText);
        answersList.appendChild(answerOption);
      });
      
      questionDiv.appendChild(questionText);
      questionDiv.appendChild(answersList);
      questionsContainer.appendChild(questionDiv);
    });
    
    // Configurar envio do formulário
    const examForm = document.getElementById('exam-form');
    examForm.onsubmit = (e) => {
      e.preventDefault();
      submitExam(examId);
    };
    
    showSection('exam');
  } catch (error) {
    alert(`Erro ao carregar avaliação: ${error.message}`);
  }
}

async function submitExam(examId) {
  const form = document.getElementById('exam-form');
  const answers = [];
  
  const radioGroups = form.querySelectorAll('input[type="radio"]:checked');
  radioGroups.forEach(radio => {
    const questionId = radio.name.split('_')[1];
    answers.push({
      question_id: questionId,
      answer_id: radio.value
    });
  });
  
  try {
    const result = await fetchAPI('/exams/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        exam_id: examId,
        answers
      })
    });
    
    // Exibir resultados
    document.getElementById('score-value').textContent = `${result.result.score.toFixed(1)}%`;
    document.getElementById('correct-answers').textContent = result.result.correct_answers;
    document.getElementById('total-questions').textContent = result.result.total_questions;
    
    const date = new Date(result.result.submitted_at);
    document.getElementById('submission-date').textContent = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    
    document.getElementById('back-to-course-btn').onclick = () => {
      showSection('courseDetails');
    };
    
    showSection('examResults');
  } catch (error) {
    alert(`Erro ao enviar avaliação: ${error.message}`);
  }
}

async function loadUserProfile() {
  if (!currentUser) {
    showSection('login');
    return;
  }
  
  try {
    const user = await fetchAPI('/users/profile');
    
    document.getElementById('profile-name').textContent = user.name;
    document.getElementById('profile-email').textContent = user.email;
    document.getElementById('profile-registration').textContent = user.registration;
    
    // Carregar progresso do usuário
    const progress = await fetchAPI('/progress');
    const userCourses = document.getElementById('user-courses');
    userCourses.innerHTML = '';
    
    if (progress.length === 0) {
      userCourses.innerHTML = '<p>Você ainda não iniciou nenhum curso.</p>';
    } else {
      progress.forEach(item => {
        const progressDiv = document.createElement('div');
        progressDiv.className = 'progress-item';
        
        const courseTitle = document.createElement('h4');
        courseTitle.textContent = item.course.title;
        
        const progressInfo = document.createElement('p');
        progressInfo.textContent = item.completed_at 
          ? `Concluído em ${new Date(item.completed_at).toLocaleDateString()}`
          : `Progresso: ${item.percentage.toFixed(1)}%`;
        
        const progressBarContainer = document.createElement('div');
        progressBarContainer.className = 'progress-bar-container';
        
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.width = `${item.percentage}%`;
        
        progressBarContainer.appendChild(progressBar);
        
        progressDiv.appendChild(courseTitle);
        progressDiv.appendChild(progressInfo);
        progressDiv.appendChild(progressBarContainer);
        
        userCourses.appendChild(progressDiv);
      });
    }
    
    showSection('profile');
  } catch (error) {
    console.error('Erro ao carregar perfil:', error);
    alert(`Erro ao carregar perfil: ${error.message}`);
  }
}

// Registro de progresso
async function registerProgress(courseId) {
  try {
    await fetchAPI('/progress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ course_id: courseId, percentage: 0 })
    });
  } catch (error) {
    console.error('Erro ao registrar progresso:', error);
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Inicialização
  updateNavigation();
  
  // Navegação
  navLinks.home.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('welcome');
  });
  
  navLinks.paths.addEventListener('click', (e) => {
    e.preventDefault();
    loadLearningPaths();
  });
  
  navLinks.courses.addEventListener('click', (e) => {
    e.preventDefault();
    loadCourses();
  });
  
  navLinks.login.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('login');
  });
  
  navLinks.register.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('register');
  });
  
  navLinks.profile.addEventListener('click', (e) => {
    e.preventDefault();
    loadUserProfile();
  });
  
  navLinks.logout.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });
  
  // Formulários
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    login(email, password).catch(error => {
      alert(`Erro ao fazer login: ${error.message}`);
    });
  });
  
  document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    
    register(name, email, password).catch(error => {
      alert(`Erro ao registrar: ${error.message}`);
    });
  });
  
  // Links de alternância entre login e cadastro
  document.getElementById('to-register-link').addEventListener('click', (e) => {
    e.preventDefault();
    showSection('register');
  });
  
  document.getElementById('to-login-link').addEventListener('click', (e) => {
    e.preventDefault();
    showSection('login');
  });
  
  // Botões da seção de boas-vindas
  document.getElementById('get-started-btn').addEventListener('click', () => {
    if (currentUser) {
      loadLearningPaths();
    } else {
      showSection('register');
    }
  });
  
  document.getElementById('learn-more-btn').addEventListener('click', () => {
    loadCourses();
  });
}); 