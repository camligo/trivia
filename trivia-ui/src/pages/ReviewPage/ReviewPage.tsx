import { useEffect, useState } from "react";
import { getGame, transformStringToArray } from "../../services/game-service";
import { useParams } from "react-router-dom";
import { decodeHtmlEntities } from "../../services/trivia-service";
import styles from "./ReviewPage.module.scss"

const ReviewPage = () => {
  const [game, setGame] = useState(null);
  const [questions, setQuestions] = useState<string[]>([])
  const [answers, setAnswers] = useState<string[]>([])
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([])

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

        const decodedCorrectAnswers = decodeHtmlEntities(data.correctAnswers)
        const cleanedCorrectAnswers = transformStringToArray(decodedCorrectAnswers)
        setCorrectAnswers(cleanedCorrectAnswers)
        console.log("correct answer", cleanedCorrectAnswers)
      })
      .catch(e => console.error(e))
  }, [idNumber]);

  // Function to get answers for a specific question
  const getAnswersForQuestion = (index: number) => {
    const startIndex = index * 4; // Assuming 4 answers per question
    return answers.slice(startIndex, startIndex + 4);
  };

  return(
    <div className={styles.pageWrapper}>
      <h1>Review</h1>
      {questions.map((question, index) => (
        <div key={index} className={styles.questionContainer}>
          <h2 className={styles.question}>{question}</h2>
          <div className={styles.answersContainer}>
            <ul className={styles.answersList}>
              {getAnswersForQuestion(index).map((answer, answerIndex) => {
                const isCorrect = answer === correctAnswers[index];
                return (
                  <li
                    key={answerIndex}
                    className={`${styles.answer} ${isCorrect ? styles.correctAnswer : ""}`}
                  >
                    {answer}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReviewPage;
