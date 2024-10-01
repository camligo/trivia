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
import PreviousQuestionArrow from "../PreviousQuestionArrow/PreviousQuestionArrow";

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

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [currentAnswers, setCurrentAnswers] = useState<string[]>([]);

  const lastQuestionIndex = questions.length;

  const {
    register,
    getValues,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<QuestionFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      selectedAnswer: "",
    },
  })

  const watchSelectedAnswer = watch("selectedAnswer");

  useEffect(() => {
    const answers = getQuestionAnswers(questions[currentQuestionIndex]);
    setCurrentAnswers(answers);

    setValue("selectedAnswer", selectedAnswers[currentQuestionIndex] || "");
  }, [currentQuestionIndex]);

  const nextQuestion = (index: number) => {
    const selectedAnswer = getValues("selectedAnswer");

    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[index] = selectedAnswer;
    setSelectedAnswers(updatedSelectedAnswers);

    const isCorrect = checkAnswer(selectedAnswer, questions[index]);
    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);
      updateGame(idNumber, newScore)
    } else {
      updateGame(idNumber, score); // only update game without a change of score
    }

    if (index === lastQuestionIndex - 1) {
      navigate(`/game/${idNumber}/results`);
    } else {
      setCurrentQuestionIndex(index + 1);
    }
  }

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  isSubmitSuccessful && reset();

  return (
    <form onSubmit={handleSubmit(() => nextQuestion(currentQuestionIndex))} className={styles.formWrapper}>

      <PreviousQuestionArrow onClick={previousQuestion} />

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
                checked={watchSelectedAnswer === answer}
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
