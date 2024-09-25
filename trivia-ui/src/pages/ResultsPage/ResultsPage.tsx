import { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContextProvider/ScoreContextProvider";
import styles from "./ResultsPage.module.scss"
import { Link } from "react-router-dom";
import { QuestionsContext } from "../../context/QuestionsContextProvider/QuestionsContextProvider";

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


  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>You scored {score}/{numOfQuestions} points!</h2>
      <Link to="/game/new" className={styles.text}>Play again?</Link>
    </div>
  )
}

export default ResultsPage
