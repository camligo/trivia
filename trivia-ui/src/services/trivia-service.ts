import { GameFormData } from "../components/GameForm/schema";

const BASE_URL = "https://opentdb.com/api.php?amount=5&";

export interface CategoryResponse {
  id: number;
  name: string;
}

export interface QuestionResponse {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const difficulties = ["easy", "medium", "hard"]

export const fetchNewTrivia = async (data: GameFormData) => {
  const response = await fetch(`${BASE_URL}category=${data.category}&difficulty=${data.difficulty}&type=multiple`);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const responseData = await response.json();

  const updatedResponseData = responseData.results.map((questionData: {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }) => ({
    question: questionData.question,
    correct_answer: questionData.correct_answer,
    incorrect_answers: questionData.incorrect_answers
  }))

  return updatedResponseData as QuestionResponse[];
}

export const getAllCategories = async () => {
  const response = await fetch("https://opentdb.com/api_category.php");

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();
  const formattedData = data.trivia_categories;
  return formattedData as CategoryResponse[];
}

export const getAllQuestions = (questions: QuestionResponse[]) => {
  return questions.map((question) => question.question).join(";");
}

export const getQuestionAnswers = ( question: QuestionResponse ) => {
  const answers: string[] = [];

  answers.push(question.correct_answer);

  for (let i = 0; i < question.incorrect_answers.length; i++) {
    answers.push(question.incorrect_answers[i]);
  }
  return answers.sort(() => Math.random() - 0.5);
}

export const checkAnswer = (selectedAnswer: string, currentQuestion: QuestionResponse) => {
  if (selectedAnswer === currentQuestion.correct_answer) {
    return true;
  }

  return false;
}

export const decodeHtmlEntities = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

export const calculateResult = (percentageScore: number) => {
  const winMessages = ["Amazing!", "Perfect!", "Excellent!"];
  const neutralMessages = ["Nice job!", "Well done!", "Good work!"];
  const loseMessages = ["Better luck next time...", "You can do better...", "Have you thought about becoming a carpenter instead?"];

  const randomIndex = Math.floor(Math.random() * 3);

  if (percentageScore >= 75) {
    return winMessages[randomIndex];
  } else if (percentageScore < 40) {
    return loseMessages[randomIndex];
  }
  return neutralMessages[randomIndex];
}
