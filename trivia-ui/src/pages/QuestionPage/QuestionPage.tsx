import { useContext } from "react";
import { QuestionsContext } from "../../context/QuestionsContextProvider/QuestionsContextProvider";
import { QuestionResponse } from "../../services/trivia-service";

const QuestionPage = () => {
  const context = useContext(QuestionsContext);
  if (context === undefined) {
    throw new Error('Something went wrong');
  }
  const { questions } = context;

  return (
    <div>
      {questions.length === 0 ? (
        <p>Couldn't find any questions</p>
      ) : (
        questions.map((question: QuestionResponse, index) => (
          <p key={index}>{question.question}</p>
        ))
      )}
    </div>
  )
}

export default QuestionPage
