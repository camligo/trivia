import { useEffect, useState } from "react";
import { getGame, transformStringToArray } from "../../services/game-service";
import { useParams } from "react-router-dom";
import { decodeHtmlEntities } from "../../services/trivia-service";

const ReviewPage = () => {
  const [game, setGame] = useState(null);
  const [questions, setQuestions] = useState<string[]>([])
  const [answers, setAnswers] = useState<string[]>([])
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)

  const { id } = useParams() as { id: string };
  const idNumber = parseInt(id);

  useEffect(() => {
    getGame(idNumber)
      .then(data => {
        setGame(data)
        const decodedQuestions = decodeHtmlEntities(data.questions)
        const cleanedQuestions = transformStringToArray(decodedQuestions)
        setQuestions(cleanedQuestions)
        console.log(cleanedQuestions)

        const decodedAnswers = decodeHtmlEntities(data.answers)
        const cleanedAnswers = transformStringToArray(decodedAnswers)
        setAnswers(cleanedAnswers)
        console.log(cleanedAnswers)
      })
      .catch(e => console.error(e))
  }, [idNumber]);

  // Function to get answers for a specific question
  const getAnswersForQuestion = (index: number) => {
    const startIndex = index * 4; // Assuming 4 answers per question
    return answers.slice(startIndex, startIndex + 4);
  };

  return(
    <>
      <h1>Review</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <h2>{question}</h2>
          <ul>
            {getAnswersForQuestion(index).map((answer, answerIndex) => (
              <li key={answerIndex}>{answer}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default ReviewPage;
