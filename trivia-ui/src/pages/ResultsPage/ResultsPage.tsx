import { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContextProvider/ScoreContextProvider";
import styles from "./ResultsPage.module.scss"
import { Link } from "react-router-dom";

const ResultsPage = () => {
  const scoreContext = useContext(ScoreContext);
  if (scoreContext === undefined) {
    throw new Error("Couldn't find score");
  }
  const { score } = scoreContext;


  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>You scored {score} points!</h2>
      <Link to="/game/new" className={styles.text}>Play again?</Link>
    </div>
  )
}

export default ResultsPage
