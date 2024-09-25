import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../../context/QuestionsContextProvider/QuestionsContextProvider";
import { getQuestionAnswers } from "../../services/trivia-service";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const context = useContext(QuestionsContext);
  if (context === undefined) {
    throw new Error('Something went wrong');
  }
  const { questions } = context;

  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentAnswers, setCurrentAnswers] = useState<string[]>([]);

  const lastQuestionIndex = questions.length;

  useEffect(() => {
    const answers = getQuestionAnswers(questions[currentQuestionIndex]);
    setCurrentAnswers(answers);
  }, [currentQuestionIndex]);

  const nextQuestion = (index: number) => {
    if (index === lastQuestionIndex - 1) {
      navigate("/");
    } else {
      setCurrentQuestionIndex(index + 1);
    }
  }

  return (
    <QuestionForm answers={currentAnswers} onSubmit={() => nextQuestion(currentQuestionIndex)} questionIndex={currentQuestionIndex}/>
  )
}

export default QuestionPage
