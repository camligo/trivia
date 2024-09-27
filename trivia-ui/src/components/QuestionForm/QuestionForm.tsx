import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { QuestionFormData, schema } from "./schema";
import styles from "./QuestionForm.module.scss";
import NextQuestionButton from "../NextQuestionButton/NextQuestionButton";
import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../../context/QuestionsContextProvider/QuestionsContextProvider";
import { ScoreContext } from "../../context/ScoreContextProvider/ScoreContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { checkAnswer, decodeHtmlEntities, getQuestionAnswers } from "../../services/trivia-service";
import { updateGame } from "../../services/game-service";

const QuestionForm = () => {
  const context = useContext(QuestionsContext);
  if (context === undefined) {
    throw new Error('Something went wrong');
  }
  const { questions, currentQuestionIndex, setCurrentQuestionIndex } = context;

  const scoreContext = useContext(ScoreContext);
  if (scoreContext === undefined) {
    throw new Error("Couldn't find score");
  }
  const { score, setScore } = scoreContext;

  const navigate = useNavigate();

  const { id } = useParams() as { id: string };
  const idNumber = parseInt(id);

  const [currentAnswers, setCurrentAnswers] = useState<string[]>([]);

  const lastQuestionIndex = questions.length;

  useEffect(() => {
    const answers = getQuestionAnswers(questions[currentQuestionIndex]);
    setCurrentAnswers(answers);
  }, [currentQuestionIndex]);

  const nextQuestion = (index: number) => {
    if (index === lastQuestionIndex - 1) {
      const check = checkAnswer(getValues("selectedAnswer"), questions[index]);

      if (check) {
        const newScore = score + 1;
        setScore(newScore);
        console.log("score", newScore);
        updateGame(idNumber, newScore);
      } else {
        updateGame(idNumber, score);
      }

      navigate("/game/results");
    } else {
      const check = checkAnswer(getValues("selectedAnswer"), questions[index]);

      if (check) {
        const newScore = score + 1;
        setScore(newScore);
      }

      setCurrentQuestionIndex(index + 1);
    }
  }

  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<QuestionFormData>({ resolver: zodResolver(schema)})

  isSubmitSuccessful && reset();

  return (
    <form onSubmit={handleSubmit(() => nextQuestion(currentQuestionIndex))} className={styles.formWrapper}>
      <h2 className={styles.question}>{decodeHtmlEntities(questions[currentQuestionIndex].question)}</h2>
      <div className={styles.answersContainer}>
        {currentAnswers.length === 0 ? (
          <p>Couldn't find any answers</p>
        ) : (
          currentAnswers.map((answer, index) => (
            <div key={index}>
              <input
                {...register("selectedAnswer")}
                type="radio"
                id={answer}
                value={answer}
              />
              <label htmlFor={answer} className={styles.btn}>
                {decodeHtmlEntities(answer)}
              </label>
            </div>
          ))
        )}
      </div>
      <NextQuestionButton/>
    </form>
  )
}

export default QuestionForm
