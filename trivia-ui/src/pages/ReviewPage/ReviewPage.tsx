import { useEffect, useState } from "react";
import { getGame, transformStringToArray } from "../../services/game-service";
import { useParams } from "react-router-dom";
import { decodeHtmlEntities } from "../../services/trivia-service";

const ReviewPage = () => {
  const [game, setGame] = useState(null);
  const [questions, setQuestions] = useState<string[]>([])
  const [answers, setAnswers] = useState<string[]>([])

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

  return(
    <>
      Review
    </>
  )
}

export default ReviewPage;
