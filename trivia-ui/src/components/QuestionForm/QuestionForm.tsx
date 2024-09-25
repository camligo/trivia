import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { QuestionFormData, schema } from "./schema";
import styles from "./QuestionForm.module.scss";
import NextQuestionButton from "../NextQuestionButton/NextQuestionButton";
import { useContext } from "react";
import { QuestionsContext } from "../../context/QuestionsContextProvider/QuestionsContextProvider";

interface QuestionFormProps {
  onSubmit: () => unknown;
  answers: string[];
  questionIndex: number;
}

const QuestionForm = ( { onSubmit, answers, questionIndex }: QuestionFormProps ) => {
  

  const context = useContext(QuestionsContext);
  if (context === undefined) {
    throw new Error('Something went wrong');
  }
  const { questions } = context;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<QuestionFormData>({ resolver: zodResolver(schema)})

  isSubmitSuccessful;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.Question}>{questions[questionIndex].question}</h2>
      <div className={styles.AnswersContainer}>
        {answers.length === 0 ? (
          <p>Couldn't find any answers</p>
        ) : (
          answers.map((answer, index) => (
            <div key={index}>
                <input
                  {...register("selectedAnswer")}
                  type="radio"
                  id={answer}
                  value={answer}
                />
                <label htmlFor={answer} className={styles.btn}>
                  {answer}
                </label>
              </div>
          ))
        )}
      </div>

      <NextQuestionButton />
    </form>
  )
}

export default QuestionForm
