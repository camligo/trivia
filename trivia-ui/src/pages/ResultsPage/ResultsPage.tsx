import { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContextProvider/ScoreContextProvider";
import styles from "./ResultsPage.module.scss"
import { Link } from "react-router-dom";
import { QuestionsContext } from "../../context/QuestionsContextProvider/QuestionsContextProvider";
import { calculateResult } from "../../services/trivia-service";
import StarIcon from "../../components/StarIcon/StarIcon";
import ResultAnimation from "../../components/ResultAnimation/ResultAnimation";

const ResultsPage = () => {
  const scoreContext = useContext(ScoreContext);
  if (scoreContext === undefined) {
    throw new Error("Couldn't find score");
  }
  const { score } = scoreContext;

  const questionContext = useContext(QuestionsContext);
  if (questionContext === undefined) {
    throw new Error("Couldn't find score");
  }
  const { questions } = questionContext;

  const numOfQuestions = questions.length;

  const percentageScore = score / numOfQuestions * 100;
  const resultMessage = calculateResult(percentageScore);

  let starsToFill = 2;
  if (percentageScore >= 75) {
    starsToFill = 3;
  } else if (percentageScore < 40) {
    starsToFill = 1;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>{resultMessage}</h2>

      <ResultAnimation percentageScore={percentageScore}/>

      <div className={styles.stars}>
        {[...Array(3)].map((_, index) => (
          <StarIcon key={index} isFilled={index < starsToFill}/>
        ))}
      </div>
      <h4 className={styles.text}>You scored {score}/{numOfQuestions} points</h4>
      <Link to="/game/new" className={styles.text}>Play again?</Link>
    </div>
  )
}

export default ResultsPage
