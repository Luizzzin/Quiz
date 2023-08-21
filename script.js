// Defina as perguntas, opções de resposta e respostas corretas
const questions = [
    {
      question: "Explique as principais causas e consequências da Revolução Industrial no século XIX.",
      options: ["Causas: Avanços tecnológicos; Condições de trabalho precárias. Consequências: Melhoria nas condições de vida; Crescimento das cidades.", "Causas: Guerras mundiais; Urbanização. Consequências: Desenvolvimento rural; Redução da produção industrial.", "Causas: Declínio das cidades; Escassez de recursos naturais. Consequências: Aumento da produção industrial; Migração para o campo.", "Causas: Expansão colonial; Revoltas camponesas. Consequências: Queda da produção industrial; Isolamento internacional."],
      correctAnswer: 1,
    },
    {
      question: "Qual é a solução para a equação quadrática 2x² - 5x +3 = 0?",
      options: ["x = 1 e x = 3", "x = 2 e x = 5", "x= -1 e x= -3", "x = -2 e x = -3"],
      correctAnswer: 2,
    },
    {question: 'Qual o montante de uma aplicação de R$3.000,00 durante 6 meses a taxa de juros simples 10% ao ano?',
    options: ["R$ 3000", "R$ 4800", "R$ 3150", "R$ 3300"],
    correctAnswer: 3,}
  ];
  
  // Inicialize variáveis para controlar o progresso do quiz
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Função para carregar a próxima pergunta
  function loadNextQuestion() {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      
      // Atualize o texto das perguntas e opções de resposta no HTML
      document.getElementById("numeroPergunta").textContent = `Pergunta ${currentQuestionIndex + 1}`;
      document.getElementById("pergunta").textContent = currentQuestion.question;
      for (let i = 0; i < currentQuestion.options.length; i++) {
        document.getElementById(`pt${i + 1}`).textContent = currentQuestion.options[i];
      }
    } else {
      // O quiz terminou, exiba a pontuação final
      document.getElementById("numeroPergunta").textContent = "Quiz Concluído!";
      document.getElementById("pergunta").textContent = `Sua pontuação final é: ${score}/${questions.length}`;
      document.getElementById("perguntas").innerHTML = ""; // Remova as opções de resposta
    }
  }
  
  // Adicione um evento de clique para os botões de resposta
  document.getElementById("pt1").addEventListener("click", () => checkAnswer(0));
  document.getElementById("pt2").addEventListener("click", () => checkAnswer(1));
  document.getElementById("pt3").addEventListener("click", () => checkAnswer(2));
  document.getElementById("pt4").addEventListener("click", () => checkAnswer(3));
  
  // Função para verificar a resposta selecionada
  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
      score++; // Resposta correta, aumente a pontuação
    }
    currentQuestionIndex++; // Vá para a próxima pergunta
    loadNextQuestion(); // Carregue a próxima pergunta
  }
  
  // Inicie o quiz carregando a primeira pergunta
  loadNextQuestion();
  