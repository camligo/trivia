import { useContext } from "react";
import { QuestionsContext } from "../../context/QuestionsContextProvider/QuestionsContextProvider";
import { QuestionResponse, getQuestionAnswers } from "../../services/trivia-service";
import QuestionForm from "../../components/QuestionForm/QuestionForm";

const QuestionPage = () => {
  const context = useContext(QuestionsContext);
  if (context === undefined) {
    throw new Error('Something went wrong');
  }
  const { questions } = context;

  const answers = getQuestionAnswers(questions[0]);

  return (
    <>
    <div>
      {/* {questions.length === 0 ? (
        <p>Couldn't find any questions</p>
      ) : (
        questions.map((question: QuestionResponse, index) => (
          <p key={index}>{question.question}</p>
        ))
      )} */}
    </div>
    <QuestionForm answers={answers} question={questions[0].question}/>
    </>
  )
}

export default QuestionPage
