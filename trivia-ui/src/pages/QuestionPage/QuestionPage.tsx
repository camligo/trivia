import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../../context/QuestionsContextProvider/QuestionsContextProvider";
import { getQuestionAnswers } from "../../services/trivia-service";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../../context/ScoreContextProvider/ScoreContextProvider";

const QuestionPage = () => {
  const context = useContext(QuestionsContext);
  if (context === undefined) {
    throw new Error('Something went wrong');
  }
  const { questions } = context;

  const scoreContext = useContext(ScoreContext);
  if (scoreContext === undefined) {
    throw new Error("Couldn't find score");
  }
  const { score, setScore } = scoreContext;

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
      const newScore = score + 1;
      setScore(newScore);
      console.log("score", newScore)
      navigate("/game/results");
    } else {
      setCurrentQuestionIndex(index + 1);
      const newScore = score + 1;
      setScore(newScore);
    }
  }

  return (
    <QuestionForm answers={currentAnswers} onSubmit={() => nextQuestion(currentQuestionIndex)} questionIndex={currentQuestionIndex}/>
  )
}

export default QuestionPage
