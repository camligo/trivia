import { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContextProvider/ScoreContextProvider";

const ResultsPage = () => {
  const scoreContext = useContext(ScoreContext);
  if (scoreContext === undefined) {
    throw new Error("Couldn't find score");
  }
  const { score } = scoreContext;

  return (
    <div>
      <h3>{score}</h3>
    </div>
  )
}

export default ResultsPage
