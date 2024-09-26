import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./CreateGamePage.module.scss"
import GameForm from "../../components/GameForm/GameForm";
import { GameFormData } from "../../components/GameForm/schema";
import { fetchNewTrivia } from "../../services/trivia-service";
import { QuestionsContext } from "../../context/QuestionsContextProvider/QuestionsContextProvider";
import { useContext } from "react";
import { createGame } from "../../services/game-service";
import { ScoreContext } from "../../context/ScoreContextProvider/ScoreContextProvider";

const CreateGamePage = () => {
  const context = useContext(QuestionsContext);
  if (context === undefined) {
    throw new Error('Something went wrong');
  }
  const { setQuestions } = context;

  const scoreContext = useContext(ScoreContext);
  if (scoreContext === undefined) {
    throw new Error("Couldn't find score");
  }
  const { setScore } = scoreContext;

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const handleSubmit = async (data: GameFormData) => {
    try {
      // Create the game and fetch new trivia in parallel
      const [game, trivia] = await Promise.all([
          createGame(data),
          fetchNewTrivia(data),
      ]);
      
      setScore(0);
      setQuestions(trivia);
      console.log('Game:', game);
      console.log('Trivia:', trivia);

      navigate(`/game/${game.id}`); // Navigate to the game page
    } catch (e) {
        console.error('Error:', e); // Handle errors
    }
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.backArrow} onClick={handleBackClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <GameForm onSubmit={handleSubmit} />
    </div>
  )
}

export default CreateGamePage
