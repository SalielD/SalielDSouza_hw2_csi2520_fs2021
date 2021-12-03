// Functionality for Trivia Quiz Game
// Stores the start button
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn'); // Stores the next button
const questionContainerElement = document.getElementById('question-container'); // Stores all questions
const questionElement = document.getElementById('question'); // Stores each individual question
const answerButtonsElement = document.getElementById('answer-buttons'); // Stores the answer buttons
/*
 Create variables to allow the questions to be shuffled in a random order and to get 
 the index of a current question in the array
 */
let shuffleQuestions, currentQuestionIndex;
// Add an event listener to start the quiz when the user clicks on the start button
startButton.addEventListener('click', startQuiz); 
function startQuiz() // Function to start the quiz
{
    console.log('Quiz has started');
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort();
    currentQuestionIndex = 0; // Start with the first question at index 0
    questionContainerElement.classList.remove('hide');
    setNewQuestion();
}